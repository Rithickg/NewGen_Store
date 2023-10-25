import Product from "../models/Product.js";

const add_product = async (req, res) => {
    try {
        const { name, description, category, price, brand, imageUrls, ratings, stock, seller, reviews, attributes } = req.body;
        const product = new Product({ name, description, category, price, brand, imageUrls, ratings, stock, seller, reviews, attributes });
        await product.save();
        res.status(201).json(product);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

const get_all_products = async (req, res) => {
    try {
        const products = await Product.find();
        if (!products) {
            return res.status(404).json({ error: "Products not found" })
        }
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const get_product_by_id = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const update_product_by_id = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, category, price, brand, imageUrls, stock, attributes } = req.body;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        const updatedProduct = await Product.findByIdAndUpdate(id, { name, description, category, price, brand, imageUrls, stock, attributes }, { new: true });
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

const update_product_by_seller_id = async (req, res) => {
    try {
        const { sellerId, productId } = req.params;
        const { name, description, category, price, brand, imageUrls, stock, attributes } = req.body;
        const product = await Product.findOne({ _id: productId, seller: sellerId })
        if (!product) {
            return res.status(404).json({ error: "Product not found", err: err.message })
        }

        product.name = name;
        product.description = description;
        product.category = category;
        product.price = price;
        product.brand = brand;
        product.imageUrls = imageUrls;
        product.stock = stock;
        product.attributes = attributes;

        await product.save();
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message, "message": "Something went wrong" });
    }
}


const add_stock_by_id = async (req, res) => {
    const { sellerId, productId } = req.params;

    try {
        const { stock } = req.body;
        const product = await Product.findOne({ _id: productId, seller: sellerId });

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        if (req.body.stock !== undefined) {
            product.stock = stock;
        }

        await product.save();

        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


const delete_product_by_id = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }
        await Product.findByIdAndDelete(id);
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

export { add_product, get_all_products, get_product_by_id, update_product_by_id, update_product_by_seller_id, add_stock_by_id, delete_product_by_id }

