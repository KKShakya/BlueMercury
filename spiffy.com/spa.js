let key = "3b5c7fb5283a770776957bf904d0ae9d";

let container =document.getElementById("container")

let map =document.getElementById("gmap_canvas")

//get to openWeather documentation
//figure out the URL thet we can use to get data
let data;
async function cityDefault() {
  
  let city = document.getElementById("city").value;
  
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=delhi &appid=${key}&units=metric`
    );
    data = await res.json();
    console.log(data);
    appendData(data);
  } catch (err) {
    console.log(err);
  }
}
cityDefault();


async function getLocation() {
  
  let city = document.getElementById("city").value;
  
  try {
    let res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
    );
    data = await res.json();
    console.log(data);
    appendData(data);
  } catch (err) {
    console.log(err);
  }
}
getLocation();
function appendData(data) {
    container.innerHTML = null;

  let name = document.createElement("p");

  name.innerText = `name - ${data.name}`;

  let temp = document.createElement("p");
  temp.innerText = `Temp -${data.main.humidity}`;

  let humidity = document.createElement('p');
  humidity.innerText = `Humidity - ${data.main.humidity}`

  let pressure = document.createElement('p')
  pressure.innerText =`Pressure - ${data.main.pressure}`
  
  let cloud = document.createElement('p')
    cloud.innerText =`Cloud - ${data.clouds.all}`

  let min_temp = document.createElement('p');
  min_temp.innerText = `Minimum Temprature - ${data.main.temp_min}`

  // let max_temp = document.createElement('p');
  // max_temp.innerText = `Maximum Temprature - ${data.main.temp_max}`
  
  // let sunrise = document.createElement('p');
  // sunrise.innerText = `Sunrise Time - ${data.sys.sunrise}`

  // let sunset = document.createElement('p');
  // sunset.innerText = `Sunset Time - ${data.sys.sunset}`



  container.append(name,temp, humidity, pressure,cloud,min_temp)

  map.src = `https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`


}
