// const express = require('express');

// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
// const logger = require('morgan');


// mongoose.connect('mongodb://localhost/pmi_2', {
//     useMongoClient: true
// });

//insert models
// require('./models/user');


// const employersCreateCsv = require('./routes/employers/createCsv.js');

//app init
// const app = express();

// app.use(logger('dev'));
// app.use(session({
//     secret: 'keyboard cat',
//     name: 'itsname',
//     proxy: true,
//     resave: true,
//     saveUninitialized: true
// }));
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(passport.initialize());
// app.use(passport.session());


// app.use('/auth', register);

// app.use('/employers-create-csv', employersCreateCsv);

// app.listen(8001, function () {
//     console.log('on port 8001');
// })


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

const quizList = require('./routes/quiz/list.js');
const quizAdd = require('./routes/quiz/add.js');
const quizDetail = require('./routes/quiz/detail.js');

// app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


///Pozwala wykonywać requesty
app.use(function (req, res, next) {
    
    // Website you wish to allow to connect
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.use('/quiz', quizList);
app.use('/quiz', quizAdd);
app.use('/quiz', quizDetail);

app.listen(3000, () => console.log('Example app listening on port 3000!'))