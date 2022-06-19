const images = ['1.jpg', '2.jpg', '3.jpg'];

const chosenImage =  Math.floor(Math.random() * images.length);

document.body.style.backgroundImage = `url(img/${images[chosenImage]})`;
document.body.style.backgroundSize = 'percentage';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'center';







