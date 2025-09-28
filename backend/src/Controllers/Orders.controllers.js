const OrderModel = require('../model/Orders.model')
const {ConfirmationMail }= require('../utils/mailService')
//post 
// const postOrder=async(req,res)=>{
//     try{
//     const feeddata=req.body
//     console.log(feeddata)
//     const savedFeed=new OrderModel(feeddata)
//     await savedFeed.save()
//     // Send email
//     // const { name, email, ...restof } = req.body;
//     // console.log(name,email,restof);
//     // const mailResult = await ConfirmationMail(email,"purchase confirmation",restof);
//     //  if (!mailResult) {
//     //   console.error("Email failed:", mailResult.error);
//     //   return res.status(500).send({
//     //     message: "Product not purchased",
//     //     data: stored_data,
//     //   });
//     // }
//     res.status(201).send({message:"product confirmation submitted"})
//     }
//     catch(err){
//         res.status(500).send({message:"confirmation error error"})
//     }
// }


const postOrder = async (req, res) => {
  try {
    const {
      product_name,
      quantity,
      product_price,
      customer_name,
      customer_email,
      mobile_no,
      address,
      payment_mode,
      razorpay_payment_id
    } = req.body;

    if (!razorpay_payment_id) {
      return res.status(400).send({ message: "Payment ID is missing" });
    }

    // ✅ Save order
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
      status: "Success"
    });

    await savedOrder.save();

    // ✅ Send confirmation mail
  const mailResult = await ConfirmationMail(
  customer_email,
  "Purchase Confirmation",
  {
    product_name,
    quantity,
    product_price,
    payment_mode,
    mobile_no,
    address,
    razorpay_payment_id: razorpay_payment_id || null,
  },
  customer_name
);

    if (!mailResult || mailResult.error) {
      console.error("Email failed:", mailResult?.error);
      return res.status(500).send({
        message: "Order saved, but email failed",
        order: savedOrder,
      });
    }

    return res.status(201).send({
      message: "Order saved and email sent",
      order: savedOrder,
    });
  } catch (err) {
    console.error("Error in postOrder:", err);
    res.status(500).send({ message: "Server error" });
  }
};

const getOrder = async (req, res) => {
  try {
    const showOrder = await OrderModel.find().sort({ _id: -1 });
    return res.status(200).send({ showdata: showOrder });
  } catch (err) {
    console.error("Error in get data:", err);
    return res.status(500).send("error in get data");
  }
}
 
const CancelOrder=async (req, res) => {
  try {
    const id=req.params.orderId
    const deleted = await OrderModel.findByIdAndDelete(id);
    if (!deleted) return res.status(404).send({ message: 'Order not found' });
    res.status(200).send({ message: 'Order deleted' });
  } catch (err) {
    res.status(500).send({ error: 'Server error' });
  }
};

module.exports = { postOrder, getOrder,CancelOrder }