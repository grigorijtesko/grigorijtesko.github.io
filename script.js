const dino = document.getElementById('dino');
const cactus = document.getElementById('cactus');


document.addEventListener("click",function(event) {
    jump();
});

function jump () {
    if(dino.classList != "jump"){
        dino.classList.add("jump")
    }
    setTimeout(function(){
dino.classList.remove("jump")
    },500);
}

var isAlive = setInterval (function() {
    var dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    var cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if(cactusLeft < 50 && cactusLeft > 0 && dinoTop >=140) {
        alert("Game Over")
    }
}, 10)

var cactusSkin = setInterval(function() {
    var cactuses = ["cactus1", "cactus2"];
    document.getElementById("cactus").classList.remove("cactus1");
    document.getElementById("cactus").classList.remove("cactus2");
    document.getElementById("cactus").classList.add(cactuses[Math.floor((Math.random() * 2))]);
}, 3000)

 var score = 0;
 var scoreUpdate = setInterval(function(){
    score = score + 1;
    document.getElementById("score").innerHTML=score;
 }, 1000);