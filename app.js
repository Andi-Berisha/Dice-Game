// ----- App Functions ---

function rollDice() {
  const randomNumber1 = Math.floor(Math.random() * 6) + 1;
  const randomNumber2 = Math.floor(Math.random() * 6) + 1;

  document
    .querySelector('.dice1')
    .setAttribute('src', `images/dice${randomNumber1}.png`);
  document
    .querySelector('.dice2')
    .setAttribute('src', `images/dice${randomNumber2}.png`);

  document.querySelector('.dice p').innerHTML = 'Player 1';
  document.querySelector('#p2').innerText = 'Player 2';

  changeTitle(randomNumber1, randomNumber2);
}

function changeTitle(num1, num2) {
  if (num1 === num2) {
    document.querySelector('h1').innerHTML = 'Draw!';
  } else if (num1 > num2) {
    document.querySelector('h1').innerHTML = 'Player 1 Wins! 🚩';
  } else {
    document.querySelector('h1').innerHTML = 'Player 2 Wins! 🚩';
  }
}

// ----- Event Listeners ---

roll = document.querySelector('#roll');
reset = document.querySelector('#reset');

roll.addEventListener('click', (e) => {
  e.preventDefault();
  rollDice();
});

reset.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('h1').innerText = 'Hit the Roll Button Cowboy!';
  document.querySelector('.dice p').innerHTML = '';
  document.querySelector('#p2').innerText = '';
  document.querySelector('.dice1').setAttribute('src', '/images/dice6.png');
  document.querySelector('.dice2').setAttribute('src', '/images/dice6.png');
});
