const FeedModel=require('../model/queries.model')
const sendMailer = require('../utils/mailService')
//post 
const postquery=async(req,res)=>{
    try{
    const feeddata=req.body
    console.log(feeddata)
    const savedFeed=new FeedModel(feeddata)
    await savedFeed.save()
     // Send email
    const { name, email, ...restof } = req.body;
    console.log(name,email,restof);
    const mailResult = await sendMailer(email,"submission of feedback",restof);
     if (!mailResult) {
      console.error("Email failed:", mailResult.error);
      return res.status(500).send({
        message: "Appointment booked, but email failed to send",
        data: stored_data,
      });
    }

    res.status(201).send({message:"feedback submitted"})
    }
    catch(err){
        res.status(500).send({message:"feedback error"})
    }
}
const getquery = async (req, res) => {
  try {
    const showquery = await FeedModel.find().sort({ _id: -1 });
    return res.status(200).send({ showdata: showquery });
  } catch (err) {
    console.error("Error in get data:", err);
    return res.status(500).send("error in get data");
  }
};

module.exports={postquery,getquery}