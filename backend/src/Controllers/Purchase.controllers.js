const purchaseModel=require('../model/Purchase.model')
const OrderModel =require('../model/Orders.model')
const { purchaseMail } = require('../utils/mailService')
const PostPurchase = async (req, res) => {
  try {
    const purchasedata = req.body;

    // Save to purchase collection
    const storedPurchase = new purchaseModel(purchasedata);
    await storedPurchase.save();

    // Create order data (copy relevant fields)
    const orderData = {
      product_name: purchasedata.product_name,
      quantity: purchasedata.quantity,
      product_price: purchasedata.product_price,
      customer_name: purchasedata.customer_name,
      mobile_no: purchasedata.mobile_no,
      address: purchasedata.address,
      payment_mode: purchasedata.payment_mode,
    };

    const storedOrder = new OrderModel(orderData);
    await storedOrder.save(); // ✅ Save to orders

    // Send email
    // const {
    //   customer_name,
    //   customer_email,
    //   ...restData
    // } = purchasedata;

    // const mailResult = await purchaseMail(
    //   customer_email,
    //   "Purchase Confirmation",
    //   {
    //     customer_name,
    //     ...restData,
    //   }
    // );

    // if (!mailResult || mailResult.error) {
    //   console.error("Email failed:", mailResult?.error);
    //   return res.status(500).send({
    //     message: "Purchase saved, but email failed",
    //     data: storedPurchase,
    //   });
    // }

    return res.status(201).send({
      message: "Purchase and Order saved. Email sent.",
      purchase: storedPurchase,
      order: storedOrder,
    });

  } catch (err) {
    console.error("Error in PostPurchase:", err);
    return res.status(500).send("Error in product purchase");
  }
};

const getPurchase=async(req,res)=>{
 try {
    const showpurchase = await purchaseModel.find().sort({ _id: -1 });
    return res.status(200).send({ showdata: showpurchase });
  } catch (err) {
    console.error("Error in get data:", err);
    return res.status(500).send("error in get data");
  }
}
module.exports={PostPurchase,getPurchase}