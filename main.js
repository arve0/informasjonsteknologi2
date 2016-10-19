

// alert("wah");
// document.write("wahwah");
// var answer = prompt("Hva heter du?");

// true if answer is not null or empty string ("")
// if (answer) {
//    var nameDiv = document.getElementById("navn");
//    nameDiv.innerHTML = "Ditt navn er <b>" + answer + "</b>.";
//}

var goldenElm = document.getElementById("GoldenWah");

goldenElm.innerHTML = "I changed you...mohahaha.";


var catElm = document.getElementById("cat");


var marioElm = document.getElementById("mario");
var luigiElm = document.getElementById("luigi");

setTimeout(function () {
    catElm.src = "katt2.jpg";

    // sets the text equal in both divisions
    luigiElm.innerHTML = marioElm.innerHTML;
}, 2000);



var visitorCounter = 1001;
var visitorElement = document.getElementById("visitors");

setInterval(function () {
    visitorCounter += 11;
    visitorElement.innerText = visitorCounter + " visitors";
}, 100);
