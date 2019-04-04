const sql = require("../model/mysqlModel");


exports.getApp =  (req, res) => {

   let id = (req.query.id) 
  sql.query("SELECT `id`,`title`,`description`,`vanue`,`startDate` as start,`endDate` as end,`status`  from appointments WHERE appointments.id =" + id + " ; SELECT a.id , a.title, a.description , a.vanue , a.startDate as start , a.endDate as end , i.status FROM appointments a , invites i WHERE a.id = i.appID AND i.userID = " + id + ";" ,[1,2] , (err , suc , next) => {
 
  
    let resp = suc[0] ;

    suc[1].map( data => {
      resp.push(data) ;
    })
    //resp.push(suc[1]) ;
    
   
      res.send(resp)
   

  })
}

  exports.getInvites =  async function ()  {
  
   return sql.query("SELECT a.id , a.title, a.description , a.vanue , a.startDate , a.endDate , i.status FROM appointments a , invites i WHERE a.id = i.appID AND i.userID = 1", (err , suc , next) => {
    return suc
    
  })

}


exports.login2 = (req, res) => { 
  
  console.log(req.query.email)
  let email =  req.query.email
  let password = req.query.password 

  sql.query(`SELECT * from user where email = '${email}' AND password = '${password}'` , (err , suc , next) => {
 
    if (err) throw err ;
    res.send(suc)

  });
}


exports.updateStatus = (req , res) => { 

  let uid =  req.query.uid
  let aid = req.query.aid 

  sql.query(`UPDATE invites SET status=1 WHERE invites.userID = ${uid} and invites.appID =${aid}`) 
 




    res.send({status: 'done'})

  

}



exports.addEvent = (req , res) => { 

  let email =  req.query.email
  let password = req.query.password 
  let name = req.query.name 

  sql.query(`INSERT INTO user (id, name, email, password, activation) VALUES (NULL, ${name}, ${email}, ${password}, '1');`) 

    res.send({status: 'done'})

  
    
}

exports.deleteApp = (req , res) => { 

  let aid =  req.query.aid 
  console.log(aid)


  sql.query(`DELETE FROM invites WHERE appID = ${aid}; DELETE FROM appointments WHERE appointments.id = ${aid};` ,[1,2] ,(err , suc) => {
 
    if (err) throw err ;
  })
  

    res.send({status: 'done'})

  
    
}


exports.makeApp = (req , res) => { 

  let title =  req.query.title
  let desc = req.query.desc 
  let vanue = req.query.vanue 
  let start =  req.query.start
  let end = req.query.end 
  let uid = req.query.uid 

  console.log(desc)

  sql.query(`INSERT INTO appointments (id, title, description, vanue, startDate, endDate, userID, status ) VALUES (NULL, '${title}', '${desc}', '${vanue}', '${start}', '${end}', ${uid}, 1);` , (err , suc) => {
   
    if (err) throw err ;

    res.send({res: suc})
  }) 

   // res.send({status: 'done'})

    
}


exports.postData = (req, res) => {
  res.json({ sbu: 'hey' });
}




