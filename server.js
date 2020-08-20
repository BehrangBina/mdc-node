const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const userRoute = require ('./router/user_router');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const morgan =require('morgan')
const AuthRoute = require('./router/auth_router')

// Express App
require ('dotenv').config();

// Connect To DB
const db = process.env.DATABASE;
mongoose.connect
    (db,    { useNewUrlParser: true,  useUnifiedTopology: true})
    .then(()=>{console.log(`Database Started at: ${db}`)})


// Middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())
 

//Routers - MiddleWare
app.use('/api',userRoute)
app.use('/api',AuthRoute)

app.get('/',(req,res)=>{
        res.send('Hello ...');
});
 
const port = process.env.PORT;

app.listen(port,()=>{
     console.log(`Server Started: http:/localhost:${port}/`)
})


