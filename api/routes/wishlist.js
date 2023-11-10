import express from 'express';
import { getWishlistItems, addToWishlist, deleteWishlistItem } from '../controllers/wishlistController.js';

const router = express.Router();

router.get('/get-wishlist', getWishlistItems);
router.post('/add-wishlist/:productId', addToWishlist);
router.post('/remove-wishlist/:productId', deleteWishlistItem);

export default router;