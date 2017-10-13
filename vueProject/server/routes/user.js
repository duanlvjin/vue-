var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');//引入mongodb模块

var mongoCt = mongodb.MongoClient();//创建客户端

//响应get请求
router.get('/',(req,res,next)=>{
  // console.log(req.session['user_id']);
  if(!req.session['user_id']){
    // res.redirect('http://localhost:8080/login');
    res.send('no');
  }else{
    mongoCt.connect('mongodb://127.0.0.1:27017/shanye_Project',(err,db)=>{
      var user = db.collection('user');
      var name = req.session.user_id;
      // console.log(name);
      user.find({"username":name}).toArray((err,result)=>{
        if(err){
          throw new Error();
        }else{
          // console.log(result);
          res.send(result[0].username);
        }
      })
    })
  }
});
module.exports = router;