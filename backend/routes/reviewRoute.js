import express from "express";
import { addReview } from "../controlers/reviewController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(protect, addReview);
// router.route("/:id").get(protect, getUsersReviews);

export default router;
