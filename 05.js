//读取文件内容（异步）
// const  fs=require('fs')
// console.log('1');
// fs.readFile('./data.txt','utf-8',function (err,data) {
//     if(err){
//         console.log(err);
//         return
//     }
//     if(data){
//         console.log(data);
//     }
// })
// console.log('2');
// 读取文件内容（同步）
// //引入模块
// console.log('1');
//
// const  fs=require('fs')
// console.log(fs.readFileSync('./date.txt','utf-8'));
//
//
// console.log('2');
// const  fs=require('fs')
//  fs.appendFile('./data.txt','haha',(err)=>{
//      if (err){
//          console.log(err);
//      }
//      console.log('成功');
//  })

//
// const  fs=require('fs')
// fs.rename('./data.txt','haha.txt',(err)=>{
//     if(err){
//         console.log(err);
//     }
// })
// const  fs=require('fs')
// fs.rename('./date.txt','thth.txt',(err)=>{
//     if (err){
//         console.log(err);
//     }
// })
//删除
// const fs=require('fs')
// fs.unlink('./haha.txt',(err)=>{
//     console.log(err);
// })
// const fs=require('fs')
// fs.unlink('./thth.txt',(err)=>{
//     console.log(err);
// // })
// const fs=require('fs')
// fs.mkdir('./jij',(err)=>{
//     console.log(err);
// })
// const fs=require('fs')
// fs.mkdir('./jj',(err)=>{
//     if(err){
//         console.log(err);
//     }
// })
// const fs=require('fs')
// fs.rmdir('./jij',(err)=>{
//     if(err){
//         console.log(err);
//     }
// })
// const  fs=require('fs')
// fs.rmdir('./jj',(err)=>{
//     if (err){
//         console.log(err);
//     }
// })
const fs=require('fs')
fs.readFile('../练习',(err)=>{
    if (err){
        console.log(err);
    }
})