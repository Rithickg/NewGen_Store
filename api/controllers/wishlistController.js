import Wishlist from '../models/Wishlist.js';
import Product from '../models/Product.js';


const addToWishlist = async (req, res) => {
    try {
        const { productId } = req.params;
        const { quantity } = req.body;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        const wishlist = await Wishlist.findOne({ user: req.user._id });
        if (wishlist) {
            const itemIndex = wishlist.wishlistItems.findIndex(p => p.product == productId);
            if (itemIndex > -1) {
                let productItem = wishlist.wishlistItems[itemIndex];
                productItem.quantity += quantity;
                wishlist.wishlistItems[itemIndex] = productItem;
            } else {
                wishlist.wishlistItems.push({ product: productId, quantity });
            }
            const updatedWishlist = await wishlist.save();
            res.status(200).json({ wishlist: updatedWishlist });
        } else {
            const newWishlist = new Wishlist({
                user: req.user._id,
                wishlistItems: [{ product: productId, quantity }],
            });
            const savedWishlist = await newWishlist.save();
            res.status(200).json({ wishlist: savedWishlist });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getWishlistItems = async (req, res) => {
    try {
        const wishlist = await Wishlist.findOne({ user: req.user._id }).populate('wishlistItems.product');
        if (wishlist) {
            res.status(200).json({ wishlist });
        } else {
            res.status(404).json({ error: 'Wishlist not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteWishlistItem = async (req, res) => {
    try {
        const { productId } = req.params;
        const wishlist = await Wishlist.findOne({ user: req.user._id });
        if (wishlist) {
            const itemIndex = wishlist.wishlistItems.findIndex(p => p.product == productId);
            if (itemIndex > -1) {
                wishlist.wishlistItems.splice(itemIndex, 1);
            }
            const updatedWishlist = await wishlist.save();
            res.status(200).json({ wishlist: updatedWishlist });
        } else {
            res.status(404).json({ error: 'Wishlist not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export { addToWishlist, getWishlistItems, deleteWishlistItem }