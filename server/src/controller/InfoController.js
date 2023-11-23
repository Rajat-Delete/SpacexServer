/*
This is a basic testing controller which we have setup.
This file is only for testing purpose

*/

const  { StatusCodes } = require('http-status-codes');

const info = (request, response) =>{
    console.log('call came till here');
    return response.status(StatusCodes.OK).json({
        'Success' : true,
        'Message' : 'The API is now Live',
        'data'    : {},
        'error'   : {}
    });

}

module.exports = {
    info
}