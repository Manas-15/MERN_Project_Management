import { Auth } from "../models/auth-model";
import User from "../models/user-model";
import OTP from "../models/otp-model";
import otpGenerator from "otp-generator";
import transporter from "../config/mailer";
import { Document } from "mongoose";
const jwt = require("jsonwebtoken");


// Define the User document interface with the matchPassword method
interface IUser extends Document {
  username?: string;
  email: string;
  phone?: string;
  password: string;
  iAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
  matchPassword(enteredPassword: string): Promise<boolean>;
  generateAccessToken(): string;
  generateRefreshToken(): string;
}

const signup = async (req:any,res:any)=>{
 try {
    const { username, email, phone, password } = req.body;
    const userExist = (await User.findOne({ email })) as IUser | null;

    if (userExist) {
      return res.status(400).json({ msg: "User already exist" });
    }

    const data = await User.create({
      username,
      email,
      phone,
      password,
    });


    res.status(200).json({
      msg: "User signed up successfully",
      user: {
        id: data._id,
        username: data.username,
        email: data.email,
        phone: data.phone,
      },
    });
  } catch (err:any) {
    res.status(400).json({ error: err.message });
  }
}

const signin = async (req:any, res:any) => {
  try {
    const { email, password } = req.body;
    const userExist = (await User.findOne({ email })) as IUser | null;

    if (userExist) {
      const isMatchPassword = await userExist.matchPassword(password);

      if (!isMatchPassword) {
        return res.status(402).json({ msg: "Invalid credentials" });
      }

      // 2. Generate 6-digit OTP
      const generatedOtp = otpGenerator.generate(6, {
        digits: true,
        upperCaseAlphabets: false,
        specialChars: false,
        lowerCaseAlphabets: false,
      });

      // 3. Save OTP to DB (Resetting the 5-min TTL timer)
      await OTP.findOneAndUpdate(
        { email },
        { otp: generatedOtp, createdAt: new Date() },
        { upsert: true, new: true },
      );

      // 4. Send Email via Nodemailer
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Your Login OTP",
        text: `Your OTP for login is ${generatedOtp}. It will expire in 5 minutes.`,
      });

      // 5. Success response (Don't send the token yet, wait for OTP verification)
      return res.status(200).json({
        success: true,
        message: "OTP sent to your email. Please verify to complete login.",
      });
    }
    return res.status(402).json({ msg: "User does not exist" });
  } catch (err:any) {
    res.status(500).json({ error: err.message });
  }
};

const refreshtoken = async (req: any, res: any) => {
  const { refresh_token, email } = req.body;

  try {
    // Check if refresh token is provided
    if (!refresh_token || !email) {
      return res
        .status(400)
        .json({ msg: "Refresh token and email are required" });
    }

    // Verify the refresh token
    const decoded = jwt.verify(refresh_token, process.env.JWT_SECRET);

    // Check if the token's email matches the provided email
    if (decoded.email !== email) {
      return res.status(401).json({ msg: "Invalid token" });
    }

    // Find the user in User collection
    const user = (await User.findOne({ email })) as IUser | null;

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    // Generate new access token and refresh token
    const newAccessToken = user.generateAccessToken();

    res.status(200).json({
      success: true,
      access_token: newAccessToken,
      message: "Tokens refreshed successfully",
    });
  } catch (err: any) {
    // Handle token expiration or invalid token
    if (err.name === "TokenExpiredError") {
      return res
        .status(401)
        .json({ msg: "Refresh token has expired. Please login again." });
    }
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ msg: "Invalid refresh token" });
    }
    res.status(500).json({ error: err.message });
  }
};

module.exports = {signup,signin,refreshtoken}