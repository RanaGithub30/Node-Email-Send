const nodemailer = require("nodemailer");
require('dotenv').config();

const sendMail = async (req, res) => {
    try {
        // Create reusable transporter object using SMTP
        let transporter = nodemailer.createTransport({
            host: 'smtp.ethereal.email',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        // Mail options
        let info = await transporter.sendMail({
            from: `"Rana Saha 👻" <${process.env.EMAIL_USER}>`,
            to: "abcd@gmail.com, xyz@gmail.com",
            subject: "Node.js Email Test",
            text: "Hello! This is a test email.",
            html: "<b>This is a test email from a Node.js tutorial</b>",
        });

        console.log("Message sent: %s", info.messageId);

        res.status(200).json({
            success: true,
            message: "Email sent successfully",
            messageId: info.messageId,
            previewURL: nodemailer.getTestMessageUrl(info) // Only for test accounts
        });

    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send email", error });
    }
};

module.exports = sendMail;