const launches = new Map();

var latestFlightNumber =100;

const launch = {
    flightNumber: 100,
    launchDate : new Date(),
    mission : 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    destination : 'Kepler-442 b',
    customer : ['NASA','ISRO'],
    upcoming : true,
    success : true,
}

launches.set(launch.flightNumber,launch);
console.log('size is ',launches.size);

function addNewLaunch(planet){
    latestFlightNumber++;
    launches.set(
        latestFlightNumber,
        Object.assign(planet,{
            flightNumber :latestFlightNumber,
            customer : ['NASA','ISRO'],
            upcoming:true,
            success :true
        })
    )
}

module.exports = {
    launches,
    addNewLaunch,
}