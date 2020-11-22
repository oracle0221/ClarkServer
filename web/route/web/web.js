'use strict';

const express=require('express');
const common=require('../../libs/common');
const mysql=require('mysql');

var db=mysql.createPool({host: 'localhost', user: 'root', password: '123456', database: 'clark'});

module.exports=function (){
  var router=express.Router();


  router.use( (req, res,next)=>{

    if( !req.session['admin_id'] && req.url != '/login' ){
      res.redirect('/web/login');
    }else{
      next();
    }

  } );

  // 登录
  router.use( '/login', require('./login')() );


  // 个人信息 页面
  router.get( '/person_info', function(req, res){

    res.render('addresume.ejs', {});

  } );


  // 个人信息提交 ===== 接口
  router.post('/person_info', function(req, res){
    
     let username = req.body.username,
        year = req.body.year,
        month = req.body.month,
        pos_id = req.body.pos_id,
        pos = req.body.pos,
        subpos_id = req.body.subpos_id,
        subpos = req.body.subpos,
        province = req.body.province,
        province_id = req.body.province_id,
        city_id = req.body.city_id,
        city = req.body.city,
        remark = req.body.remark,
        href = req.body.href;

    // 添加
    console.log(`INSERT INTO person_table (username,year,month,pos_id,pos,subpos_id,subpos,province,province_id,city_id,city,remark,href) VALUE('${username}', '${year}', '${month}', '${pos_id}', '${pos}', '${subpos_id}', '${subpos}', '${province}', '${province_id}', '${city_id}', '${city}', '${remark}', '${href}')`);

    db.query(`INSERT INTO person_table (username,year,month,pos_id,pos,subpos_id,subpos,province,province_id,city_id,city,remark,href) VALUE('${username}', '${year}', '${month}', '${pos_id}', '${pos}', '${subpos_id}', '${subpos}', '${province}', '${province_id}', '${city_id}', '${city}', '${remark}', '${href}')`, (err, data)=>{
          if(err){
            console.error(err);
            res.send({
              code : 1,
              status:500,
              msg : '数据库异常'
          }).end();
          }else{
            res.send({
                code : 0,
                status : 200,
                msg : 'success'
            }).end();
          }
        });
   

  } );

  // 发布职位 ---- 页面
  router.get( '/addpos', function(req, res){

    res.render('addposition.ejs', {});

  } );

  router.post( '/addpos', function(req, res){

      let client = req.body.client,
        position = req.body.position,
        pos_id = req.body.pos_id,
        pos = req.body.pos,
        subpos_id = req.body.subpos_id,
        subpos = req.body.subpos,
        salary_min = req.body.salary_min,
        salary_max = req.body.salary_max,
        salary_info = req.body.salary_info,
        province_id = req.body.province_id,
        province = req.body.province,
        city_id = req.body.city_id,
        city = req.body.city,
        report = req.body.report,
        detail_pos = req.body.detail_pos,
        age_min = req.body.age_min,
        age_max = req.body.age_max,
        gender = req.body.gender,
        graduation = req.body.graduation,
        other_info = req.body.other_info;

    // 添加
    console.log(`INSERT INTO position_table (client,position,pos_id,pos,subpos_id,subpos,salary_min, salary_max,salary_info, province_id,province,city_id,city,report,detail_pos,age_min, age_max,gender,graduation, other_info ) VALUE('${client}', '${position}', '${pos_id}', '${pos}', '${subpos_id}', '${subpos}', '${salary_min}', '${salary_max}', '${salary_info}', '${province_id}', '${province}', '${city_id}', '${city}', '${report}', '${detail_pos}', '${age_min}', '${age_max}', '${gender}', '${graduation}', '${other_info}')`);

    db.query(`INSERT INTO position_table (client,position,pos_id,pos,subpos_id,subpos,salary_min, salary_max,salary_info, province_id,province,city_id,city,report,detail_pos,age_min, age_max,gender,graduation, other_info ) VALUE('${client}', '${position}', '${pos_id}', '${pos}', '${subpos_id}', '${subpos}', '${salary_min}', '${salary_max}', '${salary_info}', '${province_id}', '${province}', '${city_id}', '${city}', '${report}', '${detail_pos}', '${age_min}', '${age_max}', '${gender}', '${graduation}', '${other_info}')`, (err, data)=>{
          if(err){
            console.error(err);
            res.send({
              code : 1,
              status:500,
              msg : '数据库异常'
          }).end();
          }else{
            res.send({
                code : 0,
                status : 200,
                msg : 'success'
            }).end();
          }
        });

  } );

  // 查看职位列表---页面
  router.get('/position_list', function(req, res){
    res.render('position_list.ejs', {});
  });

  // 查看职位列表---api
  router.get('/view/position/list', function(req, res){
    let sql=`select * from position_table`;

    db.query(sql, (err, data)=>{
      if(err){
        console.log(err)
      }else{
        
        res.send(data);
      }
    });
  } );

  return router;
};
