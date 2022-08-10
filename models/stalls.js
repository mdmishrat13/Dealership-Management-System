import mongoose from "mongoose";

const stallsSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        maxlength:[50,'Name cannot be more than 50 character']
    },
    location:{
        type:String,
        required:true,
        maxlength:[50,'location cannot more than 50 character']
    },
    shopkeeper:{
        type:String,
        default:"unknown"
    },
    contact:{
        type:Number,
    },
   
})
export default mongoose.model('Stalls',stallsSchema)