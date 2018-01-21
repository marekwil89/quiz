const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('product');
const validAuth = require('../validation/auth.js');

router.get('/list-promo', validAuth.isAuth, function(req, res){
    var now = new Date();
    var startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    Product.find({'promoEndDate': {$gte: startOfToday}}, function(err, products){
        if(err){
            console.log(err)
        }
        return res.json({state: 'success', products: products})
    })
})

module.exports = router;