const USERNAME_KEY = 'username';

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onLoginSubmit(info) {
  info.preventDefault();
  loginForm.classList.add('hidden');
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  printGreeting();
}

function printGreeting() {
  const username = localStorage.getItem(USERNAME_KEY);
  greeting.classList.remove('hidden');
  greeting.innerText = `Hello~ ${username}`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null) {
  loginForm.classList.remove('hidden');
  loginForm.addEventListener('submit', onLoginSubmit);

} else {
  printGreeting();
}




