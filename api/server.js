/*const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname));

// Serve your HTML file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Handle form submission
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Replace with your SMTP host
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: "vincentphamsoftware@gmail.com", // Replace with your email
      pass: "phui lggx fkpl gyry", // Replace with your password or app-specific password
    },
  });

  // Set up email data
  let mailOptions = {
    from: '"Vincent Pham" <vincentphamsoftware@gmail.com>',
    to: "vincentphamsoftware@gmail.com", // Where you want to receive the email
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error: Could not send email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});*/
