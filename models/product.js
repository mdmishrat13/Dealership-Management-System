import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    neme:{
        required:true,
        type:String,
    },
    quantity:{
        type:Number,
        default:0
    },
    numberInEachBox:{
        type:Number,
        default:0
    },
    pricePerBox:{
        type:Number,
        default:0
    }

})

export default mongoose.model('Product',productSchema)