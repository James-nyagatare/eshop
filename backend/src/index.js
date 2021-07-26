import '@babel/polyfill'
import express from 'express'
import connectDB from './config/db'
import products from '../src/data/products'
import colors from 'colors'
import { config } from 'dotenv'

config()

connectDB()

const app = express();

app.get('/', (req,res)=>{
    res.send('API is running....');
})

app.get('/api/products', (req,res)=>{
    res.json(products);
})

app.get('/api/products/:id', (req,res)=>{
    const product = products.find(p=> p._id === req.params.id)
    res.json(product);
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on Port ${PORT}`.yellow.underline.bold))