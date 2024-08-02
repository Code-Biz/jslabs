const rightDiv=document.getElementById('rightDiv');
const srchBtn = document.getElementById('searchBtn');
const clrBtn = document.getElementById('clearBtn');


function search(){

    const input = document.getElementById('searchBar').value.toLowerCase();
    const cardsListDiv= document.getElementById('cardsListDiv');
    cardsListDiv.innerHTML="";

    if(input === "country" || input==="countries"){
        document.getElementById('cardsListDiv').style.display='block';
        fetchCountries();}

      else if(input === "beach" || input==="beaches"){
            document.getElementById('cardsListDiv').style.display='block';
            fetchBeaches();}
      else if (input === "temple" || input==="temples"){
        document.getElementById('cardsListDiv').style.display='block';
        fetchTemples();}

        else{
            input.setAttribute("required: true");
        }
     
      }
    function fetchCountries(){
        fetch('travel_recommendation_api.json').then(response=>response.json()).then(data=>{
            console.log("ok1!");
               data.countries.forEach(country => {
                  console.log("ok2!");
      
                  country.cities.forEach(city => {
                      console.log("ok3!");
      
                  cardsListDiv.innerHTML+=`<div class="srchCard">
                      <img id="srchImg" src="${city.imageUrl}">
                      <h3 id="srchHeading">${city.name}</h3>
                      <p id="srchDescription">${city.description}</p>
                      <button id="srchVisitBtn">Visit</button>
                  </div>`;
              });
                 })
              });
            }


    function fetchBeaches(){
        fetch('travel_recommendation_api.json').then(response=>response.json()).then(data=>{
            console.log("ok1!");
               data.beaches.forEach(beach => {
                  console.log("ok2!");      
                  cardsListDiv.innerHTML+=`<div class="srchCard">
                      <img id="srchImg" src="${beach.imageUrl}">
                      <h3 id="srchHeading">${beach.name}</h3>
                      <p id="srchDescription">${beach.description}</p>
                      <button id="srchVisitBtn">Visit</button>
                  </div>`;
              });
                 })
  }
            
    function fetchTemples(){
        fetch('travel_recommendation_api.json').then(response=>response.json()).then(data=>{
        console.log("ok1!");
           data.temples.forEach(temple => {
              console.log("ok2!");
    
              cardsListDiv.innerHTML+=`<div class="srchCard">
                  <img id="srchImg" src="${temple.imageUrl}">
                  <h3 id="srchHeading">${temple.name}</h3>
                  <p id="srchDescription">${temple.description}</p>
                  <button id="srchVisitBtn">Visit</button>
              </div>`;
          });
             })
          }
function clear(){
    document.getElementById('cardsListDiv').style.display='none';
}


srchBtn.addEventListener('click', search);
clrBtn.addEventListener('click',clear)
