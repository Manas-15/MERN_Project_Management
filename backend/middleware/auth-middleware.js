const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async (req, res, next) => {
  try {
    // Get token from Authorization header
    const token = req.header("Authorization");

    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    // Remove 'Bearer ' prefix if present
    const jwtToken = token.replace("Bearer ", "").trim();

    // Verify token
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

    // Get user from token (excluding password)
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ msg: "User not found" });
    }

    // Attach user to request object
    req.user = user;
    req.token = jwtToken;
    req.userId = decoded.userId;

    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({ msg: "Token has expired" });
    }
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ msg: "Invalid token" });
    }
    res.status(401).json({ msg: "Token verification failed", error: err.message });
  }
};

module.exports = authMiddleware;
