
function DDay() {
  const clock = document.querySelector('h2');
  const christmasDate = new Date('2022-12-25');
  const nowDate = new Date();

  const diffSecond = (christmasDate.getTime() - nowDate.getTime()) / 1000;
  console.log(diffSecond);

  const day = Math.floor((diffSecond / 60 / 60) / 24);
  const hour = Math.floor((diffSecond / 60 / 60) % 24);
  const minute = Math.floor((diffSecond / 60) % 60);
  const second = Math.floor(diffSecond % 60);
  
  clock.innerText = `${day}d:${hour}h:${minute}m:${second}s`;
  console.log(clock, clock.innerText);
}

function initDisplay() {
	const body = document.body;
  const h1Text = document.createElement('h1');
  const h2Time = document.createElement('h2');

	h1Text.innerText = "Time Until Christmas";


	body.appendChild(h1Text);
	body.appendChild(h2Time);
}

initDisplay();
DDay();
setInterval(DDay, 1000);
