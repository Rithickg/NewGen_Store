import User from "../models/User";
import bcrypt from "bcrypt";


const create_user = async (req, res) => {
    try {
        const { name, email, phone_number, password } = req.body;
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new User({ name, email, phone_number, password: hashedPassword });
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const get_all_users = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const get_user_by_id = async (req, res) => {
    try {

    } catch (error) {

    }
}