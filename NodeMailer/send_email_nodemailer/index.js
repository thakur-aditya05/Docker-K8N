// app.js
const express = require('express')
const nodemailer = require('nodemailer')

const app = express()
app.use(express.json()); // if you want to parse JSON request bodies

app.get("/",(req,res)=>{
    res.send("<h1>t i am sending g mail </h1>")
})


// configure transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  secure: true,
  port: 465,
  auth: {
    user: 'thakuradityasinghchauhan22@gmail.com',
    pass: 'unmnofvcaqnyphds' // be careful with secrets in code
  }
})

app.post('/send-mail', async (req, res) => {
  const mailOptions = {
    from: 'thakuradityasinghchauhan22@gmail.com',
    to: 'thakurtanmaysinghchauhan05@gmail.com',
    subject: 'Node Js Mail Testing!',
    text: 'Hello, this is a text mail!'
    // or use HTML: html: '<b>Hello</b>'
  }

  try {
    const info = await transporter.sendMail(mailOptions)
    console.log('Email sent:', info.messageId)
    res.status(200).json({ success: true, messageId: info.messageId })
  } catch (err) {
    console.error('Error sending email:', err)
    res.status(500).json({ success: false, error: err.message })
  }
  
})

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
