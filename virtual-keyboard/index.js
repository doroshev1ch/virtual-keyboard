/* eslint-disable no-restricted-syntax */
// basic keyboard/input layout
const textConteiner = document.createElement('textarea');
const keyboardContainer = document.createElement('div');
const languageToggle = document.createElement('button');
keyboardContainer.classList.add('keyboard-container');
textConteiner.classList.add('text-conteiner');
languageToggle.textContent = 'Switch Language';

const languages = ['en', 'ru'];
const keyboardRows = {
  en: [
    ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
    ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
    ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '\u2191', 'Shift'],
    ['Control', 'Win', 'Alt', 'Space', 'Alt', '\u2190', '\u2193', '\u2192', 'Control'],
  ],
  ru: [
    ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
    ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\'],
    ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
    ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '?', '\u2191', 'Shift'],
    ['Control', 'Win', 'Alt', 'Space', 'Alt', '\u2190', '\u2193', '\u2192', 'Control'],
  ],
};
let lang = 'en';
let rows = keyboardRows[lang];

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
document.body.appendChild(languageToggle);

//  switchLanguage
function toggleLanguage() {
  const index = languages.indexOf(lang);
  lang = languages[(index + 1) % languages.length];
  rows = keyboardRows[lang];

  const keyboardRowsElements = document.querySelectorAll('.keyboard-row');
  for (let i = 0; i < rows.length; i += 1) {
    const keys = keyboardRowsElements[i].querySelectorAll('.keyboard-key');
    for (let j = 0; j < rows[i].length; j += 1) {
      keys[j].textContent = rows[i][j];
    }
  }
}

languageToggle.addEventListener('click', () => {
  toggleLanguage();
});

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
      textConteiner.value += '';
    } else {
      // eslint-disable-next-line no-bitwise
      const letter = isCapsLockOn ^ isShiftPressed ? keyText.toUpperCase() : keyText.toLowerCase();
      textConteiner.value += letter;
    }
  });
});

// add key binding to virtual keyboard
window.addEventListener('keydown', (event) => {
  keyboardKeys.forEach((key) => {
    if (key.textContent === event.key) {
      key.classList.add('active');
    }
  });
});

window.addEventListener('keyup', (event) => {
  keyboardKeys.forEach((key) => {
    if (key.textContent === event.key) {
      key.classList.remove('active');
    }
  });
});

window.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    keyboardKeys.forEach((key) => {
      if (key.textContent === 'Space') {
        key.classList.add('active');
      }
    });
  } else {
    keyboardKeys.forEach((key) => {
      if (key.textContent === event.key) {
        key.classList.add('active');
      }
    });
  }
});

window.addEventListener('keyup', (event) => {
  if (event.code === 'Space') {
    keyboardKeys.forEach((key) => {
      if (key.textContent === 'Space') {
        key.classList.remove('active');
      }
    });
  } else {
    keyboardKeys.forEach((key) => {
      if (key.textContent === event.key) {
        key.classList.remove('active');
      }
    });
  }
});
