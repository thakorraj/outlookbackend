// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE.txt in the project root for license information.
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors());

require('dotenv').config();

var index = require('./routes/index');
var authorize = require('./routes/authorize');
// var mail = require('./routes/mail');
// var calendar = require('./routes/calendar');
// var contacts = require('./routes/contacts');

// var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/authorize', authorize);
// app.use('/mail', mail);
// app.use('/calendar', calendar);
// app.use('/contacts', contacts);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(4000, function () {
    console.log('Example app listening on port 4000!');
});