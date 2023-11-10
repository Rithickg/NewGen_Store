import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

const addToCart = async (req, res) => {
    try {
        const { productId } = req.params;
        const { quantity } = req.body;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        const cart = await Cart.findOne({ user: req.user._id });
        if (cart) {
            const itemIndex = cart.cartItems.findIndex(p => p.product == productId);
            if (itemIndex > -1) {
                let productItem = cart.cartItems[itemIndex];
                productItem.quantity += quantity;
                cart.cartItems[itemIndex] = productItem;
            } else {
                cart.cartItems.push({ product: productId, quantity });
            }
            const updatedCart = await cart.save();
            res.status(200).json({ cart: updatedCart });
        } else {
            const newCart = new Cart({
                user: req.user._id,
                cartItems: [{ product: productId, quantity }],
            });
            const savedCart = await newCart.save();
            res.status(200).json({ cart: savedCart });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getCartItems = async (req, res) => {
    try {
        const cart = await Cart.findOne({ user: req.user._id }).populate('cartItems.product');
        if (cart) {
            res.status(200).json({ cart });
        } else {
            res.status(404).json({ error: 'Cart not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteCartItem = async (req, res) => {
    try {
        const { productId } = req.params;
        const cart = await Cart.findOne({ user: req.user._id });
        if (cart) {
            const itemIndex = cart.cartItems.findIndex(p => p.product == productId);
            if (itemIndex > -1) {
                cart.cartItems.splice(itemIndex, 1);
            }
            const updatedCart = await cart.save();
            res.status(200).json({ cart: updatedCart });
        } else {
            res.status(404).json({ error: 'Cart not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateCartItem = async (req, res) => {
    try {
        const { productId } = req.params;
        const { quantity } = req.body;
        const cart = await Cart.findOne({ user: req.user._id });
        if (cart) {
            const itemIndex = cart.cartItems.findIndex(p => p.product == productId);
            if (itemIndex > -1) {
                let productItem = cart.cartItems[itemIndex];
                productItem.quantity = quantity;
                cart.cartItems[itemIndex] = productItem;
            }
            const updatedCart = await cart.save();
            res.status(200).json({ cart: updatedCart });
        } else {
            res.status(404).json({ error: 'Cart not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { addToCart, getCartItems, deleteCartItem, updateCartItem }