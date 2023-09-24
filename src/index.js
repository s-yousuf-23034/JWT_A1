const express = require ("express"); //import express
const app = express() //app obj
//routes
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require('mongoose');

dotenv.config();

app.use(express.json());

app.use(cors());

//connet to the server
mongoose.connect("mongodb+srv://admin:saba@cluster0.uczgtiw.mongodb.net/", {useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log("Connected to MongoDB")
    app.listen(5000, ()=> {
        console.log("Server Started")
    });

}).catch((error) => {
    console.log(error);
})

app.use("/users", userRouter);
app.use("/notes", noteRouter);


app.get("/", (req, res) => {
    res.send("HelloWorld!")
});


