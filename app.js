require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const cors = require("cors");
const router=require("./Routes/router");
const PORT = process.env.PORT || 6010


const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());
app.use("/uploads",express.static("./uploads"));
app.use("/files",express.static("/public/files"))
app.use(router);
// app.get("/",(req,res)=>{
//      res.status(201).json("server start")
//  });

app.listen(PORT,()=>{
    console.log(`Server start at port no ${PORT}`)
})
