const colors = ['red', 'blue', 'green', 'purple', 'orange', 'pink'];
let cards = shuffle(colors.concat(colors));//using concat to join/pair/concat the elements of colors array with the elements of colors array itself. Then Pass this new aray to the fhuffle function createed below.
let selectedCards = [];
let score = 0;
let timeLeft = 30;
let gameInterval;

const startBtn= document.getElementById('startBtn');
const gameContainer= document.getElementById('game-container');
const scoreElement= document.getElementById('score');
const timerElement= document.getElementById('timer');

function generateCards(){
    for (const color of cards){
        const card = document.createElement('div');
        card.classList.add('card');
        card.dataset.color=color;
        card.textContent="?";
        //here below we passed/cread a new div into the gamecontainer div. We did this for wach card i.e all cards are separate/individual divs placed inside the gamecontainer div. 
        gameContainer.appendChild(card);
    }
}

function shuffle(array)
{
    for(let i=array.length-1; i>0; i--)
    {
        const j= Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];
    }

    return array;
}

function handleCardClick(event){
    const card= event.target;
    //The above line retrieves the html div element (div of a card that is inside the game-container div) that triggered the event (in this case, a clicked card) and assigns it to the 'card' variable.

    if(!card.classList.contains('card')||card.classList.contains('matched'))
    {
        return;
    }

    card.textContent= card.dataset.color;
    card.style.backgroundColor=card.dataset.color;
    //below we are passing the whole card division element(html element) to the array named selectedCards.
    selectedCards.push(card);
    if(selectedCards.length===2)
    {
        setTimeout(checkMatch,500);
    }

    

}

function checkMatch(){
    const[card1,card2]=selectedCards;
    if(card1.dataset.color===card2.dataset.color){
        card1.classList.add('matched');
        card2.classList.add('matched');
        score+=5;
        scoreElement.textContent=`Score: ${score}`;
    }
    else{
        card1.textContent='?';
        card2.textContent='?';
        card1.style.backgroundColor='#ddd';
        card2.style.backgroundColor='#ddd';
    }

    selectedCards=[];
}

function startGame(){
    let timeLeft=30;
    startBtn.disabled=true;
    score=0;
    scoreElement.textContent=`Score; ${score}`;
    startGameTimer(timeLeft);
    cards=shuffle(colors.concat(colors));
    selectedCards=[];
    gameContainer.innerHTML="";
    generateCards();


    gameContainer.addEventListener('click',handleCardClick);

}

function startGameTimer(timeleft){
    timerElement.textContent=`Time Left: ${timeLeft}`;
    gameInterval= setInterval(()=>{
timeLeft--;
timerElement.textContent=`Time Left: ${timeLeft}`;
if(timeLeft===0){
    clearInterval(gameInterval);
    let timeLeft=30
    alert("oops! Game Over :( )");
    startBtn.disabled=false;

}},1000)
}

startBtn.addEventListener("click", startGame);