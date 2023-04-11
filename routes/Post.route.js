const express=require("express")
const {PostModel}=require("../models/Post.model")

const postRouter=express.Router()

postRouter.get("/retrievedata",async(req,res)=>{
   // res.send("All the posts")
    let query=req.query
    try{
        // const posts=await PostModel.find(query)
        // res.send(posts)
        //const {query}=req
        console.log(query)
        let order=query._order
        if(order=="asc")
        {
           const posts= await PostModel.find( query).sort({ budget:1 })
           //console.log(posts)
           res.send({msg:"posts getting successfully ",posts})
        }
        else if(order="desc")
        {
            const posts= await PostModel.find( query).sort({ budget: -1 })
            res.send({msg:"posts getting successfully ",posts})
        }
        else{
            const posts= await PostModel.find( query)
            res.send({msg:"posts getting successfully ",posts})
        }
        // const posts=await  order=="asc"? PostModel.find( query).sort({ budget: 1 }): order=="desc"? PostModel.find( query).sort({ budget: -1 }):PostModel.find( query)
       
        // res.send({msg:"posts getting successfully ",posts})
    }catch(err){
        console.log(err.message)
        res.send({"err":"Something went wrong",message:err.message})
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