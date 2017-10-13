var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var cookieSession=require('cookie-session');
var bodyParser = require('body-parser');
var cors = require('cors');//引入cors统一配置响应头

var app = express();

//统一配置响应头
app.use(cors({
  "origin": ['http://localhost:8080'],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  allowedHeaders:['Content-Type', 'Authorization'],
  credentials:true
}));

//引入路由
var index = require('./routes/index');
var login = require('./routes/login');
var reg = require('./routes/reg');
var user = require('./routes/user');
var ComPro = require('./routes/ComPro');
var product = require('./routes/product');
var news = require('./routes/news');
var contactUs = require('./routes/contactUs');
var newsList = require('./routes/newsList');
var suc_case = require('./routes/suc_case');



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cookieSession({
  name:'alex_id',
  keys:['aa','bb','cc'],
  maxAge:1000*60*60
}));
app.use(express.static(path.join(__dirname, 'public')));
//配置路由
app.use('/', index);
app.use('/login', login);
app.use('/reg', reg);
app.use('/user', user);
app.use('/ComPro',ComPro);
app.use('/product',product);
app.use('/news',news);
app.use('/contactUs',contactUs);
app.use('/newsList',newsList);
app.use('/suc_case',suc_case);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
