// 读取date.txt中数据
// fs模块在操作文件是，如果写相对路径， 相对路径是相对于 node命令执行的位置，而不是相对js文件的位置 ；
// 在操作文件时候，不推荐使用相对路径，如果位置变了，路径就不一样 ，推荐使用绝对路径来解决

// const fs = require('fs');

// 读取文件内容
// fs.readFile('./data.txt','utf-8',(err,data)=>{
//     if (err){
//         console.log(err);
//     }
//     if(data){
//         console.log(data);
//     }
// })
// E:\前端视频\31期就业班\node\02\04-代码
// 获取当前文件所在的绝对路径



// console.log('----------------:' ,__dirname);

// console.log(__dirname + '/date.txt');
// fs.readFile(__dirname + '/date.txt', 'utf-8', (err, data) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);
// // });
//
// // console.log(__dirname);
// console.log(__dirname + '/data/test/aa.txt');
//
//
// fs.readFile(__dirname + '/data/test/aa.txt', 'utf-8', (err, data) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log(data);
// });
//使用绝对定位
const  fs=require('fs')
fs.readFile(__dirname+'\\data.txt','utf-8',(err,data)=>{
    if (err){
        console.log(err);
    }
    if (data){
        console.log(data);
    }
})