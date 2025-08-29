const { message } = require('statuses')
const FeedModel=require('../model/queries.model')
//post 
const postquery=async(req,res)=>{
    try{
    const feeddata=req.body
    const savedFeed=new FeedModel(feeddata)
    await savedFeed.save()
    res.status(201).send({message:"feedback submitted"})
    }
    catch(err){
        res.status(500).send({message:"feedback error"})
    }
}
module.exports={postquery}