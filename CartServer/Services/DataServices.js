//import db

const { default: mongoose } = require('mongoose')
const db = require('./db')

//get all porducts details from db

const getProducts = () => {
    return db.Product.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    products: result

                }
            } else {
                return {
                    status: false,
                    statusCode: 402,
                    message: 'Product not found'
                }
            }
        }
    )
}

//add to wishlist details store to db
const addtoWishlist = (id, title, price, image, description) => {

    return db.Wishlist.findOne({ id }).then(
        (result) => {
            if (result) {
                return {
                    status: false,
                    statusCode: 402,
                    message: 'Product already added'
                }
            } else {
                const newproduct = new db.Wishlist({
                    id, title, price, image, description
                })
                newproduct.save()
                return {
                    status: true,
                    statusCode: 200,
                    message: 'Product added successfully'

                }

            }
        }
    )
}

//get wishlist products details from db

const getwishlist = () => {
    return db.Wishlist.find().then(
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    products: result

                }
            } else {
                return {
                    status: false,
                    statusCode: 402,
                    message: 'Wishlist is empty'
                }
            }
        }
    )
}

const deletewish=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if (result){
                return{
                    status:true,
                    statusCode:200,
                    message:'Product removed successfully'

                }
            } 
            else{
                return{
                    status:false,
                    statusCode:402,
                    message:'Product not found'
                }
            }

        }
    )
}


module.exports = {
    getProducts,
    addtoWishlist,
    getwishlist,
    deletewish
}