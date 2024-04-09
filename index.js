
//-------------- first dice ---------------------------
var randomNumber1 = Math.floor(Math.random()*6) + 1;

var rndmImage = "dice" + randomNumber1 + ".png";
var rndmImageSource = "images/" + rndmImage;

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", rndmImageSource);

//-------------- second dice ---------------------------
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var rndmImage2 = "dice" + randomNumber2 + ".png";
var rndmImageSource2 = "images/" + rndmImage2;

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", rndmImageSource2);

//--------------- player 1 won -------------------------
if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!"
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!"

}else{
    document.querySelector("h1").innerHTML = "Draw!"
}

