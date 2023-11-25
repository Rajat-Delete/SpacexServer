const express = require('express');
const path = require('path');
const {ServerConfig} = require('./config');
const app = express();
const cors = require('cors');
app.use(express.json());

const { loadPlanetsData } = require('./models/planets')

app.use(cors({
    origin : 'http://localhost:3000',
}))
const apiroutes = require('./routes')

app.use('/api',apiroutes);

//server the react data inside public from server end
app.use(express.static(path.join(__dirname,"..","public")));


//serving the Index.html from '/'
app.use('/',(request,response)=>{
    console.log('Loading main page');
    response.sendFile(path.join(__dirname,'..','public','index.html'));
})

async function startServer(){
    await loadPlanetsData();
    app.listen(ServerConfig.PORT,(req,res)=>{
        console.log(`Backend App is running on ${ServerConfig.PORT}`);
        console.log('request object is ',req);
    });
}

startServer();
