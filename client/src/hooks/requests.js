var backend_Url = 'http://localhost:8000/api/v1';

async function httpGetPlanets() {
  // TODO: Once API is ready.
  // Load planets and return as JSON.
  const response = await fetch(`${backend_Url}/planets`);
  console.log('response',response);
  return await response.json();

}

async function httpGetLaunches() {
  // TODO: Once API is ready.
  // Load launches, sort by flight number, and return as JSON.
  const response = await fetch(`${backend_Url}/launches`);
  const fetchedResponse = await response.json();
  return fetchedResponse.sort((a,b)=>{
    return a.flightNumber - b.flightNumber;
  })
}

async function httpSubmitLaunch(launch) {
  // TODO: Once API is ready.
  // Submit given launch data to launch system.
  try{
    console.log('httpSubmitLaunch');
    return await fetch(`${backend_Url}/launches`,{
      method : 'post',
      headers : {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(launch),
    });
  }catch(error){
    console.log('error is',error);
    return {
      ok : false,
    }
  }
}

async function httpAbortLaunch(id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};