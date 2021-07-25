import Order from "../models/orderModel.js";
import asyncHandler from "express-async-handler";

const addOrderItems = asyncHandler(async (req, res) => {
  const { orderItems, address, paymentMethod, totalPrice } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(400);
    return;
  }
  const order = new Order({
    orderItems,
    address,
    paymentMethod,
    totalPrice,
    user: req.user._id,
  });
  await order.save();
  res.json(order);
});

export { addOrderItems };
