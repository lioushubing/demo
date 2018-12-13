//引入
const fs=require('fs')
fs.writeFile('./data.txt','第十三懂法塞弗条命令',(err)=>{
    if(err){
        console.log('写入失败' + err);
        return
    }

    console.log('写入成功');

})