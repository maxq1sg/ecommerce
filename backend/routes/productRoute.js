import express from "express";
import {
  deleteProductById,
  getProductById,
  getProducts,
  createProduct,
  updateProduct,
} from "../controlers/productControlers.js";
import protect, { admin } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProduct);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProductById)
  .put(protect, admin, updateProduct);

export default router;
