// const  fs=require('fs');//require require require require require require requqire
// fs.readFile('./data.tx.t',function (err,data) {
//     if(err){
//         console.log('获取失败' + err);
//         return
//     }
//     console.log(data.toString());
// })
 const  fs=require('fs') //引入模块
 fs.readFile('./data.txt','utf-8',function (err,data) {
     if(err){
         console.log('获取失败' + err);
         return
     }
     console.log(data);
 })
//添加utf-8编码避免出现二进制