function diceRoll1() {
  let randomNumber1 = Math.floor(Math.random() * 6 + 1);

  if (randomNumber1 === 1) {
    document.querySelector('.dice1').setAttribute('src', '/images/dice1.png');
  } else if (randomNumber1 === 2) {
    document.querySelector('.dice1').setAttribute('src', '/images/dice2.png');
  } else if (randomNumber1 === 3) {
    document.querySelector('.dice1').setAttribute('src', '/images/dice3.png');
  } else if (randomNumber1 === 4) {
    document.querySelector('.dice1').setAttribute('src', '/images/dice4.png');
  } else if (randomNumber1 === 5) {
    document.querySelector('.dice1').setAttribute('src', '/images/dice5.png');
  } else if (randomNumber1 === 6) {
    document.querySelector('.dice1').setAttribute('src', '/images/dice6.png');
  }

  return randomNumber1;
}

function diceRoll2() {
  let randomNumber2 = Math.floor(Math.random() * 6 + 1);
  if (randomNumber2 === 1) {
    document.querySelector('.dice2').setAttribute('src', '/images/dice1.png');
  } else if (randomNumber2 === 2) {
    document.querySelector('.dice2').setAttribute('src', '/images/dice2.png');
  } else if (randomNumber2 === 3) {
    document.querySelector('.dice2').setAttribute('src', '/images/dice3.png');
  } else if (randomNumber2 === 4) {
    document.querySelector('.dice2').setAttribute('src', '/images/dice4.png');
  } else if (randomNumber2 === 5) {
    document.querySelector('.dice2').setAttribute('src', '/images/dice5.png');
  } else if (randomNumber2 === 6) {
    document.querySelector('.dice2').setAttribute('src', '/images/dice6.png');
  }
  return randomNumber2;
}

function winner() {
  if (diceRoll1() == diceRoll2()) {
    document.querySelector('#winner').textContent = `It's a Draw!`;
  }
  if (diceRoll1() > diceRoll2()) {
    document.querySelector('#winner').textContent = 'Winner: Player 1';
  }
  if (diceRoll1() < diceRoll2()) {
    document.querySelector('#winner').textContent = 'Winner: Player 2';
  }
}

// ----- Event Listener ---

btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelectorAll('.dice')[0 & 1].innerHTML =
    '<p>Refresh to Roll Again</p>';
});

winner();
