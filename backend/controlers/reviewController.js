import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";
import Review from "../models/reviewModel.js";
import User from "../models/userModel.js";
import Product from "../models/productModel.js";

const addReview = async (req, res) => {
  try {
    const { product, comment, user, stars } = req.body;
    const revProduct = await Product.findById(product);

    if (!revProduct.reviews.find((item) => item.user.toString() == user)) {
      const revUser = await User.findById(user);

      const review = new Review({
        user,
        comment,
        product,
        stars: +stars,
        name: revUser.name,
      });
      await review.save();
      revProduct.reviews.push(review);

      await revProduct.save();
      res.json(review);
    } else {
      throw new Error("вы уже добавили отзыв к этому товару!");
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
    // res.status(404).json({ message: "Ошибка при добавлении отзыва" });
  }
};

const getUsersReviews = async (req, res) => {
  try {
  } catch (error) {}
};
export { addReview, getUsersReviews };
