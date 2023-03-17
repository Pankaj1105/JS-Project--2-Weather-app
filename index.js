
// function bano get data karke it will not work until its call
function getData() {

//this is code for when we write in input that should come here
const city = search.value;

const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "2d9434eda5msh82e1519b2ac7185p173398jsn0fb88c794273",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };
  
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,
    options
  )
    .then((response) => response.json())

    // .then(response => console.log(response))
    .then(res => {
        console.log(res);

        temp.innerHTML = res.temp; //temp will chnage
        ws.innerHTML = res.wind_speed; 
        hmdty.innerHTML = res.humidity;
        // sending the data to html for displaying
    })



    .catch((err) => console.error(err));
  
    
}