import express from 'express'
import { add_discount, get_all_discounts, get_discount_by_id, update_discount_by_id, delete_discount_by_id } from '../controllers/discountController.js';


const router = express.Router()

router.post('/add-discount', add_discount)
router.get('/get-all-discounts', get_all_discounts)
router.get('/get-discount-by-id/:id', get_discount_by_id)
router.put('/update-discount-by-id/:id', update_discount_by_id)
router.delete('/delete-discount-by-id/:id', delete_discount_by_id)


export default router;