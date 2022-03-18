const slider = document.querySelector("#slider");
var sliderSection = document.querySelectorAll(".slider__section");
var sliderSectionLast =  sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next() {
    var sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%"
    }, 500);
}

function Prev() {
    var sliderSection = document.querySelectorAll(".slider__section");
    var sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%"
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
});
btnLeft.addEventListener('click', function(){
    Prev();
});
setInterval(function(){
    Next();
}, 5000);
