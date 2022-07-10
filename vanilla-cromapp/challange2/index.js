

function winResize(event) {
    console.log(window.innerWidth);
    if(window.innerWidth > 500) {
        document.body.style.backgroundColor = 'yellow';
    } else if(window.innerWidth < 500 && window.innerWidth > 300) {
        document.body.style.backgroundColor = 'violet';
    } else{
        document.body.style.backgroundColor = 'skyblue';
    }
}
window.addEventListener('resize', winResize);