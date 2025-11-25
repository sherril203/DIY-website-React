const crypto = require("crypto");
const purchaseModel = require("../model/Purchase.model");
const OrderModel = require("../model/Orders.model");
const { ConfirmationMail } = require("../utils/mailService");

const verifyPayment = async (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, purchaseData } = req.body;

    const sign = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (sign !== razorpay_signature) {
      return res.status(400).send({ message: "Payment verification failed" });
    }

    const [savedPurchase, savedOrder] = await Promise.all([
    purchaseModel.create(purchaseData),
    OrderModel.create({
      ...purchaseData,
      razorpay_order_id,
      razorpay_payment_id,
    }),
  ]);
  //  // Send email
    // await ConfirmationMail(
    //   purchaseData.customer_email,
    //   "Purchase Confirmation",
    //   purchaseData
    // );
    res.status(200).send({
      message: "Payment verified, order saved, email sent",
      purchase: savedPurchase,
      order: savedOrder,
    });
   
  } catch (err) {
    console.error("Verify payment error:", err);
    res.status(500).send({ message: "Error verifying payment" });
  }
};

module.exports = { verifyPayment };
