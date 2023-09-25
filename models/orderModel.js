const mongoose = require("mongoose");
const { NOT_PAID } = require("../utils/constants/paymentStatus");
const { ORDER, PRODUCT, ADDRESS, USER } = require("../utils/constants/schemaName");

const orderSchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: USER,
    },
    addressId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: ADDRESS,
    },
    orderItems: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: PRODUCT,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    billAmount: {
      type: Number,
      required: true,
    },
    orderStatus: {
      type: String,
      default: "pending",
    },
    paymentMethod: {
      type: String,
      required: true,
      default: 'COD'
    },
    paymentStatus: {
      type: String,
      default: NOT_PAID,
    },
    isPlaced: {
      type: Boolean,
      default: false
    },
    pgOrderStatus: String,
    pgCFOrderId: String,
    pgPaymentSessionId: String
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(ORDER, orderSchema);
