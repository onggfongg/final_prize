const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client/build")));

app.post("/api/form", (req, res) => {
  const mailOptions = {
    from: "" + req.body.email,
    to: "thitaree.sasa@gmail.com",
    subject: "ข้อความอัตโนมัติ",
    html: "<p>" + req.body.message + "</p>" + "from" + req.body.email
  };
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "thitaree.sasa@gmail.com", pass: "21025392102539" }
  });
  transporter.sendMail(mailOptions, (error, res) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({ msg: "Email sent successfully" });
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// app.post("/api/form", (req, res) => {
//   nodemailer.createTestAccount((err, account) => {
//     const htmlEmail = `
//   <h3>Contact Details</h3>
//   <ul>
//   <li>Name: ${req.body.name}</li>
//   <li>Email: ${req.body.email}</li>
//   </ul>
//   <h3>Message</h3>
//   <p>${req.body.message}</p>`;

//     let transporter = nodemailer.createTransport({
//       host: "smtp.etheral.email",
//       port: 587,
//       auth: {
//         user: "kyle87@ethereal.email",
//         pass: "UvFwYUfABfcgU1RH3j"
//       }
//     });

// let mailOptions = {
//     from: 'test@testaccount.com',
//     to : 'kyle87@ethereal.email',
//     replyTo: 'New Message',
//     subject:'New Message'
//     text:req.body.message,
//     html: htmlEmail
// }
// transporter.sendMail(mailOptions, (err,info)=>{
// if (err){
//     return console.log(err)
// }

// console.log('Message sent: %5', info.message)
// console.log('Message URL: %5', nodemailer.getTestMessageUrl(info))
//   });
// });

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log("Server listening on port 3001");
});
