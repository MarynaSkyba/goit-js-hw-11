const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');


startBtn.addEventListener('click', clickOnStart);
stopBtn.addEventListener('click', clickOnStop);


let isActive = false;
function clickOnStart(){
    if(isActive){
        return;
    }
    isActive = true;
    intervalId = setInterval(changeBodyBgcolor,1000,1000);
};

function changeBodyBgcolor () {
   console.log(document.body.style.background = `#${Math.floor(Math.random() * 16777215).toString(16)}`);
}

function clickOnStop () {
    clearInterval(intervalId);
    isActive = false;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
//   console.log(getRandomHexColor)