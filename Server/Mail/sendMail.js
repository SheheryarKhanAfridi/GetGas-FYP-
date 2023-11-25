const nodemailer = require("nodemailer");
const EMAIL = process.env.EMAIL;
const PASS = process.env.PASS;
const Mailgen = require('mailgen');

const getBill =async (req, res,next) => {
    const {subject,Message}=req.body
    let defaultsetting = {
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: PASS
        }
    };
// yahn humne ek variable bana h or usme humne nodemailer ki library k through 
// transport banai h k email jo send hogi uski details defaultsetting me hai 
    let transporter = nodemailer.createTransport(defaultsetting);
// ye email k template ko generate krta hai
    let Mailgenerator = new Mailgen({
        theme: 'default',
        product: {
            name: 'GetGas',
            // is link me apni website k link dena hai 
            link: 'https://sheheryarkhan.com'
        }
    });

    // creating gmail format 

    let response = {
        body: {
            name: 'sheheryar',
            intro: Message,
        }
    };
    
// email k template me humne data ko set kara h jo humne bhejna hai
    let mail = Mailgenerator.generate(response);

    let Umessage = {
        from: EMAIL,
        to: 'sheheryarsherry90@gmail.com',
        subject:subject,
        // ye sirf email me mail word ko send kr rahi 
        // html: "mail",
        // or ye ek proper template k sath mail bhj rahi hai
        html: mail
    };
// library k through mail ko send kr rahe hn
    transporter.sendMail(Umessage)
        .then(() => {
            res.status(203).json("msg sent");
            console.log('msg sent')
        })
        .catch(err => {
            res.status(403).json(err);
            console.log('msg not send')
        });
        next();
    //yahn hum ye set kr rahe hn k by default jo mail send hogi wo kahn se hogi
    
};

module.exports = {  getBill };
