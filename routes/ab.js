const image2base64 = require('image-to-base64');
const express = require('express');
const router = express.Router();
var path = require("path"),
    fs = require("fs");
// image2base64("logo192.png") // you can also to use url
//     .then(
//         (response) => {
//             console.log(response); //cGF0aC90by9maWxlLmpwZw==
//         }
//     )
//     .catch(
//         (error) => {
//             console.log(error); //Exepection error....
//         }
//     )

router.post('/', async (req, res) => {
    //console.log(__dirname.concat('/') + req.body.a);
    console.log(path.join(__dirname,'../images/'+req.body.img));
    const img=path.join(__dirname,'../images/'+req.body.img);
    // const name = __dirname.concat('/') + req.body.a;
    image2base64(img) // you can also to use url
        .then(
            (response) => {
                console.log(response); //cGF0aC90by9maWxlLmpwZw==
                res.send(response);
            }
        )
        .catch(
            (error) => {
                console.log(error); //Exepection error....
            }
        )
});
module.exports = router;