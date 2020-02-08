const body = document.querySelector("body");
const IMG_NUMBER = 3;

function paintImage(img_number){
    const image = new Image();
    image.src = `/photos/${img_number}.jpg`
    image.classList.add("bgImage")
    body.prepend(image);
}
function getRandomNumber(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number+1;
}
function photosave(){
     
}
function init(){
    img_number = getRandomNumber();
    paintImage(img_number);
}
init();