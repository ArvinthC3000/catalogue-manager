const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    productName: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    parentCategory: {
        type: String
    },
    specification: {
        type: Object,
        required: true
    }
})

const Product =  mongoose.model('products', ProductSchema)

module.exports = Product