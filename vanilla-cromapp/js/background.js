const images = ['1.jpg', '2.jpg', '3.jpg'];

const chosenImage =  Math.floor(Math.random() * images.length);

const bgImage = document.createElement('img');
bgImage.src = `img/${images[chosenImage]}`;

document.body.appendChild(bgImage);







