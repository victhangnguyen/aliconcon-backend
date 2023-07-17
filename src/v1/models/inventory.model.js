const { model, Schema } = require("mongoose");

const inventorySchema = new Schema(
  {
    productId: Number,
    //! sản phẩm
    quantity: Number,
    //! số lượng sản phảm trong kho
    code: String,
    //! Mã sản phẩm
    reservations: Array,
    //! đặt chỗ
    create_at: { type: Date, default: Date.now },
  },
  {
    collection: "inventories",
    timestamps: true,
  }
);

module.exports = {
  _inventory: model("inventories", inventorySchema),
};
