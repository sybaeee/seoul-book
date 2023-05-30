// api/users/loggedIn
import jwt from "jsonwebtoken";
import pool from "../../../../../db";

const handler = async (req, res)=>{
  if(req.method === 'GET'){
    const token = req.headers.authorization.replace('Bearer ', '');
    console.log(req.headers.authorization);
    let verify = null;
    try{
      verify = jwt.verify(token, process.env.JWT_SECRET);
    }catch(err){
      console.log(err);
      return res.status(401).json({message:'로그인 권한 없음'});
    }

    let conn = null;
    try{
      conn = await pool.getConnection();
      let [result] = await conn.query('select * from tbl_users where email = ?', verify.email);

      res.status(200).json(result[0]);
      
    }catch(err){
      console.log(err);
      res.status(500).json({message:'서버오류 발생'});

    }finally{
      conn?.release();
    }

    return;
  }

  res.status(405).json({message:'method 허용되지 않음'})
}

export default handler;