import mongoose from "mongoose";
const jwt = require("jsonwebtoken");

interface IAuth extends mongoose.Document {
  email: string;
  password: string;
  username?: string;
  phone?: number;
  matchPassword(enteredPassword: string): Promise<boolean>;
  generateAccessToken(): string;
}

const authSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  phone: {
    type: Number,
  },
});

export const Auth = mongoose.model<IAuth>("Auth", authSchema);
