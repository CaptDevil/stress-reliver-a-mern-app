const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express()

require('./config/key')

app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(cors())

const Post = mongoose.model('Posts')

app.post('/api/send',(req,res)=>{
    let newPost = new Post({ message:req.body.val.value })
    newPost.save((err,result)=>{
        if(err)
            throw err
    })
})

app.get('/api/send',(req,res)=>{
    Post.find({}).sort({_id:-1}).exec((err,results)=>{
        if(err)
            throw err
        res.send(results)
    })
    
})

if(process.env.NODE_ENV == 'production'){
    app.use(express.static('client/build'))
    
    app.get('*',(req,res)=>{
        res.sendFile('./client/build/index.html')
    })
}

const port = process.env.PORT || 5000

app.listen(port,()=>console.log(`Server started on port ${port}...`))