import User from "../models/User.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";


const signup_user = async (req, res) => {
    try {
        const { name, email, phone_number, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        } else {
            const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT));
            const hashedPassword = await bcrypt.hash(password, salt);
            const newUser = new User({ name, email, phone_number, password: hashedPassword });
            await newUser.save();
            const token = generateToken(newUser._id);
            res.status(200).json({ User: newUser, token });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const signin_user = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const token = generateToken(existingUser._id);
        res.status(200).json({ User: existingUser, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}



export { signup_user, signin_user }