import express  from "express";
import {createStall, getStall, getStalls, deleteStall, updateStall} from './../controllers/stalls.js'

const router = express.Router();



router.route('/').get(getStalls).post(createStall)
router.route('/:id').get(getStall).delete(deleteStall).patch(updateStall)

export default router