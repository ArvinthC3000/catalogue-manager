const express = require('express')
const router = express.Router();

// User model
const Product = require('../model/Product')

// Product inserting handler

// @type    POST
// @route   api/add
// @desc    Adding new product 
// @access  Public

router.post('/', (req, res)=>{
    const {productName, brand, category, parentCategory='NA', specification='NA' } = req.body
    
    const newProduct = new Product({
        productName,
        brand,
        category,
        parentCategory,
        specification: [specification]
    })
    newProduct.save()
    .then(data =>console.log('Successfully included'))
    .catch(err => console.log(err))
})


module.exports = router; 