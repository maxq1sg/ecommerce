import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import connectDB from "./DBconfig.js";
import colors from "colors";
import prodRouter from "./routes/productRoute.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import userRouter from "./routes/userRoute.js";
import orderRouter from "./routes/orderRoute.js";
import reviewRouter from "./routes/reviewRoute.js";
import uploadRouter from "./routes/uploadRoute.js";
import path from "path";
import morgan from "morgan";

const app = express();
dotenv.config();
connectDB();

app.use(express.json());
// app.use(morgan("combined"));

const __dirname = path.resolve();
// app.use(
//   "uploads",
//   express.static(path.join(__dirname, "frontend", "public", "uploads"))
// );

app.use("/api/products", prodRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/reviews", reviewRouter);
app.use("/api/upload", uploadRouter);

const PORT = process.env.PORT || 5000;
const MODE = process.env.NODE_ENV;

// if (MODE === "production") {
//   // app.use(express.static(path.join(__dirname, "/frontend/build")));
//   app.use(express.static(path.join(__dirname, "frontend", "build")));
//   app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
//   });
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running...");
//   });
// }
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT} in ${MODE} mode`.yellow);
});
