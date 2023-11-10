import express from "express";
import { getCartItems, addToCart, deleteCartItem, updateCartItem } from "../controllers/cartController.js";

const router = express.Router();

router.get("/cart", getCartItems);
router.post("/add-to-cart/:productId", addToCart);
router.post("/update-cart/:productId", updateCartItem);
router.post("/remove-from-cart/:productId", deleteCartItem);

export default router;


