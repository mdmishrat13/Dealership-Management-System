import  express from "express";
import stalls from "./routes/stalls.js";
import products from './routes/products.js'
import transactions from './routes/transaction.js'
import connectDb from "./db/connect.js";
import 'dotenv/config'
import notFound from "./middleware/notFound.js";


const app = express();
const port = 5000;


app.use(express.json())


app.use('/stalls',stalls)
app.use('/products',products)
app.use('/transactions',transactions)


app.use(notFound)




const run = async()=>{
    try {
        await connectDb(process.env.URI)
        app.listen(port,()=>{
            console.log(`connected to db and listening on port ${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

run()
