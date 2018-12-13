const http=require('http')
const server=http.createServer()
server.on('request',(req,res)=>{
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
     res.end()

})
server.listen(9999,()=>{
    console.log('服务器已启动');
})