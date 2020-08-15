const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const userRoute = require ('./router/user_router');
// Express App
require ('dotenv').config();

// Connect To DB
const db = process.env.DATABASE;
mongoose.connect
    (db,    { useNewUrlParser: true,  useUnifiedTopology: true})
    .then(()=>{console.log(`Database Started at: ${db}`)})

//Routers - MiddleWare
app.use('/api',userRoute)

//


app.get('/',(req,res)=>{
        res.send('Hello ...');
});
 
const port = process.env.PORT;

app.listen(port,()=>{
     console.log(`Server Started: http:/localhost:${port}/`)
})


