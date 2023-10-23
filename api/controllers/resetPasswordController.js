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
        const newToken = new Token({
            userId: user._id,
            token: hashedPassword,
            createdAt: Date.now(),
        })
        await newToken.save();
        const clientURL = process.env.CLIENT_URL;
        const resetLink = `${clientURL}/passwordReset?token=${resetToken}&id=${user._id}`;
        const emailData = {
            name: user.name,
            resetLink: resetLink
        }
        sendEmail(email, "Password Reset Request", "password-reset.ejs", emailData)
        res.status(200).json({ "message": "Password reset request success", "token": newToken })
    } catch (error) {
        res.status(500).json({ "message": error.message })
    }

}

const resetPassword = async (req, res) => {
    try {
        const { token, id, password } = req.body;
        const resetPasswordToken = await Token.findOne({ userId: id });
        if (!resetPasswordToken) {
            res.status(400).json({ "message": "Invalid or expired password reset token dbtok" })
        }
        const isValid = await bcrypt.compare(token, resetPasswordToken.token);
        if (!isValid) {
            res.status(400).json({ "message": "Invalid or expired password reset token comtok" })
        }
        const salt = await bcrypt.genSalt(Number(process.env.BCRYPT_SALT));
        const hashedPassword = await bcrypt.hash(password, salt);
        await User.findOneAndUpdate({ _id: id }, { password: hashedPassword });
        const user = await User.findOne({ _id: id });
        const email = user.email;
        const emailData = {
            name: user.name
        }
        sendEmail(email, "Password Reset Success", "password-reset-success.ejs", emailData);
        await resetPasswordToken.deleteOne();
        res.status(200).json({ "message": "Password reset success" })
    } catch (error) {
        res.status(500).json({ "message": error.message })
    }
}

export { requestPasswordReset, resetPassword }