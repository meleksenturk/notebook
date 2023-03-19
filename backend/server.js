const express = require("express");
const app = express();
const noteRoute = require("./routes/notlar")
const mongoose = require("mongoose")
require('dotenv').config();
const cors = require('cors');

app.use((req,res,next) => {
    console.log(req.path, req.method)
    next()
})

app.use(express.json())
app.use(cors());


mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected mongodb")
        app.listen(process.env.PORT, () => {
            console.log(`${process.env.PORT} dinleniyor.`)
        })
    }).catch(err => {
        console.log(err)
    })

app.use("/api/notes",noteRoute)
