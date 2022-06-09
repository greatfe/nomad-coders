
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const text = [
    'The mouse is hear!',
    'The mouse is gone!',
    'You just resize!',
    'That was a right click!'
];

const h2Text = document.querySelector('h2');
function render(type) {
    h2Text.innerText = text[type];
    h2Text.style.color = colors[type];

    console.log(type);
}

const superEventHandler = {
    mouseEnter()    {render(0)},
    mouseLeave()    {render(1)},
    browserResize() {render(2)},
    rightClick()    {render(3)},
};

h2Text.addEventListener('mouseenter',   superEventHandler.mouseEnter);
h2Text.addEventListener('mouseleave',   superEventHandler.mouseLeave);
window.addEventListener('resize',       superEventHandler.browserResize);
window.addEventListener('contextmenu',  superEventHandler.rightClick);



