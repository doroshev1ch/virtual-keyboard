/* eslint-disable no-restricted-syntax */
const keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard-container');

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

document.body.appendChild(keyboardContainer);
