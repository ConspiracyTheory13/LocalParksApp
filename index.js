
// Your team is working on an app that will help folks plan a vacation. You've been assigned to work on one feature for the app - to display a list of national parks in an area.
// Review The National Parks Services API documentation and create an API key.
// Review the API Guide on Authentication for ways to pass your API key as part of the request.
// Review the /parks endpoint and data model to understand how it works.
// Create a new app and push it to GitHub.
// When you're done, submit the link to your GitHub repo at the bottom of the page.
// Requirements:

// The user must be able to search for parks in one or more states.
// The user must be able to set the max number of results, with a default of 10.
// The search must trigger a call to NPS's API.
// The parks in the given state must be displayed on the page. Include at least:
// Full name
// Description
// Website URL

// The user must be able to make multiple searches and see only the results for the current search.
// As a stretch goal, try adding the park's address to the results.

// 'https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=aQEBWaaigBxcc3bJE4l3aLTkWtRiBeJ4ifmuNb7z'
// https://developer.nps.gov/api/v1/parks?stateCode=WY&stateCode=CA&api_key=aQEBWaaigBxcc3bJE4l3aLTkWtRiBeJ4ifmuNb7z

// app is skipping loop
// the selected state isn't being taken
const parkKey ='api_key=aQEBWaaigBxcc3bJE4l3aLTkWtRiBeJ4ifmuNb7z';
// const parkKey ='&api_key=mMGQuLejSsOa2LgLuvYchvLTmOJ8HthDDuQU9xfj';

$(".parkLookupForm").submit(function(event){
    event.preventDefault();  
    let limitSet ='limit='+$(".numberOfResults").val();
    let url= 'https://developer.nps.gov/api/v1/parks?'+limitSet;
    let states="stateCode="
    let userInput = $("input:checked");
    empty();
    for(let i=0; i < userInput.length; i++) {
    let newUrl = url+states+(userInput[i].defaultValue) + '&'+ limitSet + '&' + parkKey;
    console.log(newUrl)

    //developer.nps.gov/api/v1/campgrounds?stateCode=CA&stateCode=OR&limit=10&api_key=aQEBWaaigBxcc3bJE4l3aLTkWtRiBeJ4ifmuNb7z"// https://developer.nps.gov/api/v1/parks?limit=10stateCode=AL&limit=10NaN
        // // ('https://developer.nps.gov/api/v1/parks?'+limitSet+states+parkKey);

    fetch(newUrl)
    .then(response => response.json())
    .then(responseJson => printParkResults(responseJson));
    // console.log('https://developer.nps.gov/api/v1/parks?'+limitSet+states+parkKey);
    // console.log(url);
    // // console.log(userInput);
    } 
});

//description, url, fullName,

function printParkResults(parkObject) {
  console.log(parkObject);
  let data = parkObject.data;
    for(let i=0; i < data.length; i++) {
      // console.log("displayParkResults loop")
      $('.stateContainer').append(`<li>${data[i].fullName} + ${data[i].description} + ${data[i].url} </li>`);
    };
    }
    
    const showData = () => {
      displayUserRepo(userInput.value).then((result) => {
      console.log("showDataFiring")
      }
    )};
     
    function empty(){
        $(".stateContainer").empty();
      };
    
