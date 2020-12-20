const Koa=require('koa');
const Router = require('koa-router');
const session=require('koa-session');

const server=new Koa();

try{
  server.keys=JSON.parse(fs.readFileSync('.keys').toString());
}catch(e){
  console.log('keys文件读取失败，请先生成');
  return;
}

server.use(session(
  {
    key: 's',
    maxAge: 10*1000,
    renew: true
  },
  server
));
