var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var sqlinjection = require('sql-injection');

const cors = require("cors");
const db = require("./models");


var app = express();

app.use(sqlinjection);  // add sql-injection middleware here

app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// db.sequelize.sync({force:false});
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const productsRouter = require("./routes/products.routes");
const categoryRouter = require("./routes/category.routes")

app.use('/api/product', productsRouter);
app.use('/api/category', categoryRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

