// ----- Variables ---

const randomNumber1 = Math.floor(Math.random() * 6 + 1);

const randomNumber2 = Math.floor(Math.random() * 6 + 1);

console.log(randomNumber1);

console.log(randomNumber2);

// ----- App Functions ---

function diceRoll1() {
  if (randomNumber1 === 1) {
    document.querySelector('.dice1').setAttribute('src', '/images/dice1.png');
  }
  if (randomNumber1 === 2) {
    document.querySelector('.dice1').setAttribute('src', '/images/dice2.png');
  }
  if (randomNumber1 === 3) {
    document.querySelector('.dice1').setAttribute('src', '/images/dice3.png');
  }
  if (randomNumber1 === 4) {
    document.querySelector('.dice1').setAttribute('src', '/images/dice4.png');
  }
  if (randomNumber1 === 5) {
    document.querySelector('.dice1').setAttribute('src', '/images/dice5.png');
  }
  if (randomNumber1 === 6) {
    document.querySelector('.dice1').setAttribute('src', '/images/dice6.png');
  }
}

function diceRoll2() {
  if (randomNumber2 === 1) {
    document.querySelector('.dice2').setAttribute('src', '/images/dice1.png');
  }
  if (randomNumber2 === 2) {
    document.querySelector('.dice2').setAttribute('src', '/images/dice2.png');
  }
  if (randomNumber2 === 3) {
    document.querySelector('.dice2').setAttribute('src', '/images/dice3.png');
  }
  if (randomNumber2 === 4) {
    document.querySelector('.dice2').setAttribute('src', '/images/dice4.png');
  }
  if (randomNumber2 === 5) {
    document.querySelector('.dice2').setAttribute('src', '/images/dice5.png');
  }
  if (randomNumber2 === 6) {
    document.querySelector('.dice2').setAttribute('src', '/images/dice6.png');
  }
}

function winner() {
  diceRoll1();
  diceRoll2();
  if (randomNumber1 === randomNumber2) {
    document.querySelector('#winner').textContent = `It's a Draw!`;
  }
  if (randomNumber1 > randomNumber2) {
    document.querySelector('#winner').textContent = 'Player 1 wins';
  }
  if (randomNumber2 > randomNumber1) {
    document.querySelector('#winner').textContent = 'Player 2 wins';
  }
}

// ----- Event Listeners ---

roll = document.querySelector('#roll');
reset = document.querySelector('#reset');

roll.addEventListener('click', (e) => {
  e.preventDefault();
  winner();
});

reset.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#winner').innerText = 'End of the Road...';
  document.querySelectorAll('.dice')[0].innerHTML =
    '<p>Hit the Roll Again Button</p>';
  document.querySelectorAll('.dice')[1].innerHTML = '<p></p>';
});

winner();
