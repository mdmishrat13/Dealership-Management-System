import Product from "../models/product.js"

const createProduct = async (req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json(error)
    }

}

const getProducts = async(req,res) =>{
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json(error)
    }
}

const getProduct = async(req,res)=>{
   try {
    const {id:productId}= req.params;
   const product = await Product.findById({_id:productId})
   if(!product){
    return res.status(404).json({msg:'product not found with id:',productId})
   }
   res.status(200).json(product)
   } catch (error) {
    res.status(500).json(error)
   }
}

const updateProduct = async(req,res)=>{
    try {
        const {id:productId}= req.params;
    const product = await Product.findByIdAndUpdate({_id:productId},req.body,{new:true})
    if(!product){
        return res.status(404).json({msg:'product not found with id :',productId})
    }
    res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
}

const deleteProduct = async(req,res)=>{
    try {
        const {id:productId}= req.params;
        const deleteProduct = await Product.findByIdAndDelete({_id:productId})
        if(!deleteProduct){
            return res.status(404).json({msg:'product not found with id :',productId})
        }
        res.status(200).json({msg:'product deleted successfully!'})
    } catch (error) {
        res.status(500).json(error)
    }
}

export{
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}