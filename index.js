const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const AdminModel=require('./models/AdminDb')
const DoctorModel = require('./models/DoctorDb')
const NurseModel = require('./models/NurseDb')
const AmbulanceModel = require('./models/AmbulanceDb')
const PatientModel = require('./models/PatientDb')
const app=express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://kiruthik:717821p132@cluster0.kqjnolw.mongodb.net/Crud?retryWrites=true&w=majority')
.then(()=>{console.log('Connected to Atlas')})
.catch((err)=>{console.log(err)})

//Admin Model

app.get('/Admin',(req,res) =>{
    AdminModel.find({})
    .then(admins=> res.json(admins))
    .catch(err => res.json(err))
    console.log(AdminModel.find({}))

    
})


app.post("/createAdmin", (req,res) => {

    AdminModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

// Doctor Model

 app.get('/Doctor',(req,res) =>{
    DoctorModel.find({})
    .then(doctors=> res.json(doctors))
    .catch(err => res.json(err))
})


app.post("/createDoctor", (req,res) => {

    DoctorModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))

})

// Nurse Model

 app.get('/Nurse',(req,res) =>{
    NurseModel.find({})
    .then(doctors=> res.json(doctors))
    .catch(err => res.json(err))
})


app.post("/createNurse", (req,res) => {

    NurseModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))

})


// Ambulance Model

 app.get('/Ambulance',(req,res) =>{
    AmbulanceModel.find({})
    .then(ambulance=> res.json(ambulance))
    .catch(err => res.json(err))
})


app.post("/createAmbulance", (req,res) => {

    AmbulanceModel.create(req.body)
    .then(ambulance => res.json(ambulance))
    .catch(err => res.json(err))

})

// Patient Model

 app.get('/Patients',(req,res) =>{
    PatientModel.find({})
    .then(patient=> res.json(patient))
    .catch(err => res.json(err))
})


app.post("/createPatient", (req,res) => {

    PatientModel.create(req.body)
    .then(patient => res.json(patient))
    .catch(err => res.json(err))

})

//Login Authentication

//Patient Login Authentication

app.post("/patientLogin", (req,res) => {

    const {mail,password}=req.body;
    PatientModel.findOne({email: mail})
    .then(user => {

        if(user){
            if(user.password === password) {
                res.json("Success")
            }
            else{
                res.json("password not correct")
            }
        }else{
            res.json("Account Not Found")
        }

    })


})

app.listen(3001,() => {

    console.log("Server is running");
})

