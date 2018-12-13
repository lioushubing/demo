// 根据不同的请求 做出不同的响应
// 判断req.url 属性的值，返回对应的内容

const  fs=require('fs')
const http=require('http')
 const server =http.createServer()
 server.on('request',(req,res)=>{
     console.log(req.url);
     res.setHeader('content-type', 'text/html;charset=utf-8')
     if(req.url=='/'||req.url.startsWith('/index.html')){
         res.end('首页')

     }else if(req.url.startsWith('/list')){
         res.end('列表页')
     }else if(req.url.startsWith('/login')){
         res.end('登录页')
     }



      res.end()

 })

server.listen(9999, console.log('http://localhost:9999','服务器已响应'))