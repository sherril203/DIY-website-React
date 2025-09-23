const purchaseModel = require('../model/Purchase.model');
const OrderModel = require('../model/Orders.model');
const { ConfirmationMail } = require('../utils/mailService');

const PostPurchase = async (req, res) => {
  try {
    const purchasedata = req.body;

    // 1️⃣ Save to purchase collection
    const storedPurchase = new purchaseModel(purchasedata);
    await storedPurchase.save();

    // 2️⃣ Optional: Save to Orders collection (uncomment if needed)
    /*
    const orderData = {
      product_name: purchasedata.product_name,
      quantity: purchasedata.quantity,
      product_price: purchasedata.product_price,
      customer_name: purchasedata.customer_name,
      customer_email: purchasedata.customer_email,
      mobile_no: purchasedata.mobile_no,
      address: purchasedata.address,
      payment_mode: purchasedata.payment_mode,
      razorpay_payment_id: purchasedata.razorpay_payment_id || "",
      status: "Success"
    };

    const storedOrder = new OrderModel(orderData);
    await storedOrder.save();
    */

    // 3️⃣ Optional: Send confirmation email (uncomment if mail service ready)
    /*
    const { customer_name, customer_email, ...restData } = purchasedata;
    const mailResult = await ConfirmationMail(
      customer_email,
      "Purchase Confirmation",
      { ...restData },
      customer_name
    );

    if (!mailResult || mailResult.error) {
      console.error("Email failed:", mailResult?.error);
      return res.status(500).send({
        message: "Purchase saved, but email failed",
        purchase: storedPurchase,
      });
    }
    */

    // ✅ Send proper success response
    return res.status(201).send({
      message: "Purchase saved successfully",
      purchase: storedPurchase,
      // order: storedOrder, // if you save order
    });

  } catch (err) {
    console.error("Error in PostPurchase:", err);
    return res.status(500).send({ message: "Error in product purchase" });
  }
};

const getPurchase = async (req, res) => {
  try {
    const showpurchase = await purchaseModel.find().sort({ _id: -1 });
    return res.status(200).send({ showdata: showpurchase });
  } catch (err) {
    console.error("Error in get data:", err);
    return res.status(500).send({ message: "Error in get data" });
  }
};

module.exports = { PostPurchase, getPurchase };
