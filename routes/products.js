const express = require('express')
const router = express.Router()

const Product = require('../models/Product')

router.get('/', (req, res) => {
    Product.find()
        .then((products) => {
            res.json(products)
        })
        .catch((e) => {
            console.log(e)
        })
})

router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .then((products) => {
            res.json(products)
        })
        .catch((e) => {
            console.log(e)
        })
})

router.post('/', (req, res) => {
    console.log(req.body);

    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    })

    product.save();
    res.json(product);
})

router.put('/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
    })
        .then((product) => {
            res.json(product)
        })
        .catch((e) => {
            console.log(e)
        })
})

router.delete('/:id', (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then((product) => {
            res.json(product)
        })
        .catch((e) => {
            console.log(e)
        })
})


//fetch product --get
//get product //:id --get
//create product --post
//update product //:id --put
//delete product //:id --delete

module.exports = router

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 100,
        description: 'Products 1 description'
    }
]
