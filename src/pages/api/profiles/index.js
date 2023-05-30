import pool from "../../../../db";

const handler = async (req, res)=>{
  if(req.method === 'GET'){
    let conn = null;
    try{
      let {gender, location} = req.query;
      let values =[];
      let sql = `
      select *
      from tbl_users u  natural join tbl_profile p
      where gender = ? and u.email IN (
        select email from user_location 
        where (location = '종로구' or location = '용산구')
      )
      order by u.createdAt desc;
      `;
      if(gender !== undefined){
        sql += ' where gender = ? ';
        values.push(Number(gender));
      }
      if(location !== undefined && location.length !== 0){
        sql += gender ? 
        'and u.email in (select email from user_location where ' : 
         ' where u.email in (select email from user_location where ';
        
         location.forEach(element => {
            sql += ' location = ? ';
            values.push(element);
         });

         sql += ')'

      }

      sql += 

      conn = await pool.getConnection();

      console.log(location)

      res.status(200).json({message:'success'})

    }catch(err){
      console.log(err);
      res.status(500).json({message:'서버오류'});
    }finally{
      if(conn !== null) conn.release();
    }
    return;
  }
  res.status(409).json({message:'method not allow'});
}

export default handler;