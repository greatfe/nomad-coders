let toGenNumber;
let choseNumber;
function setToGenNumber(event) {
	toGenNumber = event.target.value;
}

function onPlay(event) {
	event.preventDefault();

	const machinNumber = Math.round(Math.random() * toGenNumber);
	choseNumber = parseInt(event.srcElement[0].value);
	event.srcElement.childNodes[4].innerText = `You chose: ${choseNumber}, the machine chose: ${machinNumber}`;

	if(choseNumber === machinNumber)
		event.srcElement.childNodes[6].innerText = 'You win!';
	else
		event.srcElement.childNodes[6].innerText = 'You lost!';
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
	inputNumber.addEventListener('blur', setToGenNumber);

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

	newlineBr(1, guessNumberForm);

	const resultText1 = document.createElement('span');
	const resultText2 = document.createElement('span');

	resultText1.id = "result-text1";
	guessNumberForm.appendChild(resultText1);
	newlineBr(1, guessNumberForm);
	resultText2.id = "result-text2";
	guessNumberForm.appendChild(resultText2);
}

function newlineBr(want, element) {
	for(let i=0 ; i<want ; ++i) {
		const br = document.createElement('br');
		element.appendChild(br);
	}
}

initDisplay();
