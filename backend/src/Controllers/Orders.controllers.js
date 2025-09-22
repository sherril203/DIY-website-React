const OrderModel = require('../model/Orders.model')
const ConfirmationMail = require('../utils/mailService')
//post 
const postOrder=async(req,res)=>{
    try{
    const feeddata=req.body
    console.log(feeddata)
    const savedFeed=new OrderModel(feeddata)
    await savedFeed.save()
     // Send email
    const { name, email, ...restof } = req.body;
    console.log(name,email,restof);
    const mailResult = await ConfirmationMail(email,"purchase confirmation",restof);
     if (!mailResult) {
      console.error("Email failed:", mailResult.error);
      return res.status(500).send({
        message: "Product not purchased",
        data: stored_data,
      });
    }

    res.status(201).send({message:"product coonfirmation submitted"})
    }
    catch(err){
        res.status(500).send({message:"confirmation error error"})
    }
}

const getOrder=async(req,res)=>{
 try {
    const showOrder = await OrderModel.find().sort({ _id: -1 });
    return res.status(200).send({ showdata: showOrder });
  } catch (err) {
    console.error("Error in get data:", err);
    return res.status(500).send("error in get data");
  }
}
module.exports={postOrder,getOrder}