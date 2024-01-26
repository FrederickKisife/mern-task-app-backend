const dotenv = require("dotenv").config()
const express = require("express")
const connectDB = require("./config/connectDB")
const mongoose = require("mongoose")
const Task = require("./model/taskModel")
const taskRoutes = require("./routes/taskRoute")
const cors = require("cors")



const app = express()

// Middleware
app.use(cors({
    origin: ["http://localhost:3000/","https://mern-task-app-jk5u.onrender.com"]
}));
app.use(express.json())

app.use(express.urlencoded({extended: false}))
app.use("/api/tasks",taskRoutes)


const PORT = process.env.PORT || 5000

mongoose
    .connect(process.env.MONGO_URI)
    .then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server running on ${PORT}`);
    })
})
.catch((err)=>{
    console.log(err);
})


// mongodb+srv://fred123:<password>@fred123.i3j5gxk.mongodb.net/?retryWrites=true&w=majority