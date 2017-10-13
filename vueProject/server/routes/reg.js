var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoCt = mongodb.MongoClient;

router.post('/',(req,res,next)=>{
  mongoCt.connect('mongodb://127.0.0.1:27017/shanye_Project',(err,db)=>{
    var reg = db.collection('user');
    // console.log(req.query);
    var user = req.query.username;
    var pass = req.query.password;
    reg.find({"username":user}).toArray((err,result)=>{
      if(err){
        throw new Error();
      }else{
        // console.log(result);
        if(result.length > 0){
          res.send('用户名已注册');
        }else{

          reg.insert({"username":user,"password":pass});
          res.send('ok');
        }
      }
    })
  })
});
module.exports = router;