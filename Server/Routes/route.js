const express = require('express');
const router = express.Router();
const User = require('../Schemas/user');
const userMsg=require('../Schemas/Contact')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const cors = require('cors');
const Verification = require("../Middleware/Verification")
const Verify=require('../Middleware/Verify')
const cookieParser = require('cookie-parser');
const Vendor=require('../Schemas/Vendor')
const Shop= require('../Schemas/Shop');
router.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));
router.use(cookieParser());
const {  getBill } = require('../Mail/sendMail');
const multer = require('multer');



router.get('/', function (req, res) {
  res.send('Hello World from the home page of router');
});

//400=error from server and 500=error from database
router.post('/register', async (req, res) => {
  const { name, email, phone, address, password, cpassword } = req.body;
  if (!name || !email || !phone || !address || !password || !cpassword) {
    return res.status(422).json({ error: 'Please fill all the fields' });
  }
   if (password !== cpassword) {
    return res.status(422).json({ error: 'Password and Confirm Password do not match' });
  }

  const Existing = await User.findOne({ $or: [{ email: email },{ phone: phone }] }); 
  if(Existing){
    return res.status(400).json('please change your email or phone number')
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log(hashedPassword);
    const userData = await User.create({
      name: name,
      email: email,
      phone: phone,
      address: address,
      cpassword: cpassword,
      password: hashedPassword,
    });
    res.status(201).json({ error: "User Registered" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }

});
 

// user login kr k wapis login k page pr na asake usliye hai
router.post('/Userlogin', async (req, res) => {
  const userAvailable = req.cookies['user-name']; 
  console.log(userAvailable);

  if (userAvailable) {
    res.status(400).json({ error: 'User is already logged in' });
  } else {
    res.status(200).json({error:'user not found'})
  }
});


router.post('/login', async (req, res) => {
  const { email, password} = req.body;
  
  if (!email || !password) {
    return res.status(422).json({ error: 'Please fill in all fields' });
  }

  try {
    let token;
    const Login = await User.findOne({ $or: [{ email: email }] });
    // const name=Login.name;

    if (Login) {
      console.log("User found:", Login);
      console.log("Provided password:", password);
      console.log("Stored password (hashed):", Login.password); 

      const match = await bcrypt.compareSync(password, Login.password);
      // const match = await User.findOne({ $or: [{ password: password }] });
      console.log("Password match result:", match); 

      if (match) {

        token = await Login.generateAuthtoken();
        console.log("Generated token:", token);
        res.cookie("loginToken", token, {
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
          httpOnly: true,
        });
        res.cookie("user-name",Login.name, {
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
          httpOnly: true,
        });
        
        
        res.json({ message: "Sign-in successful" });
      } else {
        res.status(400).json({ error: "Invalid password" });
      }
    } else {
      res.status(400).json({ error: "Invalid email" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server Error" });
  }
});



router.get('/account', Verification, (req, res)=> {
  //sending req.rootuser value in the frontend
  res.send(req.AuthUser);
})
router.get('/contactData', Verification, (req, res)=> {
  //sending req.rootuser value in the frontend
  res.send(req.AuthUser);
})

router.post('/sendingMail',getBill,async(req,res)=>{

})

router.post('/contact',Verification,async(req, res)=> {
  const contactForm=req.body;
  if(!contactForm){
   return res.status(402).json('Empty Data')
  }
  const {name,email,phone,subject,Message}=req.body;
  if(!subject || !Message){
    return res.status(400).json('please fill all the fields')
  }
    
    const userToken=req.cookies.loginToken
    const VerifyUser=jwt.verify(userToken,process.env.PRIVATE_KEY)
    if(!VerifyUser){
        res.status(401).json('User is not verified')
        return console.log('user is not Verified')
        }
  try {

    const secondmsg= await userMsg.findOne({_id: VerifyUser })
    if(secondmsg){
      return res.status(404).json('you cant not send Second Msg With in 24 hours')
    }
    
    const userData = await userMsg.create({
      userId:VerifyUser,
      name: name,
      email: email,
      phone: phone,
      subject:subject,
      Message:Message
    });
    res.status(200).json('message sent')
  
  } catch (error) {
    res.status(404).json('you cant not send Second Msg With in 24 hours')
    console.log("error")
  }

})


router.post('/EditAccountDetails',async(req,res)=>{
  const {Name,Phone}=req.body;
  if(!Name||!Phone){
    return res.status(400).json("Data is empty")
  }
  const userToken=req.cookies.loginToken;
  if(!userToken){
    return res.status(401).json("User is not Login")
  }
  const verifyuser= jwt.verify(userToken,process.env.PRIVATE_KEY);
  if(!verifyuser){
    return res.status(402).json("UnAuthorized User")
  }
  const UserData=await User.findOne({_id:verifyuser});
  if(!UserData){
    return res.status(403).json("User data not Found")
  }
  try {
    UserData.name=Name
  UserData.phone=Phone
  UserData.save();
  res.status(200).json("User Data updated")
  } catch (error) {
    console.log(error)
  }
  
})
 

router.get('/signout', (req, res)=> {
  res.clearCookie('loginToken',{path:'/'})
  res.clearCookie('user-name',{path:'/'})
  res.status(200).send('user logout')
})

router.get('/VendorLogout', (req,res)=>{
  console.log('hello logout')
  res.clearCookie('VendorToken')
  return res.status(200).json('Vendor Logout')
})

router.get('/Navbar', (req, res) => {
  const userData = req.cookies['user-name'];
  
  if (userData) {
    res.status(200).json({ userData });
  } 
});

router.post('/Vendorregister',async (req,res)=>{
  const VendorData=req.body;
  if(!VendorData){
    return res.status(400).json('Empty Vendor Data')
  }
  const FindEmail= await Vendor.findOne({email:VendorData.email});
  if(FindEmail){
    console.log(FindEmail)
    return res.status(401).json('Email already exists')
  }
  const VendorHashedPassword= await bcrypt.hash(VendorData.password,12)
  try {
     const vendorregister= await Vendor.create({
      name:VendorData.name,
      email:VendorData.email,
      password:VendorHashedPassword,
      cpassword:VendorData.cpassword
    })
    res.status(200).json('user Registered')
    console.log('user Registered')

  } catch (error) {
    console.log(error)
  }
  
})
router.post('/CHECKLOGIN',async(req,res)=>{

  const {email,password}=req.body;
  if(!email || !password){
    res.status(400).json('Empty DATA')
  }
  const VendorFind= await Vendor.findOne({email:email})
  if(VendorFind){
     const passCheck=await bcrypt.compareSync(password,VendorFind.password)
     if(passCheck){
      const id=VendorFind._id
      const userID={_id:id}
      //ye samjh nhi aya k token ko generate krwate wqt _id:id ye structure q zarrori hai
      const token=jwt.sign(userID,process.env.PRIVATE_KEY)
      VendorFind.tokens.push({Token:token})
      VendorFind.save()
      .then(()=>{
        console.log('token is saved in Database')
        res.cookie('VendorToken',token,{
          expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
         httpOnly:true,
        })
        res.status(200).json({ message: 'User logged in successfully' });
      }).catch((error)=>{
        console.log(error)
          return res.status(403).json('Error while generating Token')
          
      })
     }else{
      console.log('Invalid Password')
      return res.status(402).json('Invalid Pass')
     }
  }
  else{
    console.log('user not found')
    return res.status(401).json('User not found')

  }

})

router.get('/checkvendor',async (req,res)=>{
  const VendorToken= req.cookies.VendorToken;
  if(VendorToken){
    const VerifiedToken= jwt.verify(VendorToken,process.env.PRIVATE_KEY);
    if(!VerifiedToken){
      return res.status(400).json('Unauthorized User')
    }
    const VendorDeatils= await Vendor.findOne({_id:VerifiedToken})
    if(!VendorDeatils){
      return res.status(401).json('Data not found')
    }
    return res.status(200).json(VendorDeatils)
  }
  else{
    return res.status(202).json('none')
  }
    
})
router.get('/VENDORORUSER',async (req,res)=>{
  const vendor=req.cookies.VendorToken;
  if(vendor){
    res.status(200).json('vendor')
  }
  else{
    res.status(201).json(User)
  } 
 
})
router.get('/checkuser',async (req,res)=>{
  const UserToken= req.cookies.loginToken;
   if(UserToken){
    const VerifiedToken= jwt.verify(UserToken,process.env.PRIVATE_KEY);
    if(!VerifiedToken){
      return res.status(400).json('Unauthorized User')
    }
    const UserDeatils= await User.findOne({_id:VerifiedToken})
    if(!UserDeatils){
      return res.status(401).json('Data not found')
    }
    return res.status(201).json(UserDeatils)
  }
  else if(!UserToken){
    return res.status(202).json('none')
  }
   
})
const storage = multer.diskStorage({
  // isme batana hai k image kahn save ho
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  // isme batana hai k image k naam kia hai
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({storage })

router.post('/VendorForm',Verify,upload.single('file') , async(req, res) => {
  const VendorData=req.body;
  const uploadedFile = req.file;

    if (!VendorData || !uploadedFile) {
      return res.status(400).json('Incomplete Data');
    }
  const vendorID =  res.locals.verifytoken;
  const {shopname,ownername,vendor_phone,vendor_address,current_price,city,province,zipcode} = VendorData;
 
  const convertedData = {
    ...VendorData,
    vendor_phone: parseInt(vendor_phone),
    current_price: parseFloat(current_price),
    zipcode: parseInt(zipcode),
  };

  try {
    Shop.create({
      Vendor_id: vendorID,
      ShopName: shopname,
      OwnerName: ownername,
      VendorPhone: convertedData.vendor_phone,
      VendorAddress: vendor_address,
      CurrentPrice: convertedData.current_price,
      City: city,
      Province: province,
      ZipCode: convertedData.zipcode,
      ImagePath: uploadedFile.path,
  })
  return res.status(200).json('Shop registered')
  } catch (error) {
    console.log(error)
  }
});

router.post('/ShopData',async (req,res)=>{
  const token = req.cookies.VendorToken;
  const verifytoken=jwt.verify(token,process.env.PRIVATE_KEY);
  const ShopData= await Shop.findOne({Vendor_id:verifytoken});
  res.status(200).send(ShopData)
  console.log(ShopData)
})

router.post('/ChekingFromShopPage',(req,res)=>{
  const token=req.cookies.loginToken;
  if(!token){
    return res.status(400).json('token not found')
  }
  else{
    return res.status(200).json('user login')
  }
})

router.post('/AllShops',async(req,res)=>{
  const ALLshop = await Shop.find({})
  if(!ALLshop){
    return res.status(400).json('Database Error')
  }
  else{
    return res.status(200).send(ALLshop)
  }
})








module.exports = router;





