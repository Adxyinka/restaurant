const express = require('express');
const cors = require('cors');
const app = express();

const whiteList =[
    'http://localhost:4000', 'https://localhost:4443'
];
var corsOptionsDelegate = (req, cb) => {
    var corsOptions;

    if(whiteList.indexOf(req.header('Origin')) !== -1) {
        corsOptions = { origin: true };
    } 
    else {
        corsOptions = { origin: false };
    }
    cb(null, corsOptions);
};

//module.exports = cors();
exports.cors = cors();
exports.corsWithOptions = cors(corsOptionsDelegate);