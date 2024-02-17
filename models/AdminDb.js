const mongoose=require('mongoose')
// Admin Data Entry
const AdminSchema = new mongoose.Schema({

    name:String,
    mobile:Number,
    email:String,
    userName:String,
    password:String

})

const AdminModel=mongoose.model("admin",AdminSchema)
module.exports=AdminModel

//Doctor Entry

