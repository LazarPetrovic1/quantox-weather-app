// data var

const weatherData = {
  tempUnit: "C",
  windSpeedUnit: "m/s",
  days: [
    {
      day: "Monday",
      temp: 22,
      windDirection: "north-east",
      windDirectionImage: "sprite-north-east",
      windSpeed: 10,
      type: "sunny",
      path: "spritefc-sun"
    },
    {
      day: "Tuesday",
      temp: 14,
      windDirection: "north-west",
      windDirectionImage: "sprite-north-west",
      windSpeed: 14,
      type: "rainy",
      path: "spritefc-raining"
    },
    {
      day: "Wednesday",
      temp: 17,
      windDirection: "south-east",
      windDirectionImage: "sprite-south-east",
      windSpeed: 20,
      type: "cloudy",
      path: "spritefc-cloud"
    },
    {
      day: "Thursday",
      temp: 7,
      windDirection: "south-west",
      windDirectionImage: "sprite-south-west",
      windSpeed: 11,
      type: "foggy",
      path: "spritefc-mist"
    },
    {
      day: "Friday",
      temp: 28,
      windDirection: "north-west",
      windDirectionImage: "sprite-north-west",
      windSpeed: 5,
      type: "sunny",
      path: "spritefc-sun"
    },
    {
      day: "Saturday",
      temp: 12,
      windDirection: "south-east",
      windDirectionImage: "sprite-south-east",
      windSpeed: 18,
      type: "windy",
      path: "spritefc-windy"
    },
    {
      day: "Sunday",
      temp: -3,
      windDirection: "south-west",
      windDirectionImage: "sprite-south-west",
      windSpeed: 9,
      type: "snowy",
      path: "spritefc-snowy"
    }
  ]
};

// array extraction

let days = [],
  temp = [],
  windDirection = [],
  windDirectionImage = [],
  windSpeed = [],
  type = [],
  path = [];

weatherData.days.forEach(el => {
  days.push(el.day);
  temp.push(el.temp);
  windDirection.push(el.windDirection);
  windDirectionImage.push(el.windDirectionImage);
  windSpeed.push(el.windSpeed);
  type.push(el.type);
  path.push(el.path);
});

// work - log;
// console.log(days);
// console.log(temp);
// console.log(windDirection);
// console.log(windDirectionImage);
// console.log(windSpeed);
// console.log(type);
// console.log(path);

let dayName = document.getElementsByClassName("day-name");
let dayType = document.getElementsByClassName("day-type");
let img = document.getElementsByClassName("spritefc");
let tempPar = document.getElementsByClassName("temperature");
let speed = document.getElementsByClassName("wind-speed");
let direction = document.getElementsByClassName("direction");
let arrow = document.getElementsByClassName("sprite");
let seeDay = document.getElementsByClassName("view-button");

function passValues() {
  for (let i = 0; i < dayName.length; i++) {
    dayName[i].innerHTML = `View ${days[i]}`;
  }

  for (let i = 0; i < dayType.length; i++) {
    dayType[i].innerHTML = `It will be ${type[i]}.`;
  }

  for (let i = 0; i < img.length; i++) {
    img[i].classList.add(path[i]);
  }

  for (let i = 0; i < tempPar.length; i++) {
    tempPar[i].innerHTML = `Temperature: ${temp[i]} &deg;C`;
  }

  for (let i = 0; i < speed.length; i++) {
    speed[i].innerHTML = `Wind speed: ${windSpeed[i]} m/s`;
  }

  for (let i = 0; i < direction.length; i++) {
    direction[i].innerHTML = `Blowing towards ${windDirection[i]}`;
  }

  for (let i = 0; i < arrow.length; i++) {
    arrow[i].classList.add(windDirectionImage[i]);
  }

  for (let i = 0; i < seeDay.length; i++) {
    seeDay[i].innerHTML = `View ${days[i]}`;
  }
}

passValues();

function kelv() {
  for (let i = 0; i < temp.length; i++) {
    tempPar[i].innerHTML = `Temperature: ${temp[i] + 273} K`;
  }
}

function celsius() {
  for (let i = 0; i < temp.length; i++) {
    tempPar[i].innerHTML = `Temperature: ${temp[i]} &deg;C`;
  }
}

function fahr() {
  for (let i = 0; i < temp.length; i++) {
    tempPar[i].innerHTML = `Temperature: ${(temp[i] * 9) / 5 + 32} &deg;F`;
  }
}

function km() {
  for (let i = 0; i < windSpeed.length; i++) {
    speed[i].innerHTML = `Wind speed: ${Math.round(windSpeed[i] * 3.6 * 100) /
      100} km/h`;
  }
}

function knots() {
  for (let i = 0; i < windSpeed.length; i++) {
    speed[i].innerHTML = `Wind speed: ${Math.round(
      (windSpeed[i] / 0.51444444444) * 100
    ) / 100} kn`;
  }
}

function ms() {
  for (let i = 0; i < windSpeed.length; i++) {
    speed[i].innerHTML = `Wind speed: ${windSpeed[i]} m/s`;
  }
}


// EVENT LISTENERS

let dayDisplay = document.getElementsByClassName("day-display");

function enlarge(elem) {
  for (let i = 0; i < dayDisplay.length; i++) {
    dayDisplay[i].style.display = "none";
  }
  elem.style.display = "block";
  elem.classList.add("big-day");
  elem.childNodes[1].style.display = "block"; // close
}

function minimize(elem) {
  elem.style.display = "none";
  for (let i = 0; i < dayDisplay.length; i++) {
    dayDisplay[i].style.display = "block";
  }
  elem.childNodes[1].style.display = "none";
  elem.classList.remove("big-day");
}
