const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const path = require('path');
// const logger = require('morgan');
const app = express()





app.use(express.static(path.join(__dirname, 'src')));

// console.log(path.join(__dirname, '../quiz_panel'))
// app.use(logger('dev'));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());



app.listen(4400, () => console.log('Example app listening on port 4400!'))