const express=require('express')
const router=express()
const app=router()
const query=require('../Controllers/feedback.controller')
//post query
app.post('/postquery',query.postquery)
module.exports={router}