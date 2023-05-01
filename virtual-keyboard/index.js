/* eslint-disable no-restricted-syntax */
// basic keyboard/input layout
const inputConteiner = document.createElement('input');
const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard-container');
inputConteiner.classList.add('input-conteiner');

const rows = [
  ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
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

document.body.appendChild(inputConteiner);
document.body.appendChild(keyboardContainer);

// Space properties
const spaceElement = document.querySelector('.keyboard-row:nth-child(5) .keyboard-key:nth-child(4)');
spaceElement.style.width = '310px';

const keyboardKeys = document.querySelectorAll('.keyboard-key');
keyboardKeys.forEach((key) => {
  key.addEventListener('click', function print() {
    const keyText = this.textContent;
    if (keyText === 'Space') {
      inputConteiner.value += ' ';
    } else {
      inputConteiner.value += keyText.toLowerCase();
    }
  });
});
