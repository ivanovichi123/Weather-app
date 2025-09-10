import "./style.css";
//Create an array for the objects that contain information about the weather
const weatherInformation = [];

//The elements that receive information for the form
const location = document.getElementById("location");
const form = document.querySelector("form");

//Th element that display an error message
const errorMsg = document.getElementById("errorMsg");

//Function that retrieves the weather info and save it in objects
async function getWeather(location) {
  try {
    //Get the information form the website
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=QRLGUYRSTH8FAFTW9432A6B9D&unitGroup=metric&include=days,alerts,current,events&elements=datetime,tempmax,tempmin,description,feelslike,precipprob`,
    );
    const theRealAnswer = await response.json();
    console.log(theRealAnswer);

    //Erase the previous information of the array of objects (weatherInformation) and the errorMsg
    weatherInformation.length = 0;
    errorMsg.textContent = "";

    //Create an object with the general info from the place
    let generalInfo = new Object({
      address: theRealAnswer.resolvedAddress,
      alerts: theRealAnswer.alerts,
      latitude: theRealAnswer.latitude,
      longitude: theRealAnswer.longitude,
    });

    //Save the info in the array
    weatherInformation.push(generalInfo);

    //"For" that gets the information in an object and push it to the "weatherInformation" array
    for (let i = 0; i <= 14; i++) {
      let daysInfo = new Object({
        day: theRealAnswer.days[i].datetime,
        description: theRealAnswer.days[i].description,
        precipitation: theRealAnswer.days[i].precipprob,
        maxTemp: theRealAnswer.days[i].tempmax,
        minTemp: theRealAnswer.days[i].tempmin,
      });
      weatherInformation.push(daysInfo);
    }
    console.log(weatherInformation);
  } catch (error) {
    //Catch when an error occur
    console.log("Oh no", error);
    errorMsg.textContent = "Oh no the location you submit does not exist :(";
  }
}

//Form that calls the getWeather function with the information of the user
form.addEventListener("submit", (event) => {
  event.preventDefault();
  getWeather(location.value);
});

getWeather("Santiago de Queretaro");
