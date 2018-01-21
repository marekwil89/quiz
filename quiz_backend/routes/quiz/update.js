const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Product = mongoose.model('product');
const validProduct = require('../validation/product.js');
const validAuth = require('../validation/auth.js');
const crypto = require('crypto');
const multer  = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
    destination: './public/assets/upload/',
    filename: function (req, file, cb) {
        crypto.pseudoRandomBytes(16, function (err, raw) {
        if (err) return cb(err)

        cb(null, raw.toString('hex') + path.extname(file.originalname))
        })
    }
})

const upload = multer({ storage: storage, limits: {fileSize: 300000} }).single('file');


router.post('/update/:id', validAuth.isAuth, validAuth.isAdmin, function(req, res, next) {
    upload(req, res, function(err){

        console.log(req.body);

        req.checkBody('standardPrice', 'Uzupełnij cene').notEmpty();
        req.checkBody('standardPrice', 'Cena musi być większa od 1 i musi być liczbą').lte(1);

        req.checkBody('name', 'Uzupełnij pole nazwa').notEmpty();
        req.checkBody('name', 'Nazwa może składać od 1 do 100 znaków').len(1, 100);

        req.checkBody('reduction', 'Uzupełnij cenę promocyjną').notEmpty();
        req.checkBody('reduction', 'Minimalna promocja nie może być mniejsza niż 1 i nie może być większa niż standardowa cena').gte(req.body.standardPrice-1);

        req.checkBody('promoEndDate', 'Uzupełnij datę końcową promocji').notEmpty();

        var errors = req.validationErrors();

        if(errors){
            return res.send(errors)
        }

        if(err){
            console.log(err);
            var errors = [];
            errors[0] = {
                param: 'file',
                msg: "Plik jest za wielki"
            };
            return res.json(errors)
        }

        Product.findById({_id: req.params.id}, function(err, product){
            // fs.unlink(path.join(__dirname, 'public') + '/assets/upload/' + product.file.filename, (err) => {
            //     if (err) {
            //         console.log(err);
            //     } throw err;
            //     console.log('successfully deleted ' + product.file.filename);
            // });
            product.name = req.body.name;
            product.standardPrice = req.body.standardPrice;
            product.actualPrice = parseInt(req.body.standardPrice)  -  parseInt(req.body.reduction);
            product.reduction = req.body.reduction;
            product.promoEndDate = req.body.promoEndDate;
            product.file = req.file;

            product.save(function(err, product){
                if(err){
                    console.log(err)
                    return;
                }
                res.send('success')
            })
        })
    })
});

module.exports = router;