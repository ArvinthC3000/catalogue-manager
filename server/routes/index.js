const express = require('express')
const router = express.Router();

// Product inserting handler

// @type    POST
// @route   api/add
// @desc    Adding new product 
// @access  Public

router.get('/', (req, res)=>{
    res.send('Test router')
})

router.use('/add', require('./addProduct'))


module.exports = router; 