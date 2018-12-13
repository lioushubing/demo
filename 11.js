const http=require('http')
const server=http.createServer()
server.on('request',function (req,res) {
    console.log('已经监听到请求体1');
    res.write('中文')
    res.end()

})
server.listen(9999,()=>{
    console.log('服务器已启动');
})