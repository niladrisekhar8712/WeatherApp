let currentCondition = document.getElementsByClassName("condition")[0].textContent;
let backgroundImageURL = "css/images/Rainy-desktop.jpg";
backgroundImageURL = "css/images/" + currentCondition + "-desktop.jpg";
if (currentCondition == "Cloudy" || currentCondition == "Partly cloudy") {
    backgroundImageURL = "css/images/Cloudy-desktop.jpg";
}
console.log(backgroundImageURL);
document.body.style.backgroundImage = "url(" + backgroundImageURL + ")";
let uv = parseInt(document.getElementById("uv").textContent);
if (uv <= 2) {
    document.getElementById("footer").innerHTML = "LOW";
}
else if (uv <= 5) {
    document.getElementById("footer").innerHTML = "MODERATE";
}
else if (uv <= 7) {
    document.getElementById("footer").innerHTML = "HIGH";
}
else {
    document.getElementById("footer").innerHTML = "VERY HIGH";
}
function myFunction(x) {

    // console.log(backgroundImageURL);
    if (x.matches) {
        backgroundImageURL = "css/images/" + currentCondition + "-mobile.jpg";
        if (currentCondition == "Cloudy" || currentCondition == "Partly cloudy") {
            backgroundImageURL = "css/images/Cloudy-mobile.jpg";
        }
        document.body.style.backgroundImage = "url(" + backgroundImageURL + ")";
    }
    else {
        backgroundImageURL = "css/images/" + currentCondition + "-desktop.jpg";
        if (currentCondition == "Cloudy" || currentCondition == "Partly cloudy") {
            backgroundImageURL = "css/images/Cloudy-desktop.jpg";
        }
        document.body.style.backgroundImage = "url(" + backgroundImageURL + ")";
    }
}
var x = window.matchMedia("(max-width: 927px)")
myFunction(x);
x.addEventListener("change", function () {
    myFunction(x);
});