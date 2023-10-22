import crypto from 'crypto';
import bcrypt from 'bcrypt';
import User from '../models/User.js';
import Token from '../models/Token.js';
import { sendEmail } from '../services/sendEmail.js';

const requestPasswordReset = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error("User does not exist");
        }

        const token = await Token.findOne({ userId: user._id });
        if (token) {
            await token.deleteOne();
        }
        const resetToken = crypto.randomBytes(32).toString("hex");
        const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT));
        const hashedPassword = await bcrypt.hash(resetToken, salt);
        await new Token({
            userId: user._id,
            token: hashedPassword,
            createdAt: Date.now(),
        }).save();

        // const resetLink = `${clientURL}/passwordReset?token=${resetToken}&id=${user._id}`;
        sendEmail(email)
        res.status(200).json({ "message": "Password reset request success" })
    } catch (error) {
        res.status(500).json({ "message": error.message })
    }

}

const resetPassword = async (req, res) => {

}

export { requestPasswordReset, resetPassword }