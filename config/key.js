const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true },(err)=>{
    if(err)
        throw err;
    console.log('MongoDB connected...')
})

require('../models/posts')