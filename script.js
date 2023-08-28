function finding(){
    window.open("foodsearch.html");
}
function offers(){
    window.open("offers.html");
}
function sign(){
    window.open("sign.html");
}
function cart(){
    window.open("cart.html");
}
function zaikan(){
    window.close("h.html");
    window.open("h.html");
}
function no(){
    window.close("sign.html");
}
function cartshop(){
    window.close("cart.html");
}
function rest(){
    window.open("resto.html");
}

const slides = document.querySelectorAll(".slide")
var counter=0;
slides.forEach(
    (slides, index) => {
        slides.style.left = `${index * 100}%`
    }
)

const goPrev = () => {
    if(counter==0){
        counter=siles.length - 1
        slideImage()
    }else{
        counter--
        slideImage()
    }
}

const goNext = () => {
    if(counter==slides.length - 1){
        counter=0
        slideImage()
    }else{
        counter++
        slideImage()
    }
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateX(-${counter *100}%)`
        }
    )
}