const myButton = document.getElementById("myButton");
const textContainer = document.getElementById("textContainer");
const myCarousel = document.getElementById("carousel");

myButton.addEventListener("click", function() {
    textContainer.classList.add("invisible");
    myCarousel.classList.remove("invisible");
    console.log("kuhyhvb");
});