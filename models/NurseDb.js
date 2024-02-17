const mongoose=require('mongoose')

const NurseSchema = new mongoose.Schema({

    name:String,
    mobile:Number,
    email:String,
    gender:String,
   

})

const NurseModel=mongoose.model("nurse",NurseSchema)
module.exports=NurseModel