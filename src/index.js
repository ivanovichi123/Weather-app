import "./style.css";
//Create an array for the objects that contain information about the weather
const weatherInformation = [];

//Function that retrieves the weather info and save it in objects
async function getWeather() {
  //Get the information form the website
  const response = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/SantiagodeQueretaro?key=QRLGUYRSTH8FAFTW9432A6B9D&unitGroup=metric&include=days,alerts,current,events&elements=datetime,tempmax,tempmin,description,feelslike,precipprob`,
  );
  const theRealAnswer = await response.json();
  console.log(theRealAnswer);
  //Create an object with the general info from the place
  let generalInfo = new Object({
    address: theRealAnswer.resolvedAddress,
    alerts: theRealAnswer.alerts,
    latitude: theRealAnswer.latitude,
    longitude: theRealAnswer.longitude,
  });
  //Save the info in the array
  weatherInformation.push(generalInfo);

  for (let i = 0; i <= 0; i++) {
    let daysInfo = new Object({
      day: theRealAnswer.days[i].datetime,
      description: theRealAnswer.days[i].description,
      precipitation: theRealAnswer.days[i].precipprob,
      maxTemp: theRealAnswer.days[i].tempmax,
      minTemp: theRealAnswer.days[i].tempmin,
    });
    console.log(daysInfo);
  }
  console.log(weatherInformation);
}

getWeather();
