import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';
import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';

const s3Client = new S3Client({
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY,
  },
  endpoint: 'https://s3.ap-northeast-2.amazonaws.com',
});

// Create a multer storage configuration
const storage = multer.memoryStorage();
const upload = multer({ storage });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await upload.single('file')(req, res, async (err) => {
        if (err) {
          console.error('Error uploading file:', err);
          res.status(500).json({ error: 'Failed to upload file' });
          return;
        }

        const file = req.file;
        if (!file) {
          res.status(400).json({ error: 'No file found in the request' });
          return;
        }

        // Generate a unique file name using UUID
        const fileName = `${uuidv4()}_${file.originalname}`;

        // Upload the file to AWS S3
        const uploadParams = {
          Bucket: 'seoulbook',
          Key: fileName,
          Body: file.buffer,
        };

        try {
          await s3Client.send(new PutObjectCommand(uploadParams));

          // Optionally, generate a signed URL for accessing the uploaded file
          const imageUrl = `https://seoulbook.s3.ap-northeast-2.amazonaws.com/${uploadParams.Key}`;

          res.status(200).json({ url: imageUrl });
        } catch (error) {
          console.error('Error uploading file:', error);
          res.status(500).json({ error: 'Failed to upload file' });
        }
      });
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({ error: 'Failed to upload file' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
