const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Quiz = mongoose.model('quiz');

// router.post('/add', validAuth.isAuth, validAuth.isAdmin, function(req, res){
//     upload(req, res, function(err){


//         var newProduct = new Product({
//             name: req.body.name,
//             standardPrice: req.body.standardPrice,
//             actualPrice:  parseInt(req.body.standardPrice)  -  parseInt(req.body.reduction),
//             reduction: req.body.reduction,
//             promoEndDate: req.body.promoEndDate,
//             file: req.file
//         });

//         newProduct.save(function(err, products){
//             if(err){
//                 console.log(err)
//                 return;
//             }
//             res.send('success');
//         })
//     })
// })

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