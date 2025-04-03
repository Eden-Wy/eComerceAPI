import { Order } from "../schemas/index.js";
import { Product } from "../schemas/index.js";
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

export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    const productArr = [];
    const x = orders.order_products.map(async (e) => {
      const y = await Product.findByPk(e);
      productArr.push(y);
    });
    console.log(productArr);
    res.status(200).json(orders);
  } catch (error) {
    next(new CustomError("Error fetching orders", 500));
  }
};

// const getOrderWithDetails = async (orderId) => {
//   try {
//     const order = await Order.findOne({
//       where: { id: orderId },
//       attributes: ['id', 'total'],
//       include: [
//         {
//           model: User,
//           attributes: ['name', 'email'],
//         },
//         {
//           model: Product,
//           attributes: ['id'],
//           through: { attributes: ['quantity'] },
//         },
//       ],
//     });

//     if (!order) return { error: 'Order not found' };

//     return {
//       id: order.id,
//       user: {
//         name: order.User.name,
//         email: order.User.email,
//       },
//       products: order.Products.map((product) => ({
//         productId: product.id,
//         quantity: product.OrderProduct.quantity,
//       })),
//       total: order.total,
//     };
//   } catch (error) {
//     console.error('Error fetching order:', error);
//     return { error: 'Internal Server Error' };
//   }
// };

// // Example usage
// getOrderWithDetails(1).then(console.log);
