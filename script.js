var randomNumber1= Math.random();
var randomNumber2= Math.random();
var m = Math.ceil(randomNumber1 * 6);
var n= Math.ceil(randomNumber2 * 6);


var image1 = "images/dice" + m + ".png";

document.querySelectorAll('img')[0].setAttribute("src", image1);

var image2 = "images/dice" + n  + ".png";

document.querySelectorAll('img')[1].setAttribute("src", image2);

if(m>n){
    document.querySelector('h1').textContent = "Player 1 Wins"
}
else if(n>m){
    document.querySelector('h1').textContent = "Player 2 Wins"
}
else{
    document.querySelector('h1').textContent = "Draw!!"
}