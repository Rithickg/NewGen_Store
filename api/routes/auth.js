import express from 'express';
import { signup_user, signin_user } from '../controllers/authController.js';
import { requestPasswordReset, resetPassword } from '../controllers/resetPasswordController.js';

const router = express.Router();

router.post('/sign-up', signup_user);
router.post('/sign-in', signin_user);
router.post('/request-password-reset', requestPasswordReset)
router.post('/reset-password', resetPassword);


export default router;