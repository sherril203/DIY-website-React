// const crypto = require("crypto");
// const purchaseModel = require("../model/Purchase.model");
// const OrderModel = require("../model/Orders.model");
// const { ConfirmationMail } = require("../utils/mailService");

// const verifyPayment = async (req, res) => {
//   try {
//     const { razorpay_order_id, razorpay_payment_id, razorpay_signature, purchaseData } = req.body;

//     const sign = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(razorpay_order_id + "|" + razorpay_payment_id)
//       .digest("hex");

//     if (sign !== razorpay_signature) {
//       return res.status(400).send({ message: "Payment verification failed" });
//     }

//     // Save purchase
//     const storedPurchase = new purchaseModel(purchaseData);
//     await storedPurchase.save();

//     // Save order
//     const storedOrder = new OrderModel({
//       ...purchaseData,
//       razorpay_order_id,
//       razorpay_payment_id,
//     });
//     await storedOrder.save();

//     // Send email
//     await ConfirmationMail(
//       purchaseData.customer_email,
//       "Purchase Confirmation",
//       purchaseData
//     );

//     res.status(200).send({
//       message: "Payment verified, order saved, email sent",
//       purchase: storedPurchase,
//       order: storedOrder,
//     });
//   } catch (err) {
//     console.error("Verify payment error:", err);
//     res.status(500).send({ message: "Error verifying payment" });
//   }
// };

// module.exports = { verifyPayment };
