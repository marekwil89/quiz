const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Category = mongoose.model('category');

router.post('/add', (req, res) => {
    
    var newCategory = new Category({
        name: req.body.name
    });

    newCategory.save((err, products) => {
        if(err){
            console.log(err)
            return;
        }
        res.json({ status: true });
    })
})

module.exports = router;