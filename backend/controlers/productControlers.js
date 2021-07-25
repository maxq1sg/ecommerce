import Product from "../models/productModel.js";
import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { getRating, getReviewsCount } from "../middlewares/rating.js";

const getProducts = asyncHandler(async (req, res) => {
  try {
    const pageSize = 8;
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};
    const pageNumber = req.query.pageNumber || 1;
    const products = await Product.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (pageNumber - 1))
      .lean();

    const productsLength =
      keyword && Object.keys(keyword).length === 0
        ? await Product.countDocuments()
        : await Product.find({ ...keyword }).countDocuments();
    res.json({
      products: products.map((product) => ({
        ...product,
        numReviews: getReviewsCount(product),
        rating: getRating(product),
      })),
      pageNumber: +pageNumber,
      totalPages: Math.ceil(productsLength / pageSize),
    });
  } catch (error) {
    console.log(error);
  }
});

const getProductById = asyncHandler(async (req, res) => {
  const productId = req.params.id;
  if (productId.match(/^[0-9a-fA-F]{24}$/)) {
    const product = await Product.findById(req.params.id).lean();
    product.numReviews = getReviewsCount(product);
    product.rating = getRating(product);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "not found(((" });
    }
  } else {
    res.status(404).json({ message: "invalid id" });
  }
});

const deleteProductById = async (req, res) => {
  try {
    const id = req.params.id;
    await Product.findByIdAndDelete(id);
    res.json({ message: id });
  } catch (error) {
    res.json({ message: error.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const product = new Product({
      name: "a",
      image: "a",
      category: "a",
      price: 0,
      countInStock: 0,
      description: "a",
      user: req.user._id,
    });
    const createdProduct = await product.save();
    res.json(createdProduct);
  } catch (error) {
    res.json({ mes: error.message });
  }
};
const updateProduct = async (req, res) => {
  const { name, price, description, image, category, countInStock } = req.body;
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, {
      name,
      price,
      description,
      image,
      category,
      countInStock,
    });
    const createdProduct = await product.save();
    res.json(createdProduct);
  } catch (error) {
    res.json({ mes: error.message });
  }
};

export {
  getProductById,
  getProducts,
  deleteProductById,
  createProduct,
  updateProduct,
};
