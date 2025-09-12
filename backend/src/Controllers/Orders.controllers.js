const OrderModel=require('../model/Orders.model')
const PostOrder=async(req,res)=>{
    try{
    const Orderdata=req.body
    const stored=new OrderModel(Orderdata)
    await stored.save()
    res.status(201).send("product purchased")
    }
    catch(err){
        res.status(500).send("error in product purchase")
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
module.exports={PostOrder,getOrder}