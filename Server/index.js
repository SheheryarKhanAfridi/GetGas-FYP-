const dotenv= require('dotenv');
const express = require('express')
const app = express()
dotenv.config({path:'./config.env'});
require('./Database/connection.js')
require('./Schemas/user.js')
const cookieParser = require('cookie-parser');
const port=process.env.PORT
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(require('./Routes/route.js'))
const jwt=require('jsonwebtoken');

app.get('/', function (req, res) {
  res.send('Hello World from the home page')
})

// app.get('/about', function (req, res) {
//   console.log('hello about')
// res.send('this is about')
// })
// app.get('/contact', function (req, res) {
//   res.send('this is contact');
// });

app.listen(port,()=>{
  console.log(`server is runing on ${port}`)
})