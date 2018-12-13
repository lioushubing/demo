const http=require('http')
const server=http.createServer()
server.on('request',(req,res)=>{
    // 1-状态行：状态码 状态文本
    // res.statusCode = 404;
    // res.statusMessage = 'aaa';
    // res.statusMessage = '没找到';
    // 2-响应头：
    // res.setHeader('aaa', 'bbb');
    // res.setHeader('content-type', 'text/html;charset=utf-8')
    // res.statusCode=200
    // res.statusMessage='iii'
    // res.setHeader('aa','bb')
    res.setHeader('content-type', 'text/html;charset=utf-8');

    res.write('苍茫的天涯是我的爱');
    res.end()

})
server.listen(9999,()=>{
    console.log('http://localhost:9999','服务器已响应');
})