const express=require("express")
const {connection}=require("./configs/db")
const {postRouter}=require("./routes/Post.route")
require("dotenv").config()

const cors=require("cors")

const app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Home Page")
})


app.use("/posts",postRouter)



app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Connected to the DB")
    }catch(err){
        console.log("Trouble connecting to the DB")
        console.log(err)
    }
    console.log(`running at ${process.env.port}`)
})