var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoCt = mongodb.MongoClient;


router.post('/',(req,res,next)=>{
  mongoCt.connect('mongodb://127.0.0.1:27017/shanye_Project',(err,db)=>{
    var user = db.collection('user');
    var name = req.query.username;
    // var pass = req.query.password;
    user.find({"username":name}).toArray((err,result)=>{
      if(err){
        throw new Error();
      }else{
        if(result.length>0){
          // console.log(result[0].password);
          // console.log(req.body.password);
          if(result[0].password == req.query.password){
            // console.log(result[0]._id);
            req.session['user_id']=result[0].username;
            res.send('ok');
          }else{
            res.send('用户名或者密码错误');
          }
        }else{
          res.send('用户名不存在');
        }
      }
    })
  })
});
module.exports = router;
