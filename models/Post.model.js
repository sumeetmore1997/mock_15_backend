const mongoose=require("mongoose")

const postSchema=mongoose.Schema({
    name:String,
    email:String,
    destination:String,
    travellers:Number,
    budget:Number
})

const PostModel=mongoose.model("post",postSchema)

module.exports={
    PostModel
}