const express = require('express')
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('Test router')
})

router.use('/test', require('./test'))


module.exports = router; 