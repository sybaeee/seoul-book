import pool from "../../../../db";
import bcrypt from "bcryptjs";

const handler = async (req, res)=>{
  if(req.method==='POST'){

    let conn = null;
    
    try{
      conn = await pool.getConnection();
      let [result] = await conn.query('SELECT * FROM tbl_users where email = ?', req.body.email);
      if(result.length !== 0){
        res.status(401).json({message:'아이디 중복'});
        return;
      }
      const {languages, password, verifyPassword, ...newUser} = req.body
      
      const hashedPassword = await bcrypt.hash(password, 10);
      
      await conn.query('INSERT INTO tbl_users set ?', {...newUser , pw:hashedPassword});
      languages?.forEach(async element => {
        await conn.query('INSERT INTO user_lang (email, langId) values (?, ?)', [newUser.email, Number(element)]);
      });
      res.status(201).json({message:"회원가입 성공!"});
      
    }catch(err){  
      console.log(err);
      res.status(500).json({message:'서버요류'});
      
    }finally{
      if(conn !== null) conn.release();
    }
    return;
  }


  res.status(409).json({message: '허용되지 않는 요청 메소드'});
  return;

}

export default handler;