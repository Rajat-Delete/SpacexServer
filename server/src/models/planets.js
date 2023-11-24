const { parse } = require('csv-parse');
const fs = require('fs');


const habitablePlanets = [];

function ishabitable(planet){
    return planet['koi_prad'] < 1.6 && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
}

fs.createReadStream('../data/kepler_data.csv')
    .pipe(parse({
        comment: '#',
        columns : true,
    }))
    .on('data', (data)=>{
        if(ishabitable(data)){
            habitablePlanets.push(data);
        }
    })
    .on('error' , (error)=>{
        console.log('Error Recieved in Reading Stream',error);
    })
    .on('end',()=>{
        console.log(habitablePlanets.map((planet)=>{
            return planet['kepler_name'];
        }))
    })

module.exports = {
    habitablePlanets,
}