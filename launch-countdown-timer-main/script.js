let secondsDisplay = document.querySelector('.secondsDisplay');
let minutesDisplay = document.querySelector('.minutesDisplay');
let hoursDisplay = document.querySelector('.hoursDisplay');
let daysDisplay = document.querySelector('.daysDisplay');
let seconds = parseInt(secondsDisplay.textContent);
let minutes = parseInt(minutesDisplay.textContent);
let hours = parseInt(hoursDisplay.textContent);
let days = parseInt(daysDisplay.textContent);
setInterval(() => {
  secondsDisplay.textContent = seconds;
  seconds -= 1;
  if (seconds < 0) {
     seconds = 59;
     minutes -= 1;
     minutesDisplay.textContent = minutes;
     if (minutes < 1) {
        minutes = 59;
        minutesDisplay.textContent = minutes;
        hours -= 1;
        hoursDisplay.textContent = hours;
        if (hours < 1) {
          hours = 24;
          hoursDisplay.textContent = hours;
          days -= 1;
          daysDisplay.textContent = days;
          if (days < 0) {
            days = 365;
            daysDisplay.textContent = days;
          }
        }
     }
  }
},1000)
