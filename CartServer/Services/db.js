//import mongoose

const mongoose=require('mongoose')

//define the connection string

mongoose.connect('mongodb://localhost:27017/cart',()=>{
    console.log('connected to mogodb');
})

//create a model for the products

const Product=mongoose.model('Product',{
    //shema creation
    id:Number,
    title:String,
    price:Number,
    description:String,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number
    }

})

    // create a new collection in mongodb create a modle
    const Wishlist=mongoose.model('wishlist',{
        id:Number,
      title:String,
      price:Number,
      image:String,
      description:String
    })


module.exports={
    Product,
    Wishlist
}