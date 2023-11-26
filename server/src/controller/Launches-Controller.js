const { launches, addNewLaunch, launchExists, abortLaunchbyId } = require('../models/launches-Model');

function getAllLaunches(request,response){
    console.log('launches are',launches);
    //console.log('get all launches',Array.from(launches.values()));
    return response.status(200).json(Array.from(launches.values()));
}

function httpaddNewLaunch(request,response){
    const launch = request.body;
    launch.launchDate = new Date(launch.launchDate);

    addNewLaunch(launch);
    console.log('launch is',launch);
    return response.status(201).json(launch);

}

function deleteLaunch(request,response){
    const launchId = +request.params.id;
    console.log('launch Id is',typeof(launchId));
    //checking if launch doesnot exists with that Id
    if(!launchExists(launchId)){
        return response.status(404).json({
            'message' : 'Launch Not Found'
        })
    }

    //If launch does exist then abort the mission
    const abortedLaunch = abortLaunchbyId(launchId);
    return response.json(200).json(abortedLaunch);

}

module.exports = {
    getAllLaunches,
    httpaddNewLaunch,
    deleteLaunch,
}