import User from "./userSchema.js";
import Order from "./orderSchema.js";
import Product from "./productsSchema.js";
import Category from "./categorySchema.js";

User.hasMany(Order, { foreignKey: "user_id" }); // A user can have multiple orders
Order.belongsTo(User, { foreignKey: "user_id" });

Product.belongsTo(Category, { foreignKey: "category_id" }); // A product belongs to a category
Category.hasMany(Product, { foreignKey: "category_id" }); // A category can have multiple products
// Order.belongsToMany(Product, { through: OrderProduct, foreignKey: 'order_id' });
// Product.belongsToMany(Order, { through: OrderProduct, foreignKey: 'product_id' });

export { User, Order, Product, Category };

// import { Sequelize, DataTypes } from 'sequelize';
// import { config } from 'dotenv';
// config();

// // Initialize Sequelize
// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: 'postgres',
//   logging: false,
// });

// // Define User model
// const User = sequelize.define(
//   'User',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     email: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       unique: true,
//       validate: {
//         isEmail: true,
//       },
//     },
//     password: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     tableName: 'users',
//     timestamps: true,
//     underscored: true,
//   }
// );

// // Define Order model
// const Order = sequelize.define(
//   'Order',
//   {
//     user_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'users',
//         key: 'id',
//       },
//       onUpdate: 'CASCADE',
//       onDelete: 'CASCADE',
//     },
//     total: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//       defaultValue: 0,
//     },
//   },
//   {
//     tableName: 'orders',
//     timestamps: true,
//     underscored: true,
//   }
// );

// // Define OrderProduct model (Join Table)
// const OrderProduct = sequelize.define(
//   'OrderProduct',
//   {
//     order_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'orders',
//         key: 'id',
//       },
//       onUpdate: 'CASCADE',
//       onDelete: 'CASCADE',
//     },
//     product_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: 'products',
//         key: 'id',
//       },
//       onUpdate: 'CASCADE',
//       onDelete: 'CASCADE',
//     },
//     quantity: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: 1,
//     },
//   },
//   {
//     tableName: 'order_products',
//     timestamps: false,
//     underscored: true,
//   }
// );

// // Define Product model
// const Product = sequelize.define(
//   'Product',
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       autoIncrement: true,
//       primaryKey: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     price: {
//       type: DataTypes.FLOAT,
//       allowNull: false,
//     },
//   },
//   {
//     tableName: 'products',
//     timestamps: true,
//     underscored: true,
//   }
// );

// // Define Relationships
// User.hasMany(Order, { foreignKey: 'user_id' }); // A user can have multiple orders
// Order.belongsTo(User, { foreignKey: 'user_id' });

// Order.belongsToMany(Product, { through: OrderProduct, foreignKey: 'order_id' });
// Product.belongsToMany(Order, { through: OrderProduct, foreignKey: 'product_id' });

// // Sync models
// sequelize.sync();

// export { User, Order, OrderProduct, Product };
