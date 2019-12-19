const express = require('express')
const router = express.Router();

// Product inserting handler

// @type    POST
// @route   api/add
// @desc    Adding new product 
// @access  Public

router.use('/add', require('./addProduct'))

// Getting list handler

// @type    GET
// @route   api/view
// @desc    Viewing existing product 
// @access  Public

router.use('/view', require('./viewProduct'))


module.exports = router; 