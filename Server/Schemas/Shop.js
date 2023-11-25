const mongoose = require('mongoose');
const VendorShop= new mongoose.Schema({
    Vendor_id:{
        type:String
    },
    ShopName:{
        type:String
    },
    OwnerName:{
        type:String
    },
    VendorPhone:{
        type:Number
    },
    VendorAddress:{
        type:String
    },
    ImagePath:{
        type:String
    },
    CurrentPrice:{
        type:Number
    },
    City:{
        type:String
    },
    Province:{
        type:String
    },
    ZipCode:{
        type:Number
    },
})
const Shop=mongoose.model('Shop',VendorShop)
module.exports=Shop;