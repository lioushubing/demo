const fs=require('fs')
const path=require('path')
  fs.readFile(path.join(__dirname+'/data.txt'),'utf-8',(err,data)=>{
      if (err){
          console.log(err);
      }
      if (data){
          console.log(data);
          console.log(path.join(__dirname + '/data.txt'));
      }

  })