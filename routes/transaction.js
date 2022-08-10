import express from 'express'
import { createTransaction,getTransaction,getTransactions,updateTransaction,deleteTransaction } from '../controllers/transactions.js';

const router = express.Router();

router.route('/').get(getTransactions).post(createTransaction)
router.route('/:id').get(getTransaction).delete(deleteTransaction).patch(updateTransaction)

export default router