const express=require('express')
const bodyParser=require('body-parser')
const crypto=require('crypto')
const cors =require('cors')
const dotenv=require('dotenv')

const app=express()
app.use(bodyParser.json())
app.use(cors())
dotenv.config()
const mongoose=require('mongoose')



const GymSchema=new mongoose.Schema({
    name: String,

  title: String,

   

})
const GymModel=new mongoose.model("Authors",GymSchema)

const GymByid = [
    {
        id:1,
      name:'Regular Exercise',
      title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore',
      imageUrl:'https://preview.colorlib.com/theme/gym/img/o1.png.webp'
    },
    {
        id:2,
      name:'Training on the go',
      title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore',
      imageUrl:'https://preview.colorlib.com/theme/gym/img/o2.png.webp'
    },
    {
        id:3,
      name:'Body Building Packages',
      title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore',
      imageUrl:'https://preview.colorlib.com/theme/gym/img/o3.png.webp'
    },


    
  ];





app.get("/api", (req, res) => {
    res.send("Welcome to Our API!");
  });
  app.get('/api/product', (req, res) => {
    const {name} = req.query
    if (!name) {
        res.status(200).send(GymByid)

    } else {
        res.status(200).send(GymByid.filter((x) => x.name.toLowerCase().trim().includes(name.toLowerCase().trim())))
    }

})
  

app.get(`/api/product/:id`,(req,res)=>{
    const {id} =req.params;
    res.status(200).send(GymByid.find((x)=>x.id==id))
})

app.delete(`/api/product/:id`,(req,res)=>{
    const {id}=req.params
    const deleteGym=GymByid.find((x)=>x.id==id)
    const idx=GymByid.indexOf(deleteGym)
    GymByid.splice(idx,1)

    res.status(203).send({
        message:`${deleteGym.name}deleted successufully!`
    })
})



app.post(`/api/product`,(req,res)=>{
    const{name, title}=req.body;
    const newGym={
        id:crypto.randomUUID(),
        name:name,
         title:title,
       
 }
    GymByid.push(newGym)
    res.status(201).send({
    message:`${newGym.name} posted successufully`
   })
})


app.put(`/api/product/:id`,(req,res)=>{
    const id=req.params.id;
    const updatingGym=GymByid.find((x)=>x.id==id)
    const{name,title,}=req.body
    if (name) {
        updatingGym.name=name
        
    }
    if (title) {
        updatingGym.title=title
        
    }
    
    res.status(200).send(`${updatingGym.name} uptading successufully`)
})



  PORT=process.env.PORT

  app.listen(PORT, () => {
    console.log(`App running on  PORT: ${PORT}`);
  });



  
  mongoose.connect('mongodb+srv://aytekin_admin:Admin1234@front.10shrnn.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('Mongo Db connect');
})