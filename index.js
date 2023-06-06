const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const fs = require("fs");
const path= require("path");
const pathToFile= path.resolve("./data.json");

const corsOptions = {
    origin :"http://localhost:3000",
    optionSuccessStatus :200
}

app.use(cors(corsOptions));

const getResources = ()=>JSON.parse(fs.readFileSync(pathToFile));
app.use(express.json())

app.get("/", (req,res)=>{
    res.send("hello world!")
})

app.get("/api/resources",(req,res)=>{
    const resources = getResources();
    res.send(resources);
})
app.post("/api/resources",(req,res)=>{
    const resources = getResources();
    res.send(resources);
})
app.listen(PORT, ()=>{
    console.log("server is listening on port:" + PORT);
})