const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

async function connectDB() {
try {
    await mongoose.connect("mongodb+srv://samspruy:Fcv3EZiRszYSbfX@cluster0.ofh6ngq.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"); 
    //Connection string needs correcting: Password and database name
    console.log("Connected to MongoDB");
} catch (err) {
    console.log("MongoDB connection error", err);
    }
}

connectDB()

const consultSchema = new mongoose.Schema( {
    first_name: String,
    surname: String,
    email: String, 
    date: String,
    time: String,
});

const Consult = mongoose.model("Consultations:", consultSchema);

const installSchema = new mongoose.Schema( {
    first_name: String,
    surname: String,
    email: String, 
    date: String,
    services: String,
});

const Install = mongoose.models.Install || mongoose.model("Installations:",installSchema);

const loginSchema = new mongoose.Schema({
    username: String,
    password: String,
});

const Login = mongoose.models.Login || mongoose.model("Login:",loginSchema);

app.post("/submit-consult", async (req,res) => {
    try {
        const newConsult = new Consult(req.body);
        await newConsult.save();
        res.json({message: "Form submitted successfully!"});
    } catch (error) {
        res.status(500).json({message: "Error saving form"});
    }
});

app.post("/submit-install", async (req,res) => {
    try {
        const newInstall = new Install(req.body);
        await newInstall.save();
        res.json({message: "Form submitted successfully!"});
    } catch (error) {
        res.status(500).json({message: "Error saving form"});
    }
});

app.post("/submit-login", async (req,res) => {
    try {
        const newLogin = new Login(req.body);
        await newLogin.save();
        res.json({message: "Form submitted successfully!"});
    } catch (error) {
        res.status(500).json({message: "Error saving form"});
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));












