

function winResize(event) {
    console.log(event);
    if(window.innerWidth > 500) {
        document.style.backgroundcolor = 'yellow;'
    } else if(window.innerWidth < 500 && window.innerWidth > 300) {
        document.style.backgroundcolor = 'blue;'
    } else{

    }
}
window.addEventListener('resize', winResize);