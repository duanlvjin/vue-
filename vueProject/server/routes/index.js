var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');//引入mongodb模块
var mongoCt = mongodb.MongoClient;//创建客户端

/* GET home page. */
router.get('/', function(req, res, next) {
  mongoCt.connect('mongodb://127.0.0.1:27017/shanye_Project',(err,db)=>{
    var aaa = db.collection('case');
    aaa.find({}).toArray((err,result)=>{
      if(err) throw new Error();
      res.send(result);
    })
  })
});

module.exports = router;
