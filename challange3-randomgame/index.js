let toNumber;
function setToNumber(event) {
	toNumber = event.target.value;
	console.log(toNumber);
}

function onPlay(event) {
	event.preventDefault();
	console.log(event.srcElement[0]);
	console.log(event.srcElement[0].value);
}

function initDisplay() {
	const body = document.body;
  const h2 = document.createElement('h2');
	const inputNumberText = document.createElement('span');
	const inputNumber = document.createElement('input');

	h2.innerText = "Random Number Game";
	inputNumberText.innerText = "Generate a number between 0 and ";
	inputNumber.setAttribute("type", "number");
	body.appendChild(h2);
	body.appendChild(inputNumberText);
	body.appendChild(inputNumber);
	inputNumber.addEventListener('blur', setToNumber);

	const br = document.createElement('br');
	const guessNumberForm = document.createElement('form');
	const guessNumberText = document.createElement('span');
	const guessNumber = document.createElement('input');
	const guessNumberBtn = document.createElement('input');

	guessNumberText.innerText = "Guess the number: ";
	guessNumber.type = "number";

	guessNumberBtn.setAttribute("type", "submit");
	guessNumberBtn.setAttribute("value", "Play!");

	newlineBr(2, body);

	body.appendChild(guessNumberForm);
	guessNumberForm.appendChild(guessNumberText);
	guessNumberForm.appendChild(guessNumber);
	guessNumberForm.appendChild(guessNumberBtn);

	guessNumberForm.addEventListener('submit', onPlay);

	const resultText1 = document.createElement('span');
	const resultText2 = document.createElement('span');

	resultText1.innerText = "You ";
	resultText1.id = "result-text1";
	body.appendChild(resultText1);
	newlineBr(1, body);
	resultText2.innerText = "You ";
	resultText2.id = "result-text2 ";
	body.appendChild(resultText2);


}



function newlineBr(want, element) {
	for(let i=0 ; i<want ; ++i) {
		const br = document.createElement('br');
		element.appendChild(br);
	}
}
initDisplay();
