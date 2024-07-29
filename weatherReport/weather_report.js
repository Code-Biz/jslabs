function showweatherDetails(event){
    event.preventDefault();
const city= document.getElementById('city').value;
const apiKey='1475e2c61d182e3ebcef7429dde0c573';
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
//Data and Response can be used instead of data and response, no issue of small letters here but better is to use small letters
fetch(apiUrl).then(Response=>Response.json()).then(Data=>{
    const weatherInfo= document.getElementById("weatherInfo");
    weatherInfo.innerHTML=`<h1> Weather in ${Data.name} : </h1>
                            <p> Temperature : ${Data.main.temp} &#8451</p>
                            <p> Weather Status: ${Data.weather[0].description}</p>`;
}).catch(error=>{
    console.error('Error fetching weather:', error);
          const weatherInfo = document.getElementById('weatherInfo');
          weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
});
}

//document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );
 document.getElementById('btn').addEventListener("click",showweatherDetails );