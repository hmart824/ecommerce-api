const Product = require('../models/product');

/* The `module.exports.createProduct` function is responsible for creating a new product in the
database. It is an asynchronous function that takes in a request object (`req`) and a response
object (`res`) as parameters. */
module.exports.createProduct = async(req , res)=>{
    try{
        const product = await Product.create(req.body);
        return res.status(200).json({
            product,
            message: "Product added successfully."
        });
    }catch(err){
        return res.status(500).json({error: err.message});
    }
};

/* The `module.exports.productsList` function is responsible for retrieving a list of products from the
database. */
module.exports.productsList = async(req , res)=>{
    try{
        const products = await Product.find({});
        return res.status(200).json({
            products,
            message: "list of Products."
        });
    }catch(err){
        return res.status(500).json({error: err.message});
    };
};

/* The `module.exports.deleteProduct` function is responsible for deleting a product from the database.
It takes in a request object (`req`) and a response object (`res`) as parameters. */
module.exports.deleteProduct = async(req , res)=>{
    try{
        const id = req.params.id;
        const product = await Product.findByIdAndDelete(id);
        return res.status(200).json({
            product,
            message: "Product deleted successfully."
        });
    }catch(err){
        return res.status(500).json({error: err.message});
    }
};


/* The `module.exports.updateProduct` function is responsible for updating a product in the database. */
module.exports.updateProduct = async(req , res)=>{
    try{
        const id = req.query.id;
        const updates = {};
        const keys = Object.keys(req.query);
        keys.forEach((key)=> {
            if(key !== 'id'){
                updates[key] = req.query[key];
            };
        });
        const product = await Product.findByIdAndUpdate(id , updates , {new: true});
        return res.status(200).json({
            product,
            message: "Product updated sucessfully."
        })
    }catch(err){
        return res.status(500).json({error: err.message});
    };
};

