const OrderModel = require('../model/Orders.model')
const { ConfirmationMail } = require('../utils/mailService')


//post
const postOrder = async (req, res) => {
  try {
    console.log("Incoming order data:", req.body);

    const {
      product_name,
      quantity,
      product_price,
      customer_name,
      customer_email,
      mobile_no,
      address,
      payment_mode,
      razorpay_payment_id,
      userId,
    } = req.body;

    // Check if payment id exists and is not empty
    if (!razorpay_payment_id || razorpay_payment_id.trim() === "") {
      return res.status(400).send({ message: "Payment ID is missing" });
    }

    // Create order document
    const savedOrder = new OrderModel({
      product_name,
      quantity,
      product_price,
      customer_name,
      customer_email,
      mobile_no,
      address,
      payment_mode,
      razorpay_payment_id,
      status: "Success",
      userId,
    });

    // Save order to DB
    await savedOrder.save();

    // Send confirmation email safely
    let mailResult;
    try {
      mailResult = await ConfirmationMail(
        customer_email,
        "Purchase Confirmation",
        {
          product_name,
          quantity,
          product_price,
          payment_mode,
          mobile_no,
          address,
          razorpay_payment_id,
        },
        customer_name
      );
    } catch (emailErr) {
      console.error("Email sending failed:", emailErr);
      return res.status(500).send({
        message: "Order saved, but email failed to send",
        order: savedOrder,
      });
    }

    if (!mailResult || mailResult.error) {
      console.error("Email sending returned error:", mailResult?.error);
      return res.status(500).send({
        message: "Order saved, but email failed to send",
        order: savedOrder,
      });
    }

    // Success response
    return res.status(201).send({
      message: "Order saved and email sent",
      order: savedOrder,
    });

  } catch (err) {
    console.error("Error in postOrder:", err);
    return res.status(500).send({ message: "Server error" });
  }
};

const getOrder = async (req, res) => {
  try {
    const { userId } = req.query;


    if (!userId) {
      return res.status(400).send({ message: "User ID is required" });
    }
console.log(userId)
    // const showOrder = await OrderModel.find({ userId }).sort({ _id: -1 });
      const showOrder = await OrderModel.find({ userId : userId});
      // .sort({ _id: -1 })
      // .populate("userId", "username email");
        console.log(showOrder)
    return res.status(200).send({ showdata: showOrder });
  } catch (err) {
    console.error("Error in get data:", err);
    return res.status(500).send("error in get data");
  }
};


const CancelOrder = async (req, res) => {
  try {
    const id = req.params.orderId;
    // Update order status instead of deleting
    const cancelled = await OrderModel.findByIdAndUpdate(
      id,
      { status: 'Cancelled' },
      { new: true } // return updated document
    );
    if (!cancelled) return res.status(404).send({ message: 'Order not found' });
    res.status(200).send({ message: 'Order cancelled', order: cancelled });
  } catch (err) {
    console.error('CancelOrder error:', err);
    res.status(500).send({ error: 'Server error' });
  }
};


module.exports = { postOrder, getOrder, CancelOrder }