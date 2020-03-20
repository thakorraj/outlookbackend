// Copyright (c) Microsoft. All rights reserved. Licensed under the MIT license. See LICENSE.txt in the project root for license information.
var express = require('express');
var router = express.Router();

var authHelper = require('../helpers/auth');

/* GET home page. */
router.get('/', async function(req, res, next) {
 // let parms = { title: 'Home', active: { home: true } };



    console.log(authHelper.getAuthUrl());
    res.send("yess")
  }

 // res.render('index', parms);
 
);

module.exports = router;
