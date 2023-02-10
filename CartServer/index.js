// import express

const express =require('express')

// import cors

const cors = require('cors')

//import dataservice

const dataServices= require('./Services/DataServices')


const app =express();

//use json parser for server responses


app.use(express.json())
//set a port number

app.use(cors({
    origin:'http://localhost:4200'
}))
//setup a port number

app.listen(3000,()=>{
    console.log('listening on port 3000');
})

// API call get all products

app.get('/all-products',(req,res)=>{
    dataServices.getProducts().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

// api call to add to wishlist

app.post('/add-to-wishlist',(req,res)=>{
    dataServices.addtoWishlist(req.body.id,req.body.title,req.body.price,req.body.image,req.body.description).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

// API call get wishlist

app.get('/getwishlist',(req,res)=>{
    dataServices.getwishlist().then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})

// delete wishlist produt

app.delete('/deletewish/:id',(req,res)=>{
    console.log(req.params.id);
    dataServices.deletewish(req.params.id).then(
        result=>{
            res.status(result.statusCode).json(result)
        }
    )
})
