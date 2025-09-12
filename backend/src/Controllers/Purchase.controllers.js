const purchaseModel=require('../model/Purchase.model')
const PostPurchase=async(req,res)=>{
    try{
    const purchasedata=req.body
    const stored=new purchaseModel(purchasedata)
    await stored.save()
    res.status(201).send("product purchased")
    }
    catch(err){
        res.status(500).send("error in product purchase")
    }
}
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