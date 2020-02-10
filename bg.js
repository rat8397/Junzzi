const body = document.querySelector("body");
const IMG_NUMBER = 1;
function PaintIMG(){
    
    const image = new Image();
    image.src = `Junzzi/2.gif`
    image.classList.add("bgImage")
    body.prepend(image);
}
function init(){
    PaintIMG();
}
init();
