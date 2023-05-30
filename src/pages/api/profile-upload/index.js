// s3 접근하기 위해 불러옴
import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
  DeleteObjectCommand,
} from "@aws-sdk/client-s3";
// presigned url 이용하기 위해 불러옴
// import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import multer from 'multer';
import pool from "../../../../db";
import jwt, { verify } from "jsonwebtoken";

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  },
});


// 파일 업로드
export async function uploadFile(fileBuffer, fileName, mimetype) {
  const uploadParams = {
    Bucket: process.env.AWS_S3_BUCKET_NAME,
    Key: fileName,
    Body: fileBuffer,
    ContentType: mimetype,
  };

  const res = await s3Client.send(new PutObjectCommand(uploadParams));
  return res.$metadata.httpStatusCode;
}

function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Create a multer storage configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

export default async function handler(req, res) {
  // console.log(req.headers.authorization);
  if (req.method === 'POST') {
    const token = req.headers.authorization.replace('Bearer ', '');
    console.log(token);
    let email = null;
    try{
      const verify = jwt.verify(token,process.env.JWT_SECRET);
      email = verify.email;
    }catch(err){
      console.log(err);
      res.status(401).json({err:'권한이 없음'});
      return;
    }
    

    let conn = null;
    try {
      await runMiddleware(req, res, upload.single("image"));
      console.log(req.body);
      const fileBuffer = req.file.buffer;
      const fileName = req.body.name;
      const fileType = req.file.mimetype;

      await uploadFile(fileBuffer, fileName, fileType);

      let sql = `
        UPDATE tbl_users
        SET profileImg = ?
        WHERE email = ?
      `;
      conn = await pool.getConnection();
      await conn.query(sql, [`https://seoulbook.s3.ap-northeast-2.amazonaws.com/${fileName}`, email]);

      return res.status(201).json({
        message: "s3 uploading with multer succeeded",
        profileImg: `https://seoulbook.s3.ap-northeast-2.amazonaws.com/${fileName}`,
      });

    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({ error: 'Failed to upload fileddd' });
    }finally{
      if(conn!==null) conn.release();
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}


export const config = {
  api: {
    bodyParser: false,
    sizeLimit: "4mb", // 업로드 이미지 용량 제한
  },
};