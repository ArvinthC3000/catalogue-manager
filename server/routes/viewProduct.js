const express = require('express')
const router = express.Router();

// User model
const Product = require('../model/Product')

// Getting list handler

// @type    GET
// @route   api/view
// @desc    Viewing existing product 
// @access  Public

router.get('/', (req, res)=>{
    Product.find({}).select({'__v':0})
    .then(product => {
        const item = JSON.parse(JSON.stringify(product))
        console.log(item)
        res.json({data:item})
    })
})


module.exports = router; 