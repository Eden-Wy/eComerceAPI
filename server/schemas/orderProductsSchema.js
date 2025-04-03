// import { Sequelize, DataTypes } from "sequelize";
// import { config } from "dotenv";

// config();

// const sequelize = new Sequelize(process.env.DATABASE_URL, {
//   dialect: "postgres",
//   logging: false,
// });

// const OrderProduct = sequelize.define(
//   "OrderProduct",
//   {
//     order_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "orders",
//         key: "id",
//       },
//       onUpdate: "CASCADE",
//       onDelete: "CASCADE",
//     },
//     product_id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       references: {
//         model: "products",
//         key: "id",
//       },
//       onUpdate: "CASCADE",
//       onDelete: "CASCADE",
//     },
//     quantity: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       defaultValue: 1,
//     },
//   },
//   {
//     tableName: "order_products",
//     timestamps: false,
//     underscored: true,
//   }
// );

// sequelize
//   .sync({ force: true })
//   .then(() => console.log("✅ Database synced (force: true)"))
//   .catch((err) => console.error("❌ Sync failed:", err));

// export default OrderProduct;
