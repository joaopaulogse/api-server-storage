const express = require('express');
const bodyParser = require("body-parser");
const multer = require("multer")
const fs = require("fs");

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'upload/')
    },
    filename: (req, file, cb) =>{
        const {} = req.body
        cb(null, `${file.fieldname}-${Date.now()}`)
    }
})

const upload = multer({ storage })

const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("upload"))

app.post("/file", upload.single("file"), (req, res)=>{
    res.json(res.file);
})

module.exports = app;