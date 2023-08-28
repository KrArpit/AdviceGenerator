const dice = document.querySelector("#dice");
const adviceId = document.getElementById("adviceNumber");
const adviceText = document.getElementById("advice");

window.onload = showAdvice();

// Add event listener in dice button
dice.addEventListener("click",function(){
    showAdvice();
});

// function to show random advice fetched using api
function showAdvice(){
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then((data)=> data.slip)
    .then((data)=> {
        adviceId.innerHTML = data.id;
        adviceText.innerHTML = data.advice;
    })
    .catch((error) => {
        alert(`Error ${error}`);
    });
}