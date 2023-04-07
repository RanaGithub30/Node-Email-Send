const nodemailer = require("nodemailer");

const sendMail = async(req, res) => {

    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email', // ethereal mail is just used for testing purpose
        port: 587,
        auth: {
            user: 'mina.kshlerin89@ethereal.email',
            pass: 'abffrpynHPC8RGarFW'
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Rana Saha 👻" <mina.kshlerin89@ethereal.email>', // sender address
        to: "abcd@gmail.com, xyz@gmail.com", // list of receivers
        subject: "Node JS Email Send", // Subject line
        text: "Testing Email", // plain text body
        html: "<b>Tes Email from Node js Tutorial</b>", // html body
    });


    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // get the information of mail sending in json
      res.json(info);
};

module.exports = sendMail;