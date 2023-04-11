const express=require("express")
const {PostModel}=require("../models/Post.model")

const postRouter=express.Router()

postRouter.get("/retrievedata",async(req,res)=>{
   // res.send("All the posts")
    let query=req.query
    try{
        const posts=await PostModel.find(query)
        res.send(posts)
    }catch(err){
        console.log(err)
        res.send({"err":"Something went wrong"})
    }
})

postRouter.post("/postdata",async(req,res)=>{
    const payload=req.body
    try{
        const new_post=new PostModel(payload)
        await new_post.save()
        res.send("Created the post")
    }catch(err){
        console.log(err)
        res.send({"msg":"Something went wrong"})
    }
})



module.exports={
    postRouter
}