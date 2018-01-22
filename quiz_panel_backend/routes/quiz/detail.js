const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Quiz = mongoose.model('quiz');

router.get('/detail/:id', (req, res) => {

  Quiz.findOne({_id: req.params.id}, (err, quiz) => {
    console.log(quiz);
    if(err){
      throw err    
    }
    return res.json(quiz)
  })
})

module.exports = router;