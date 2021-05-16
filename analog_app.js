setInterval(setClock, 1000); // calls a certain function every second

const hourHand = document.querySelector("[hour-hand]"); // querySelector retrieves an element from the DOM
const minuteHand = document.querySelector("[minute-hand]");
const secondHand = document.querySelector("[second-hand]");

function setClock() {
  const currentDate = new Date(); // calls Date constructor and gives current date and time
  const secondsRatio = currentDate.getSeconds() / 60; // divide by 60 to know how far to rotate since 60 seconds per full rotation
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60; // secondsRatio is percentage of a minute, and allows minute hand to move gradually
  const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
  setRotation(secondHand, secondsRatio);
  setRotation(minuteHand, minutesRatio);
  setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
  element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock(); //ensures that clock is always at current time when page is loaded
