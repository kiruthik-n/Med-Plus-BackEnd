const mongoose=require('mongoose')

const PatientSchema = new mongoose.Schema({

    name:String,
    age:Number,
    mobile:Number,
    email:String,
    password:String

})

const PatientModel=mongoose.model("patient",PatientSchema)
module.exports=PatientModel