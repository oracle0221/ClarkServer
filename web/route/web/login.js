const express=require('express');
const common=require('../../libs/common');
const mysql=require('mysql');

var db=mysql.createPool({host: 'localhost', user: 'root', password: '', database: 'clark'});

module.exports=function (){
  var router=express.Router();
  
  router.get('/', (req, res)=>{
    
    res.render('login.ejs', {});
  });
  router.post('/', (req, res)=>{
    var username=req.body.username;
    var password=common.md5(req.body.password);

    db.query(`SELECT * FROM admin_table WHERE username='${username}'`, (err, data)=>{
      if(err){
        console.error(err);
      //  res.status(500).send('database error').end();
        res.send({
            code : 1,
            status:500,
            msg : '数据库异常'
        }).end();
      }else{
        if(data.length==0){
        //  res.status(400).send('no this admin').end();
          res.send({
            code : 1,
            status:400,
            msg : '没此用户'
          }).end();

        }else{
          if(data[0].password==password){
            //成功
            req.session['admin_id']=data[0].ID;
          //  res.redirect('/');
            res.send({
                code : 0,
                status : 200,
                msg : 'success'
            }).end();
          }else{
         //   res.status(400).send('this password is incorrect').end();
            res.send({
                code : 1,
                status:400,
                msg : '密码不正确'
            }).end();
          }
        }
      }
    });
  });

  return router;
};
