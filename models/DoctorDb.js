const mongoose=require('mongoose')

const DoctorSchema = new mongoose.Schema({

    name:String,
    age:Number,
    mobile:Number,
    email:String,
    gender:String,
    dob:String,
    education:String,
    department:String,
    fees:Number,
    userName:String,
    password:String

})

const DoctorModel=mongoose.model("doctor",DoctorSchema)
module.exports=DoctorModel