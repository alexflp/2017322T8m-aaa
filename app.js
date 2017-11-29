var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


var index = require('./routes/index');
var users = require('./routes/users');
var english = require('./routes/english');
var about = require('./routes/about');
var applym = require('./routes/applym');
var solution=require('./routes/solution');
var cnapi=require('./routes/cnapi');
var enapi=require('./routes/enapi');
var ensol=require('./routes/ensol');




var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/english',english.index);
app.post('/add_english',english.add_english);

app.get('/about',about.index);
app.post('/add_about',about.add_about);

app.get('/applym',applym.index);
app.post('/add_applym',applym.add_applym);


app.get('/solution',solution.index);
app.post('/add_solution',solution.add_solution);


app.get('/cnapi',cnapi.index);
app.post('/add_cnapi',cnapi.add_cnapi);

app.get('/enapi',enapi.index);
app.post('/add_enapi',enapi.add_enapi);

app.get('/ensol',ensol.index);
app.post('/add_ensol',ensol.add_ensol);

// var mysql = require('mysql');

// var pool= mysql.createPool({
//   host     : 'aatkfcycn3qn58.cgiqg4kguirw.us-west-2.rds.amazonaws.com',
//    user     : 'flash',
//    password : 'flash123',
//    port     : '3306',
//    database : 'mydb'
//
//   // host     : 'localhost',
//   // user     : 'root',
//   // password : 'flash123'
// //  port     : process.env.RDS_PORT
// });

// con.connect(function(err) {
//   if (err) {
//     console.error('Database connection failed: ' + err.stack);
//     return;
//   }
//
//   console.log('Connected to database.YES oooo I AM HERE');
// });




// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!WO WOWO WO");
//   connection.query("CREATE DATABASE mydb", function (err, result) {
//     if (err) throw err;
//     console.log("Database created mydb");
//   });
// });
//
// app.post('/apply',function(req,res){
//     console.log(req.body);
//   //  con.connect(function(err) {
//     // if (err) throw err;
//     // console.log("Connected!");
//
//   //   con.query(sql, function (err, result) {
//   //     if (err) throw err;
//   //     console.log("1 record inserted");
//   //   });
//   // });
//   //   result.release();
//   //   res.render('index');
//
//     pool.getConnection(function(error,conn){
//
//         var sql = "insert into flasht(conatct_name,conatct_title,email,phone,store,IOB,BRN,storea,web,note) values('"+req.body.conatct_name+"','"+req.body.conatct_title+"','"+req.body.email+"','"+req.body.phone+"','"+req.body.store+"','"+req.body.IOB+"','"+req.body.BRN+"','"+req.body.storea+"','"+req.body.web+"','"+req.body.note+"')";
//
//       conn.query(sql,function(error,results){
//           if(error)
//               {
//                   throw error;
//               }
//           else
//               {
//                 res.render('after_apply');
//               }
//
//       });
//       conn.release();
//   });
//
//
//
//
// });

app.post('/applym',function(req,res){
	    var mailOpts, smtpTrans;

        //Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
        smtpTrans = nodemailer.createTransport({
            service: 'gmail',
             host:'smtp.gmail.com',
             port:465,
            secure:true,
            auth: {
                user: "alphacustomer11@gmail.com",
                pass: "flash123"
            }
        });
        var mailoutput ="Time: "+Date()+"<br>"+ 
        				"联系人姓名/contact Name:     " + req.body.conatct_name + "<br>"+
                        "联系人职位/conatct title:     " + req.body.conatct_title + "<br>"+
                        "邮箱地址/Email:   " + req.body.email + "<br>"+
                        "电话号码/Phone:    " + req.body.phone + "<br>"+
                       	"商铺名称/Store name:    " + req.body.store +"<br>"+
                        "经营种类/Industry of business:     " + req.body.IOB +"<br>"+ 
                        "商业注册编号/Business registered number:     " + req.body.BRN + "<br>"+
                        "商铺地址/Store address:    " + req.body.storea + "<br>"+
                        "商铺网站/Web address:    " + req.body.web + "<br>"+
                        "备注/Note:    " + req.body.note;
           
        //Mail options
        mailOpts = {
            to: "albert@alphapay.ca,it@alphapay.ca",
            subject: "alphapay merchant apply/商户申请",
            html: mailoutput
        };

        smtpTrans.sendMail(mailOpts, function (error, res) {
            if (error) {
                // res.send("Email could not send due to error" +error);
                return console.log(error);
            }
        });
        console.log('Message sent successfully!');
        // alert("Thnak you for applying. We will contact you soon!")
       	// // res.render('index.ejs');
        res.render('applyam.ejs'); 
    });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

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
