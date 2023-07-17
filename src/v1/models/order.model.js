const { model, Schema } = require("mongoose");

const orderSchema = new Schema(
  {
    cartId: Number,
    orderId: Number,
    userId: Number,
    shipping: Object,
    //! shipping cho ai
    payment: Object,
    //! payment: tính toán bằng cái gì
    products: Array,
    //! lấy lịch sử sản phẩm ra để thông báo cho họ
  },
  {
    collection: "orders",
    timestamps: true,
  }
);

module.exports = {
  _order: model("orders", orderSchema),
};
