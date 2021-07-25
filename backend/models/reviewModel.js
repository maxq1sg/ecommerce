import mongoose from "mongoose";

export const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    comment: {
      type: String,
      required: true,
    },
    stars: {
      type: Number,
      required: true,
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
// export const reviewForFrontendSchema = mongoose.Schema({
//   name: { type: String, required: true },
//   comment: { type: String, required: true },
//   stars: { type: Number, required: true },
// });

const Review = mongoose.model("Review", reviewSchema);

export default Review;
