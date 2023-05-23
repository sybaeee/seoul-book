import pool from "../../../../db";

const handler = async (req, res)=>{

  if(req.method === 'GET'){
    let conn = null;
    try{
      conn = await pool.getConnection();
      
      let [result] = await conn.query('select * from tbl_users where email = ?', req.query.email);
      if(result.length===0){
        res.status(200).json({exist:false});
      }else{
        res.status(200).json({exist:true});
      }
    }catch(err){
      res.status(500).json({message:'서버 오류'});
      return;
    }finally{
      if(conn !== null) conn.release();
    }
    return;
  }
  
  res.status(409).json({message:'허용되지 않은 메소드'});
}

export default handler;