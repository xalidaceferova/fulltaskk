const express=require("express")
const app=express()
const cors=require("cors")
const mongoose=require("mongoose")
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://xalide:xalide2001@cluster0.lbiijj0.mongodb.net/").then(()=>{
    console.log("connected")
})
const productSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
})

const Product=mongoose.model("products",productSchema)

app.get("/",async(req,res)=>{
    const data= await Product.find()
    res.send(data)
})
app.delete("/:id",async(req,res)=>{
    const {id}=req.params
    const deleteditem= await Product.findByIdAndDelete(id)
    res.send(deleteditem)
})
app.get("/:id",async(req,res)=>{
    const {id}=req.params
    const findId= await Product.findById(id)
    res.send(findId)
})

app.post("/",async(req,res)=>{
    const newproduct=new Product({
        ...req.body
    })
    await newproduct.save()
    res.send(newproduct)
})
app.listen(8080)