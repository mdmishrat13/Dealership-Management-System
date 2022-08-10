import express from "express";
import { createProduct, getProducts,getProduct,updateProduct,deleteProduct } from "../controllers/products.js";

const router = express.Router();

router.route('/').get(getProducts).post(createProduct)
router.route('/:id').get(getProduct).delete(deleteProduct).patch(updateProduct)

export default router