import Discount from "../models/Discount.js";

const add_discount = async (req, res) => {
    try {
        const { name, description, amount, startDate, endDate, products } = req.body
        const discount = new Discount({ name, description, amount, startDate, endDate, products });
        await discount.save();
        res.status(201).json(discount);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const get_all_discounts = async (req, res) => {
    try {
        const discounts = await Discount.find();
        if (!discounts) {
            return res.status(404).json({ error: "No discounts found" })
        }
        res.status(200).json(discounts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const get_discount_by_id = async (req, res) => {
    try {
        const { id } = req.params;
        const discount = await Discount.findById(id);
        if (!discount) {
            return res.status(404).json({ error: 'Discount not found' });
        }
        res.status(200).json(discount);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const update_discount_by_id = async (req, res) => {
    try {
        const { name, description, amount, startDate, endDate, products } = req.body
        const discount = await Discount.findByIdAndUpdate(req.params.id, { name, description, amount, startDate, endDate, products }, { new: true });
        if (!discount) {
            return res.status(404).json({ error: 'Discount not found' });
        }
        res.status(200).json(discount);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const delete_discount_by_id = async (req, res) => {
    try {
        const { id } = req.params;
        const discount = await Discount.findByIdAndDelete(id);
        if (!discount) {
            return res.status(404).json({ error: 'Discount not found' });
        }
        res.status(200).json({ message: "Discount deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export {
    add_discount, get_all_discounts, get_discount_by_id, update_discount_by_id,
    delete_discount_by_id
}