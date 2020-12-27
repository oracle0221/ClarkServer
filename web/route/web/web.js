'use strict';

const express=require('express');
const common=require('../../libs/common');
const mysql=require('mysql');
const bodyParser = require('body-parser')

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

      href = req.files[0].path.replace(/\\+/g, '\\\\'); // 上传的文件名

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

        // 客户公司不能重复，查重
        db.query(`SELECT COUNT(*) AS count FROM position_table WHERE client='${client}' AND position='${position}'`, (err, data)=>{

          if(err){
            console.error(err);
            res.send({
              code : 1,
              status:500,
              msg : '数据库异常'
          }).end();
          }else{
            console.log(data[0].count)
            if(data[0].count > 0){
              res.send({
                code : 1,
                status:500,
                msg : '公司名和职位名重复'
            }).end();
              return;
            }

            // 添加公司
            db.query(`INSERT INTO client_table (client, detail) VALUE('${client}', '')`, (err, data)=>{

              if(err){
                res.send({
                  code : 1,
                  status:500,
                  msg : '写入公司名出错,请稍后重试'
              }).end();
              }else{
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
              }
            });

          }
        });

  } );

  // 添加公司详情
  router.post('/client/detail', bodyParser.json(), (req, res)=>{

    db.query(`update client_table set detail='${req.body.detail}' where client='${req.body.client}'`, (err, data)=>{

      if(err){
        console.log(err);
        res.send({
            code : 1,
            status : 500,
            msg : '更新出错'
        }).end();
      }else{
        res.send({
            code : 0,
            status : 200,
            msg : 'success',
            data:''
        }).end();
      }

    });

  });

  // 得到公司详情
  router.get('/client/detail', (req, res)=>{
    // console.log(req.query)
    const client = req.query.client;
    if(!client){
      res.send({
          code : 1,
          status : 500,
          msg : '公式名不能为空'
      }).end();
      return;
    }

    db.query(`select * from client_table where client='${client}'`, (err, data)=>{
      if(err){
        console.log(err)
        res.send({
            code : 1,
            status : 500,
            msg : '获取公司信息有误'
        }).end();
        return;
      }else{
        res.send({
            code : 0,
            status : 200,
            msg : 'success',
            data:data[0].detail
        }).end();
      }
    });



  });

  // 得到候选人列表
  router.get('/candidate_list', (req, res)=>{
    db.query(`select * from person_table`, (err, data)=>{
      if(err){
        console.log(err)
        res.send({
            code : 1,
            status : 500,
            msg : '读取候选人有误'
        }).end();
      }else{
        // console.log(data)
        res.send({
            code : 0,
            status : 200,
            msg : 'success',
            data,
        }).end();
      }
    });
  });

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

  // 查看候选人列表---页面
  router.get('/person_list', function(req, res){
    res.render('person_list.ejs', {});
  });

  // 候选人列表
  router.get('/view/person/list', (req, res)=>{
    let sql=`select * from person_table`;

    db.query(sql, (err, data)=>{
      if(err){
        console.log(err)
      }else{

        res.send(data);
      }
    });
  });

  return router;
};
