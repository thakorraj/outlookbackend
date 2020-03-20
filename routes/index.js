// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE.txt in the project root for license information.
var express = require('express');
var router = express.Router();
var authHelper = require('../helpers/auth');
var index1 = require('../routes/abc');
var Product = require("../ProductM");
//
var app = express();
var data;
var token;
/* GET home page. */
router.get('/', async function (req, res, next) {
  // let parms = { title: 'Home', active: { home: true } };

  const accessToken = await authHelper.getAccessToken(req.cookies, res);
  const userName = req.cookies.graph_user_name;

  // function getToken(){
  //   data = accessToken;
  //   console.log(data);
  //   // res.send(data);
  // }

  // function getURL(){
  //   data = require('../data');
  //   // res.send(data);
  // }

  if (accessToken && userName) {
    // parms.user = userName;
    // parms.debug = `User: ${userName}\nAccess Token: ${accessToken}`;
    data = accessToken;
    console.log(data);

    // res.redirect("http://localhost:3000/createProduct"+data);
    // res.redirect(data);
   res.send(data);
  } else {
    data = require('../data');
   // console.log(data);
    // parms.signInUrl = authHelper.getAuthUrl();
    // parms.debug = parms.signInUrl;
    // let a=app.use('/', index1);

    // console.log(data+"gsvsjds");
    //  const newCart = new Product({
    //   // id: req.body.id,
    //   data1: data 
    // });
    // console.log(data);

    // console.log(data);
    // getURL();
    // getToken();
    // res.send(data);
    res.send(data);
    // res.redirect("http://localhost:3000/createProduct"+data);
  }
  res.send(data);

  //console.log(data);
  // res.render('index', data);

});

// router.post('/id', async (req, res) => {
//   try {
//     //     const task = tasklist.find(t => t.id == req.params.id);
//     console.log("Harshil");
//     console.log(req.body);
//     // res.send(data);
//     // console.log("gfiwyekbwekj")
//   } catch (err) {
//     console.log(err);
//     res.status(500).send('Server Error');
//   }
// });

module.exports = router;
