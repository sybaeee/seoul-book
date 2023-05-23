import pool from "../../../../db";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";

const handler = async (req, res)=>{

  if(req.method === 'POST'){

    const inputEmail = req.body.email;
    const inputPw = req.body.pw;
    
    let conn = null;
    try{
      conn = await pool.getConnection();
      let [rows] = await conn.query('SELECT pw FROM tbl_users WHERE email=?', inputEmail);
      if(rows.length === 0) {
        res.status(401).json({message:'로그인 실패'});
        return;
      }
      const {pw, ...user} = rows[0];
      
      const isSuccess = await bcrypt.compare(inputPw, pw);
      if(!isSuccess){
        res.status(401).json({message:'로그인 실패'});
        return;
      }
      
      const token = jwt.sign(user, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      
      res.status(200).json({message:'로그인성공', token})
      
    }catch(err){
      console.log(err);
      res.status(500).json({message:'서버내부 오류'});
    }finally{
      if(conn !== null) conn.release();
    }    
    return;
  }


  res.status(405).json({message:'유효하지 않은 요청방식'});
  return;
}

export default handler;