import mongoose from "mongoose";
import { reviewSchema } from "./reviewModel.js";

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      default: "",
    },
    image: {
      type: String,
      required: true,
      default: "",
    },
    category: {
      type: String,
      required: true,
      default: "",
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    reviews: [reviewSchema],
    // rating: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    description: {
      type: String,
      required: true,
      default: "",
    },
    // numReviews: {
    //   type: Number,
    //   required: true,
    //   default: 0,
    // },
    countInStock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
export default Product;
