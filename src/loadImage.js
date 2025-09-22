import theHigh from "./Images/High.svg";
import theMid from "./Images/Mid.svg";
import theLow from "./Images/Low.svg";
import thePrepHigh from "./Images/PrecipitationHigh.svg";
import thePrepLow from "./Images/PrecipitationLow.svg";

export function imageSource(text, celsius, prob) {
  if (text === "degree") {
    if (celsius <= 15) {
      return theLow;
    } else if (celsius >= 25) {
      return theHigh;
    } else {
      return theMid;
    }
  } else if (prob >= 50) {
    return thePrepHigh;
  } else {
    return thePrepLow;
  }
}
