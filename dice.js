// first dice image change
var random1 = Math.floor(Math.random() * 6) + 1;
var dice1 = "images/dice" + random1 + ".png";
var image1 = document.getElementsByClassName("img1")[0];
image1.setAttribute("src", dice1);
 

// second dice image change


var random2 = Math.floor(Math.random() * 6) + 1;
var dice2 = "images/dice" + random2 + ".png";
var image2 = document.getElementsByClassName("img2")[0];
image2.setAttribute("src", dice2);


// declearing result


if (random1 > random2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS !!";
}
else if(random1<random2){
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS !!";
}
else{
    document.querySelector("h1").innerHTML = "DROW";
}
