var iconSet = document.querySelectorAll(".icons");
console.log("file connected")

function logLoaded(evt) {
    var targetSVG = evt.currentTarget.contentDocument;
    var theIcon = targetSVG.querySelector(".mainIcon");
    theIcon.addEventListener("click", logClicked, false);
}

function logClicked(evt) {
    console.log(evt.currentTarget.id);
}

for(var i=0; i<iconSet.length; i++) {
    iconSet[i].addEventListener("load", logLoaded, false);
}









// testing tutorial code
// var iconSet = document.querySelectorAll(".icons");
// var i;
// // console.log ("file connected")

// for(var i=0; i<iconSet.length; i++) {
// 	iconSet[i].addEventListener('click', click, false);
// }

// function click() {
// 	this.classList.add("click-effect");
// }

// // this was a test to see if i could make a click effect 
// // instead of a hover effect from this tutorial 

// // petercollingridge.co.uk/tutorials/svg/interactive/mouseover-effects/
