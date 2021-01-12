window.onload = () =>{
const start = document.querySelector("#start");
const playerImg1 = document.querySelector("#p1");
const playerImg2 = document.querySelector("#p2");
const counter1 = document.querySelector("#counter1");
const counter2 = document.querySelector("#counter2");

let counterplayer1 = 0;
let counterplayer2 = 0;
let img = ["./img/paper.png", "./img/rock.png", "./img/scissors.png"];

const startGame = () =>{
    let a = Math.floor(Math.random()*img.length);
    let b = Math.floor(Math.random()*img.length);
    playerImg1.setAttribute('src', img[a]);
    playerImg2.setAttribute('src', img[b]);
    check(a, b);
}
const check = (a ,b) => {   
    if(a === b){
        console.log("tie");
        tie();
    }else if(a === 0 && b === 1){
        counterplayer1++;
    }else if(a === 1 && b === 2){
        counterplayer1++;
    }else if(a === 2 && b === 0){
        counterplayer1++;
    }else{
        counterplayer2++;
    }
    checkCounter(counterplayer1, counterplayer2)
}
const checkCounter = (counterplayer1, counterplayer2) =>{
    counter1.innerHTML = counterplayer1;
    counter2.innerHTML = counterplayer2;
}
start.onclick = startGame;
}