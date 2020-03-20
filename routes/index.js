const express = require('express');
var router = express.Router();
var authHelper = require('../helpers/auth');
var data;

router.get('/', async function (req, res, next) {

    const accessToken = await authHelper.getAccessToken(req.cookies, res);
    const userName = req.cookies.graph_user_name;

    if (accessToken && userName) {
        // parms.user = userName;
        // parms.debug = `User: ${userName}\nAccess Token: ${accessToken}`;
        data = accessToken;
        console.log('Uper');
        console.log(data);

        res.send(data);
    } else {
        console.log('Niche');
        data = require('../data');
        // parms.signInUrl = authHelper.getAuthUrl();
        // parms.debug = parms.signInUrl;
        console.log("Ander " +data);
        res.send(data);
    }
    // res.send(data);
    // res.render('index', data);
});

// router.post('/hello', async function (req, res, next) {
//     // console.log(req.body);
//     rp('').then(body => {
//         console.log(body);
//     }).catch(err => {
//         console.log(err);
//     });
// });


module.exports = router;
