const nodemailer = require('nodemailer');
require('dotenv').config();


const user_mail  =  process.env.USER_MAIL;
const mail_pass = process.env.MAIL_PASS;

const transport = nodemailer.createTransport({
    service : 'gmail',
    auth:{
        user: user_mail,
        pass : mail_pass
    },
})

const sendMailer = async(to,subject,data) =>{
    try{
        const mailoptions = {
            from: user_mail,
            to,
            subject,
            data  ,
            text:"thank you for your feedback"
        }

        const info = await transport.sendMail(mailoptions)
        console.log("email send",info.response)
        return info
    }catch(error){
        console.log("error sending email : " ,error)
        throw error
    };
};


module.exports = sendMailer