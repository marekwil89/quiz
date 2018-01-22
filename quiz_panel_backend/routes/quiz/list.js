const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Quiz = mongoose.model('quiz');

router.get('/list', (req, res) => {
  Quiz.find({}, function(err, Quizzes){
    if(err){
        console.log(err)
    }
    return res.json(Quizzes)
  })
})

module.exports = router;