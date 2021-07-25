import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

export default async function protect(req, res, next) {
  const authToken = req.headers.auth;
  let token;
  if (authToken && authToken.startsWith("Bearer")) {
    try {
      token = authToken.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id);
    } catch (error) {
      res.status(500).json({ message: "Вы не авторизованы!" });
    }
  }
  next();
}

export const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else res.status(401).json({ message: "Ты не админ!" });
};
