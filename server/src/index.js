const express = require('express');
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


async function startServer(){
    await loadPlanetsData();
    app.listen(ServerConfig.PORT,(req,res)=>{
        console.log(`Backend App is running on ${ServerConfig.PORT}`);
        console.log('request object is ',req);
    });
}

startServer();
