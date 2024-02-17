const mongoose=require('mongoose')

const AmbulanceSchema = new mongoose.Schema({

    number:String,
    type:String

})

const AmbulanceModel=mongoose.model("ambulance",AmbulanceSchema)
module.exports=AmbulanceModel