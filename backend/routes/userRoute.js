import express from "express";
import {
  authUser,
  deleteUsers,
  getUsers,
  registerUser,
  userProfileReviews,
  userProfileOrders,
} from "../controlers/userController.js";
import protect, { admin } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/login").post(authUser);
router.route("/").get(protect, admin, getUsers);
router.route("/:id").delete(protect, admin, deleteUsers);
router.route("/register").post(registerUser);
router.route("/profile/:id/reviews").get(protect, userProfileReviews);
router.route("/profile/:id/orders").get(protect, userProfileOrders);
//   .put(protect, updateUserProfile);
export default router;
