import Order from "../schemas/orderSchema.js";
import { CustomError } from "../utils/errorHandler.js";

export const createOrder = async (req, res, next) => {
  try {
    const { user_id, order_products, total } = req.body;
    const newOrder = await Order.create({
      user_id,
      order_products,
      total,
    });
    res.status(201).json(newOrder);
  } catch (error) {
    next(new CustomError("Error creating order", 500));
  }
};
