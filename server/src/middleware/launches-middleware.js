

function validateRequest(request,response,next){
    if(!request.body.mission || !request.body.rocketType || !request.body.launchDate || !request.body.destination){
        return response.status(400).json({
            'Message' : 'Mission Requeest Attributes in Launch'
        })
    }

    //checking if Date is valid or not
    //console.log('date is ',isNaN(new Date(request.body.launchDate)));
    if(isNaN(new Date(request.body.launchDate))){
        return response.status(400).json({
            'Message' : 'Invalid Date Passed in Request'
        });
    }
    next();
}

module.exports = {
    validateRequest,
}