const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}

function calculatePercent(){
    try {
        display.value = eval(display.value) / 100;
    } catch (error) {
        display.value = "Error";
    }
}

function playMusic(){
    const audio = document.getElementById('background-music');
    audio.play().catch(error => {
        console.log("Autoplay failed:", error);
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('background-music');
    audio.play().catch(error => {
        console.log("Autoplay failed:", error);
    });
});
