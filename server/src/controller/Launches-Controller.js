const { launches, addNewLaunch } = require('../models/launches-Model');

function getAllLaunches(request,response){
    console.log('launches are',launches);
    //console.log('get all launches',Array.from(launches.values()));
    return response.status(200).json(Array.from(launches.values()));
}

function httpaddNewLaunch(request,response){
    const launch = request.body;
    console.log('launch is',launch);
    launch.launchDate = new Date(launch.launchDate);

    addNewLaunch(launch);
    return response.status(201).json(launch);

}

module.exports = {
    getAllLaunches,
    httpaddNewLaunch,
}