const request= require('supertest');
const app = require('../');


describe('Test GET /launches',()=>{
    test('It shoukd resond with 200 status',async ()=>{
        
        //we can also write like below by chaining the functions

       /* const response = await request(app).get('/api/v1/launches');
        expect(response.status).toBe(200);
        */

        const response = await request(app).get('/api/v1/launches').expect('Content-Type', /json/).expect(200);
    });
});

describe('Test POST /launches',()=>{
    const completeLaunchData = {
        mission : 'USS Enterprise',
        rocket : 'NCC 1701-D',
        target : 'Kepler-186 f',
        launchDate : 'January 6 , 2028'
    }
    const completeLaunchWithoutDate = {
        mission : 'USS Enterprise',
        rocket : 'NCC 1701-D',
        target : 'Kepler-186 f',
    }
    const launchDateWithInvalidDate = {
        mission : 'USS Enterprise',
        rocket : 'NCC 1701-D',
        target : 'Kepler-186 f',
        launchDate : 'hey dev!!'
    }
    test('It should respond with a 201 status',async ()=>{ 
        const response = await request(app).post('/api/v1/launches')
        .send({
            mission : 'USS Enterprise',
            rocket : 'NCC 1701-D',
            target : 'Kepler-186 f',
            launchDate : 'January 6 , 2028'
        })
        .expect('Content-Type',/json/)
        .expect(201);

        //Now apart from checking the response status we have to check the body being returned
        //whenever we have to check the body we use jest assertions
        const requestDate = new Date(completeLaunchData.launchDate).valueOf();
        const responseDate = new Date(response.body.launchDate).valueOf();

        //checking for date explicitly
        expect(requestDate).toBe(responseDate);

        //checking for request response other attributes
        expect(response.body).toMatchObject(completeLaunchWithoutDate);
                        
    })

    test('It should catch missing required properties',async ()=>{
        const response = await request(app).post('/api/v1/launches')
        .send(completeLaunchWithoutDate)
        .expect('Content-Type', /json/)
        .expect(400)

        //Now post validating the status we have to validate the body of the response
        expect(response.body).toStrictEqual({
            Message : 'Mission Requeest Attributes in Launch'
        })
    })

    test('It should test the Invalid Dates',async ()=>{
        const response = await request(app).post('/api/v1/launches')
        .send(launchDateWithInvalidDate)
        .expect('Content-Type',/json/)
        .expect(400)


        //Now post validation the status we will validate the body of the response
        expect(response.body).toStrictEqual({
            'Message' : 'Invalid Date Passed in Request'
        })
    })
})