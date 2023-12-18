const nodemailer = require("nodemailer");

// creating a transporter object using SMTP transport
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "jamesbond@gmail.com",
    pass: "01feb@1986",
  },
});

// setting-up email data with unicode symbols
let mailOptions = {
  from: "jamesbond@gmail.com",
  to: "tomcruise@gmail.com",
  subject: "Hello from Node.js",
  text: "Hello from Node.js!",
};

// sending mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Message sent: %s", info.messageId);
});
