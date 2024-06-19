const express=require("express");

const studentsRoutes=require("./src/students/routes");
const app=express();
const port=3000;


app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Hey There");

});

app.use("/api/v1/students",studentsRoutes);

app.listen(port,
    ()=>console.log(`app is listening on port ${port}`));