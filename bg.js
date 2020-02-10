const body = document.querySelector("body");
const IMG_NUMBER = 1;
function PaintIMG(){
    
    const image = new Image();
    image.src = `/photos/${IMG_NUMBER+1}.gif`
    image.classList.add("bgImage")
    body.prepend(image);
}
function init(){
    PaintIMG();
}
init();
