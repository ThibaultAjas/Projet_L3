const express = require('express');
const request = require('request');


const router = express.Router();
const cors = require('cors');


router.post('/infos', (req, res) => {
    const data = req.body;
    const url = 'http://api.geonames.org/countryCodeJSON?lat='+data.latlng.lat+'&lng='+data.latlng.lng+'&username=tajas';

    request(url, {json: true}, (err, res2, body) => {
        if (err) return console.log(err);
        console.log(body)
        return res.json({msg: 'got country name', data: body.countryName});
    });

})

module.exports = router;