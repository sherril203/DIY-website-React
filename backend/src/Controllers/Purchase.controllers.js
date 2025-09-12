const purchaseModel=require('../model/Purchase.model')
const { purchaseMail } = require('../utils/mailService')
const PostPurchase = async (req, res) => {
  try {
    const purchasedata = req.body;

    // Save to DB
    const stored = new purchaseModel(purchasedata);
    await stored.save();

    // Extract fields for email
    const {
      customer_name,
      customer_email,
      ...restData
    } = purchasedata;

    console.log("Sending email to:", customer_email, restData);

    // Send email with correct field names
    const mailResult = await purchaseMail(
      customer_email,
      "Purchase Confirmation",
      {
        customer_name,   // ✅ send correct key for template
        ...restData,
      }
    );

    if (!mailResult || mailResult.error) {
      console.error("Email failed:", mailResult?.error);
      return res.status(500).send({
        message: "Purchase confirmed, but email failed to send",
        data: stored,
      });
    }

    return res.status(201).send({
      message: "Product purchased and email sent successfully",
      data: stored,
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