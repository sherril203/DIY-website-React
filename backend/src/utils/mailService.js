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
const purchaseMail = async (to, subject, data) => {
  try {
    const mailoptions = {
      from: user_mail,
      to,
      subject,
      text: "Thank you for your purchase. Your product will be delivered soon.",
      html: `
        <div style="font-family: sans-serif; padding: 10px; line-height: 1.6;">
          <h2 style="color: #d63384;">Thank you for your purchase, ${data.name}!</h2>
          <p><strong>Product:</strong> ${data.product_name}</p>
          <p><strong>Quantity:</strong> ${data.quantity}</p>
          <p><strong>Price:</strong> ₹${data.product_price}</p>
          <p><strong>Customization:</strong> ${data.customization}</p>
          <p><strong>Payment Mode:</strong> ${data.payment_mode}</p>
          <p><strong>Delivery Address:</strong> ${data.address}</p>
          <br/>
          <p>We'll process and ship your order shortly. Thank you for shopping with us!</p>
          <p style="font-size: 14px; color: #555;">- Arts World</p>
        </div>
      `
    };

    const info = await transport.sendMail(mailoptions);
    console.log("Email sent:", info.response);
    return info;
  } catch (error) {
    console.error("Error sending email:", error);
    return { error };
  }
};;

module.exports = {sendMailer,purchaseMail}