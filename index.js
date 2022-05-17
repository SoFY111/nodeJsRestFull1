const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv/config')

const bodyParser = require('body-parser')

const productRouter = require('./routes/products')

app.use(bodyParser.json())

mongoose.connect(`mongodb+srv://hkn:${process.env.PASSWORD}@${process.env.DATABASE_NAME}.cjqxs.mongodb.net/?retryWrites=true&w=majority`, (e) => {
    if(e) console.log(e)
    else console.log('connected to database')
})

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.use('/products', productRouter);

app.listen(5000, () => {
    console.log("server is running on 5000");
});
