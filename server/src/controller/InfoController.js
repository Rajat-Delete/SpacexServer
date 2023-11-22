//const { request, response } = require("express");

const info = (request, response) =>{
    console.log('call came till here');
    response.json({
        'Success' : true,
        'Message' : 'The API is now Live',
        'data'    : {},
        'error'   : {}
    });

}

module.exports = {
    info
}