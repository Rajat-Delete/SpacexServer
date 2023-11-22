const express = require('express');
const {ServerConfig} = require('./config');
const app = express();
const apiroutes = require('./routes')

app.use('/api',apiroutes);


app.listen(ServerConfig.PORT,(req,res)=>{
    console.log(`Backend App is running on ${ServerConfig.PORT}`);
    console.log('request object is ',req);
    //console.log('Server config is ',ServerConfig);
});