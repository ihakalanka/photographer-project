const Contact = require('../models/contact');
const { errorResponse, successResponse } = require('../shared/response');
const nodemailer = require('nodemailer');
require('dotenv').config();

exports.sendMail = async (req, res) => {
    const {
        name,
        mobileNo,
        email,
        message,
    } = req.body;

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
      }

    let nameWithCap = capitalizeFirstLetter(name);
    let msgWithCap = capitalizeFirstLetter(message);

    try {
        const mail = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
            }
        })

        const mailOptions = {
            from: `"${nameWithCap} 👻"<user>` ,
            to: email,
            subject: `Subscribed by ${nameWithCap}`,
            html: `
            <h2>Subscribed by ${nameWithCap}</h2>
            <p>
            <b>Dear Thilina</b> &#128075;
            </br></br>
            I'm ${nameWithCap} and ${msgWithCap}.
            Please contact me using following mobile number ${mobileNo}.
            </br></br>
            Thank you.
            </br></br>
            Regards,
            </br>
            ${nameWithCap}
            </p>
            `
        }

        mail.sendMail(mailOptions, (err, info) => {
            if (err){
                errorResponse(res, null, null, err);
            }
            else{
                successResponse(res, 'Email sent',info.response);
            }
        })
    }
    catch(err){
        errorResponse(res, null, null, err);
    }
}