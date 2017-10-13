var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
var mongoCt = mongodb.MongoClient;

router.get('/',(req,res,next)=>{
  mongoCt.connect('mongodb://127.0.0.1:27017/shanye_Project',(err,db)=>{
    var suc_case = db.collection('suc_case');
    suc_case.find({}).toArray((err,result)=>{
      if(err) throw new Error();
      res.send(result);
    })
  })
});
module.exports = router;