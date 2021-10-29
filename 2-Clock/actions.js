const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    let now = new Date();

    let seconds = now.getSeconds();
    let secondsDegrees = ((seconds/60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    
    let minute = now.getMinutes();
    let minuteDegrees = ((minute/60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    let hour = now.getHours();
    let hourDegrees = ((hour/12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;

    console.log(hour)
  }

  setInterval(setDate, 1000);
  setDate();

  