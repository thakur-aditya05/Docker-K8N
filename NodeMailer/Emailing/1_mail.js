// this files espacially handles mails 

// const { error } = require('console');
// const nodemailer = require('nodemailer');

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   host:'smtp.gmail.com',
//   secure: false,
//   port: 587,
//   auth: {
//     user: process.env.EMAIL,
//     pass: process.env.PASSWORD // be careful with secrets in code
//   }
// })

// class Mail{

//     constructor(){
//         this.mailOptions={
//             from:{
//                 address:process.env.EMAIL,
//                 name:"Aditya Singh"
//             }
//         }
//     }


//     setCompanyName(name){
//         this.mailOptions.from.name=name;
//     }

//     setTo(receiver){
//         this.mailOptions.to=receiver;
//     }

//     setSubject(subject){
//         this.mailOptions.subject =subject;
//     }

//     setText(text){
//         this.mailOptions.text=text;
//     }

//     setHTML(html){
//         this.mailOptions.html=html;
//     }

//     send(){
//         transporter.sendMail(this.mailOptions,(err,info)=>{
//             if(error){
//                 console.log(error);
//             }else{
//                 console.log('email sent '+ info.response);
//             }
//         })
//     }


// }




const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'thkakuradityasing@gmail',
  host: 'smtp.gmail.com',
  secure: false,
  port: 587,
  auth: {
    user: 'thakuradityasinghchauhan22@gmail.com',
    pass: 'unmnofvcaqnyphds'
  }
});





// Optional: Verifies connection configuration before sending any email
transporter.verify((err, success) => {
  if (err) {
    console.error('Mail server configuration error:', err);
  } else {
    console.log('Mail server ready:', success);
  }
});





class Mail {
    constructor() {
      this.mailOptions = {
        from: {
          address: 'thakuradityasinghchauhan22@gmail.com',
          name: "Aditya Singh"
        }
      };
    }

    setCompanyName(name) {
      this.mailOptions.from.name = name;
    }


    // i was hhaving this initally 
    // setTo(receiver) {
    //   this.mailOptions.to = receiver;
    // }
    // ----------------------------------
    senTo(receiver){
      let receivers=this.mailOptions.to  || [];
      receivers.push(receiver);
      this.mailOptions.to=receivers;
    }
    setCC(cc){
      let ccs=this.mailOptions.cc||[];
      ccs.push(cc);
      this.mailOptions.cc=ccs;
    }
    setBCC(bcc){
      let bccs=this.mailOptions.bcc||[];
      bccs.push(bcc);
      this.mailOptions.bcc=bccs;
    }
    // we have added this 
// ----------------------------------------






    setSubject(subject) {
      this.mailOptions.subject = subject;
    }

    setText(text) {
      this.mailOptions.text = text;
    }

    setHTML(html) {
      this.mailOptions.html = html;
    }

    async send() {
      try {
        const info = await transporter.sendMail(this.mailOptions);
        console.log('Email sent:', info.response);
        return info;
      } catch (err) {
        console.error('Failed to send email:', err);
        throw err;
      }
    }
}







// this method is made too test cc and bccc 
function  sendMail(){
  
  
  let mail = new Mail();
  
  mail.senTo('thakuradityasinghchauhan22@gmail.com');
  mail.setSubject('Subject');
  mail.setText('i am sennding cc and bcc options ');
  
  // mail.setCC('thakuradityasinghchauhan22@gmail.com, thakurtanmaysinghchauhan05@gmail.com,bablubara12@gmail.com');
  mail.setBCC(['thakuradityasinghchauhan22@gmail.com', 'thakurtanmaysinghchauhan05@gmail.com','bablubara12@gmail.com']);
  
  mail.send();
  
}
// sendMail()
console.log("hi your emial sended ") 


module.exports = Mail;