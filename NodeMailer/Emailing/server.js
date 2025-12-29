require('dotenv').config();


const express = require('express')

const app = express();


app.use(express.json());



// send-mail.js
const fs = require('fs').promises;
const path = require('path');




const Mail = require('./mail');

app.get("/",(req,res)=>{
    res.send("<h1>t i am sending g mail </h1>")
})


    // from: 'thakuradityasinghchauhan22@gmail.com',
    // to: 'thakurtanmaysinghchauhan05@gmail.com',
    // subject: 'Node Js Mail Testing!',
    // text: 'Hello, this is a text mail!'



app.get("/sendMail", async (req,res)=>{
    
    const m = new Mail();
    m.setCompanyName('My Company');
    m.setTo('thakurtanmaysinghchauhan05@gmail.com');
    m.setSubject('i am sending email for u ');
    m.setText('just sending email');
    m.setHTML('<b>Hello there!</b>');
    
    try {
        const info = await m.send();
        console.log('✅ Sent:', info.messageId);
    } catch (e) {
        console.error('❌ Send error:', e);
    }
    
    res.send("mail opttions send");

})









app.get("/sendHTMLMail", async (req,res)=>{
    
    // console.log(req.body);
    // let {my_name,r_name,subject}=req.body;

    const m = new Mail();

    m.setCompanyName('Aditya Singh ');
    m.setTo('thakurtanmaysinghchauhan05@gmail.com');
    m.setSubject('i am sending email for u ');
    m.setText('just sending email');
    m.setHTML('<b>Hello there!</b>');
    
  try {
        const htmlPath = path.join(__dirname, 'mail.html');
        const htmlContent = await fs.readFile(htmlPath, 'utf8');
        m.setHTML(htmlContent);
        // Optionally set plain-text fallback
        m.setText('Please view this email in an HTML-compatible client.');
        
        const info = await m.send();
        console.log('✅ Email sent:', info.messageId);
    } catch (err) {
        console.error('❌ Failed to send email:', err);
    }
    res.send("mail  send");

})



app.post("/sendMail", async (req,res)=>{
    
    console.log(req.body);
    let {my_name,r_name,subject,text,html}=req.body;

    const m = new Mail();
    m.setCompanyName(my_name);
    m.setTo(r_name);
    m.setSubject(subject);
    m.setText(text);
    m.setHTML(html);

    try {
        const info = await m.send();
        console.log('✅ Sent:', info.messageId);
    } catch (e) {
        console.error('❌ Send error:', e);
    }

    res.send("mail  send");

})




// 
const PORT = process.env.PORT || 8080

// server started 
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})






