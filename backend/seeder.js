import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import connectDB from "./DBconfig.js";
import Order from "./models/orderModel.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(path.join(__dirname, "..", ".env"));
dotenv.config({ path: path.join(__dirname, "..", ".env") });
// console.log(dotenv.config());
connectDB();
const importData = async () => {
  try {
    // await User.deleteMany();
    // await Product.deleteMany()
    // await Order.deleteMany();

    const createdUsers = await User.find({});
    const admin = createdUsers[0];
    const sampleProducts = products.map((product) => {
      return { ...product, user: admin };
    });
    await Product.insertMany(sampleProducts);
    console.log("Data imported!");
    process.exit();
  } catch (error) {
    console.log(error.message.red);
    process.exit();
  }
};
const deleteData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    console.log("Data destroyed!");
    process.exit();
  } catch (error) {
    console.log(error.message.red);
    process.exit();
  }
};
if (process.argv[2] == "-d") {
  deleteData();
} else {
  importData();
}
