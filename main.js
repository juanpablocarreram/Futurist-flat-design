
let introBackground = document.querySelector(".introBackground");
let introSpans = document.querySelector(".introTitle");
let firstSpan = document.querySelectorAll(".firstSpanLetter");
let secondSpan = document.querySelectorAll(".secondSpanLetter");
/* Move Background with  */
function moveBackground(){
    let scrollY = window.scrollY;
    introBackground.style.backgroundPositionY= 100 + scrollY * .6 + "px";
    secondSpan[1].style.transform = "translate(" + scrollY*.8 + "px,"+ scrollY*.8 + "px" ;
    secondSpan[0].style.transform = "translate(" + -scrollY*.8  + "px," + scrollY*.8 + "px";
    firstSpan[1].style.transform = "translate(" + scrollY*.3 + "px," + scrollY*.8 + "px";
    firstSpan[0].style.transform = "translate(" + -scrollY*.3 + "px," + scrollY*.8 + "px";
}

document.addEventListener("scroll",moveBackground);