//Module that changes the html with the information of the API
function pageLoad(weatherInfo) {
    //Get the div that will have all the information
    const divFather = document.getElementById("weatherToday");

    //Get the information from the object
    const address = weatherInfo[0].address;
    const latitude = weatherInfo[0].latitude;
    const longitude = weatherInfo[0].longitude;
    const alerts = weatherInfo[0].alerts;
    const day = weatherInfo[1].day;
    const description = weatherInfo[1].description; 
    const maxTemp = weatherInfo[1].maxTemp;
    const minTemp = weatherInfo[1].minTemp;
    const precipitation = weatherInfo[1].precipitation;

    //The divs that will keep the information
    const basicInfo = document.createElement("div")
    const specificInfoOne = document.createElement("div");
    const specificInfoTwo = document.createElement("div");
    const specificInfoThree = document.createElement("div");

    //Give id to the divs
    basicInfo.setAttribute("id", "basicInfo");
    specificInfoOne.setAttribute("id", "maxTemp");
    specificInfoTwo.setAttribute("id", "minTemp");
    specificInfoThree.setAttribute("id", "precipitation");

    //Put information on the basicInfo div
    let tempBr = document.createElement("br");
    let addressTitle = document.createElement("h2");
    addressTitle.textContent = address;
    let latitudeLongitude = document.createElement("p");
    latitudeLongitude.textContent = `Latitude: ${latitude}    Longitude: ${longitude}`;
    let alertInfo = document.createElement("p");
    if (alerts.length === 0) {
        alertInfo.textContent = `Alerts: No alerts :)`;
    } else {
        alertInfo.textContent = `Alerts: ${alerts}`;
    }
    let dayInfo = document.createElement("p");
    dayInfo.textContent = `Day: ${day}`;
    let descriptionInfo = document.createElement("p");
    descriptionInfo.textContent = `Description: ${description}`;
    basicInfo.append(addressTitle, latitudeLongitude, alertInfo, dayInfo, descriptionInfo);

    //Put information on the specificInfoOne div
    let specificInfoOneTitle = document.createElement("h1");
    let specificInfoOneText = document.createElement("p");
    let specificInfoOneImage = document.createElement("img");
    specificInfoOneTitle.textContent = "Max temp:";
    specificInfoOneText.textContent = `${maxTemp} °C`;
    specificInfoOne.append(specificInfoOneTitle, specificInfoOneText, specificInfoOneImage);

    //Put information on the specificInfoTwo div
    let specificInfoTwoTitle = document.createElement("h1");
    let specificInfoTwoText = document.createElement("p");
    let specificInfoTwoImage = document.createElement("img");
    specificInfoTwoTitle.textContent = "Min temp:";
    specificInfoTwoText.textContent = `${minTemp} °C`;
    specificInfoTwo.append(specificInfoTwoTitle, specificInfoTwoText, specificInfoTwoImage);

    //Put information on the specificInfoThree div
    let specificInfoThreeTitle = document.createElement("h1");
    let specificInfoThreeText = document.createElement("p");
    let specificInfoThreeImage = document.createElement("img");
    specificInfoThreeTitle.textContent = "Precipitation:";
    specificInfoThreeText.textContent = `${maxTemp} %`;
    specificInfoThree.append(specificInfoThreeTitle, specificInfoThreeText, specificInfoThreeImage);

    //Append the information to the div
    divFather.append(basicInfo, specificInfoOne, specificInfoTwo, specificInfoThree);

    //Now to create the elements for the future weather


    console.log(weatherInfo);
    console.log(address);
    console.log(latitude, longitude);
    console.log(alerts);
    console.log(day);
    console.log(description);
    console.log(maxTemp);
    console.log(minTemp);
    console.log(precipitation);
}

export { pageLoad };
