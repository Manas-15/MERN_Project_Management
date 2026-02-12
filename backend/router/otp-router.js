const OTP = require('../models/otp-model');
const User = require("../models/user-model");
const otpGenerator = require('otp-generator');
const nodemailer = require('nodemailer');
const express = require("express");
const router = express.Router();


router.post('/verify-otp', async (req, res) => {
    const { email, otp } = req.body

    try {
        const existUser = await User.findOne({ email })
        const userOTP = await OTP.findOne({ email })

        if (!existUser) {
            return res.status(400).json({ error: "User not found" })
        }else if (!userOTP) {
            return res.status(400).json({ error: "OTP not found" })
        } else if (userOTP.otp != otp) {
            return res.status(400).json({ error: "Invalid OTP. Please try again." })
        }
        
        // Generate token and respond
        const accessToken = existUser.generateAccessToken();
        const refreshToken = existUser.generateRefreshToken();

        // OTP is valid, delete it from database
        await OTP.deleteOne({ email });
        
        return res.status(200).json({
            msg: "OTP verified successfully",
            access_token: accessToken,
            refresh_token: refreshToken,
            user: {
                id: existUser._id,
                username: existUser.username,
                email: existUser.email,
            },
        });

    } catch (err) {
        console.error("Error verifying OTP:", err);
        res.status(500).json({ error: "Failed to verify OTP" });
    }
})

router.post('/resend-otp', async (req, res) => {
    const { email } = req.body;

    try {
        // 1. Generate new 6-digit OTP
        const newOtp = otpGenerator.generate(6, {
            upperCaseAlphabets: false, specialChars: false, lowerCaseAlphabets: false
        });

        // 2. Update DB: This resets the 5-min timer because of the TTL index
        await OTP.findOneAndUpdate(
            { email },
            { otp: newOtp, createdAt: new Date() },
            { upsert: true, new: true }
        );

        // 3. Send Email
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS_KEY }
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Resend: Your OTP Code",
            text: `Your new OTP is ${newOtp}. It expires in 5 minutes.`
        });

        res.status(200).json({ message: "OTP resent successfully!" });
    } catch (err) {
        res.status(500).json({ error: "Failed to resend OTP" });
    }
});

module.exports = router;
