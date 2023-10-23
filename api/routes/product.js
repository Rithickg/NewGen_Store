import express from 'express'
import { add_product, get_all_products, get_product_by_id, update_product_by_id, update_product_by_seller_id, delete_product_by_id, add_stock_by_id } from '../controllers/productController.js';

const router = express.Router()

router.post('/add-product', add_product)
router.get('/get-all-products', get_all_products)
router.get('/get-product-by-id/:id', get_product_by_id)
router.put('/update-product-by-id/:id', update_product_by_id)
router.put('/update-product-by-seller-id/seller/:sellerId/product/:productId', update_product_by_seller_id)
router.delete('/delete-product-by-id/:id', delete_product_by_id)
router.put('/add-stock-by-id/seller/:sellerId/product/:productId', add_stock_by_id)

export default router;