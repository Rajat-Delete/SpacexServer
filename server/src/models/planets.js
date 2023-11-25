const path = require('path');
const fs = require('fs');
const { parse } = require('csv-parse');

const habitablePlanets = [];

function ishabitable(planet){
    return planet['koi_prad'] < 1.6 && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11 && planet['koi_disposition'] === 'CONFIRMED';
}

//binding the below code in a promise based syntax so that planets data will be available on startup of application

function loadPlanetsData(){
    return new Promise ((resolve,reject)=>{
    fs.createReadStream(path.join(__dirname,'..','data','keplerData.csv'))
    .pipe(parse({
        comment: '#',
        columns : true,
    }))
    .on('data', (data)=>{
        if(ishabitable(data)){
            //console.log(`${data} in search is this data`)
            habitablePlanets.push(data);
        }
    })
    .on('error' , (error)=>{
        console.log('Error Recieved in Reading Stream',error);
        reject();
    })
    .on('end',()=>{
        console.log(`${habitablePlanets.length} found in our search`);
        console.log(habitablePlanets.map((data)=>{
            return data['kepler_name'];
        }));
        resolve();

    })
    })
}



module.exports = {
    planets : habitablePlanets,
    loadPlanetsData,
}