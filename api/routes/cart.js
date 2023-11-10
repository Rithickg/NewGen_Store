import express from "express";
import { getCartItems, addToCart, deleteCartItem, updateCartItem } from "../controllers/cartController.js";

const router = express.Router();

router.get("/get-cart", getCartItems);
router.post("/add-cart/:productId", addToCart);
router.post("/update-cart/:productId", updateCartItem);
router.post("/remove-cart/:productId", deleteCartItem);

export default router;


