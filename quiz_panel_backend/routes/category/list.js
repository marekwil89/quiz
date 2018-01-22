const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Category = mongoose.model('category');

router.get('/list', (req, res) => {
  Category.find({}, function(err, categories){
    if(err){
        console.log(err)
    }
    return res.json(categories)
  })
})

module.exports = router;