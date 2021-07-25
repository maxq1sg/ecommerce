import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import Order from "../models/orderModel.js";
import mongoose from "mongoose";
import Review from "../models/reviewModel.js";

function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
}

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log("user login");
  const user = await User.findOne({ email });
  if (user && (await user.matchPasswords(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    // res.status(401);
    throw new Error("Неверные данные при входе в систему");
  }
});
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(401);
    throw new Error("Пользователь с такой электронной почтой уже существует!");
  }
  const user = await User.create({
    name,
    email,
    password,
  });
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,

      token: generateToken(user._id),
    });
  } else {
    res.status(404);
    throw new Error("user not found!!!");
  }
});

const userProfileReviews = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (req.user) {
    const user = await User.findById(req.user._id);
    // const orders = await Order.find({
    //   user: mongoose.Types.ObjectId(id),
    // });
    const reviews = await Review.find({
      user: mongoose.Types.ObjectId(id),
    });
    if (user && reviews) {
      res.json(reviews);
    }
  } else {
    res.status(401).json({ message: "not authorized!!!!" });
  }
});

const userProfileOrders = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (req.user) {
    const user = await User.findById(req.user._id);
    const orders = await Order.find({
      user: mongoose.Types.ObjectId(id),
    });
    if (user && orders) {
      res.json(orders);
    }
  } else {
    res.status(401).json({ message: "not authorized!!!!" });
  }
});

const updateUserProfile = asyncHandler(async (req, res) => {
  if (req.user) {
    const user = await User.findById(req.user._id);
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.password = req.body.password || user.password;
    const modifiedUser = await user.save();
    res.json(modifiedUser);
  } else {
    res.status(401);
    throw new Error("not authorized!!!!");
  }
});

const getUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};
const deleteUsers = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    await User.findByIdAndDelete(id);
    res.json({ message: id });
  } catch (error) {
    res.json({ message: error.message });
  }
};
export {
  authUser,
  userProfileReviews,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUsers,
  userProfileOrders,
};
