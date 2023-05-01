/* eslint-disable no-restricted-syntax */
// basic keyboard/input layout
const textConteiner = document.createElement('textarea');
const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard-container');
textConteiner.classList.add('text-conteiner');

const rows = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\'],
  ['CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', "'", 'Enter'],
  ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '\u2191', 'Shift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '\u2190', '\u2193', '\u2192', 'Ctrl'],
];

for (const row of rows) {
  const rowContainer = document.createElement('div');
  rowContainer.classList.add('keyboard-row');

  for (const key of row) {
    const keyElement = document.createElement('div');
    keyElement.classList.add('keyboard-key');
    keyElement.textContent = key;
    rowContainer.appendChild(keyElement);
  }

  keyboardContainer.appendChild(rowContainer);
}

document.body.appendChild(textConteiner);
document.body.appendChild(keyboardContainer);

// modifier keys properties
const spaceElement = document.querySelector('.keyboard-row:nth-child(5) .keyboard-key:nth-child(4)');
spaceElement.style.width = '310px';

const keyboardKeys = document.querySelectorAll('.keyboard-key');
let isCapsLockOn = false;
let isShiftPressed = false;

window.addEventListener('keydown', (event) => {
  if (event.key === 'Shift') {
    isShiftPressed = true;
  }
});

window.addEventListener('keyup', (event) => {
  if (event.key === 'Shift') {
    isShiftPressed = false;
  }
});

keyboardKeys.forEach((key) => {
  key.addEventListener('click', function print() {
    const keyText = this.textContent;
    if (keyText === 'Space') {
      textConteiner.value += ' ';
    } else if (keyText === 'CapsLock') {
      isCapsLockOn = !isCapsLockOn;
      this.classList.toggle('active');
    } else if (keyText === 'Shift') {
      isCapsLockOn = !isCapsLockOn;
      this.classList.toggle('active');
    } else if (keyText === 'Backspace') {
      textConteiner.value = textConteiner.value.slice(0, -1);
    } else if (keyText === 'Tab') {
      textConteiner.value += '\t';
    } else if (keyText === 'Enter') {
      textConteiner.value += '\n';
    } else if (keyText === 'Alt') {
      textConteiner.value += '\n';
    } else {
      // eslint-disable-next-line no-bitwise
      const letter = isCapsLockOn ^ isShiftPressed ? keyText.toUpperCase() : keyText.toLowerCase();
      textConteiner.value += letter;
    }
  });
});
