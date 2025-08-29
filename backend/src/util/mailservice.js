

const nodemailer=require('nodemailer')
require('dotenv').config()
const  pass=process.env.MAIL_PASS
const user_mail=process.env.USER_MAIL
const receiver=process.env.RECEIVER_MAIL
//creating transport process
const transport=nodemailer.createTransport({
  service:"gmail",
  auth:{
    user:user_mail,
    pass:pass
  }
})
//providing mail options
const mailOptions={
    from:user_mail,
    to:"",
    subject:"submission of queries",
    text:"thank you for submiting your queries. we will do best here onwards"
}
// for mail
const mail=()=>{
    transport.sendMail(mailOptions,(err,info)=>{
      if(err){
        console.log("err",err)
      }
      else{
        console.log("info",info)
      }
    })
}
module.exports = mail;
