const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const logger = require('morgan');
const app = express()


mongoose.connect('mongodb://localhost/quiz_data', {
    useMongoClient: true
});

//insert models
require('./models/quiz');
require('./models/category');

const quizList = require('./routes/quiz/list.js');
const quizAdd = require('./routes/quiz/add.js');
const quizDetail = require('./routes/quiz/detail.js');

const categoryAdd = require('./routes/category/add.js');
const categoryList = require('./routes/category/list.js');

app.use(express.static(path.join(__dirname, 'src')));


app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


///Pozwala wykonywać requesty
app.use(function (req, res, next) {
    
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});


app.use('/quiz', quizList);
app.use('/quiz', quizAdd);
app.use('/quiz', quizDetail);

app.use('/category', categoryAdd);
app.use('/category', categoryList);

app.listen(3000, () => console.log('Example app listening on port 3000!'))