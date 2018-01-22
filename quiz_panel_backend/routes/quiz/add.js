const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Quiz = mongoose.model('quiz');

router.post('/add', (req, res) => {

    console.log(req.body)
    var newQuiz = new Quiz({
        name: req.body.name,
        category: req.body.category,
        questions: req.body.questions
    });

    newQuiz.save((err, products) => {
        if(err){
            console.log(err)
            return;
        }
        res.json({ status: true });
    })
})

module.exports = router;