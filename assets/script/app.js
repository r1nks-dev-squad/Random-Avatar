const inputName = document.querySelector('.r1nk');
const inputColor = document.getElementById('color');
const btn = document.querySelector('#submit');
const container = document.querySelector('.for-img');
const htwo = document.querySelector('#yourName');
const heading = document.querySelector('#heading');
const paragraph = document.querySelector('#paragraph');
const modalBox = document.querySelector('.modal-box');
const btnProceed = document.querySelector('#btn-proceed');
const btntrouble = document.querySelector('#trouble');
const forInp = document.querySelector('.for-inputs');
const forInp1 = document.querySelector('.for-inputs1');
const select = document.getElementById('language');
const black = document.getElementById('black');
const body = document.querySelector('body');
const nav = document.querySelector('nav');
var navlist = document.querySelector('#navlistOpt');
const home = document.getElementsByClassName('reload');
const hamMenu = document.querySelector('.ham-menu');
const hamMenu1 = document.querySelector('.ham-menu1');
const modalSettings = document.querySelector('.modal-settings');
const btnSettings = document.querySelector('.settings');
const btnSettings1 = document.querySelector('.settings1');
const variants = document.querySelectorAll('.variant');
const colorVariant = document.querySelector('.variant-color1');
const colorVariant2 = document.querySelector('.variant-color2');
const colorVariant3 = document.querySelector('.variant-color3');
const theme = document.querySelector('.theme');
const noprompt = document.querySelector('.noPrompt');

console.log(colorVariant);

console.log(theme.innerHTML);

function changeTheme(color, color1, color2) {
  forInp.classList.add(`${color}`);
  body.classList.add(`${color1}`);
  noprompt.classList.add(`${color2}`);
}

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  if (hamMenu.classList.contains('active')) {
    navlist.id = '';
    navlist.classList.add('navlistOpt');
  } else {
    navlist.classList.remove('navlistOpt');
    navlist.id = 'navlistOpt';
  }
});

forInp.addEventListener('click', () => {
  hamMenu.classList.remove('active');
  navlist.classList.remove('navlistOpt');
  navlist.id = 'navlistOpt';
});

btnSettings.addEventListener('click', () => {
  modalSettings.classList.toggle('closed1');
});

btnSettings1.addEventListener('click', () => {
  modalSettings.classList.toggle('closed1');
});

hamMenu1.addEventListener('click', () => {
  modalSettings.classList.toggle('closed1');
});

console.log(variants);

function backgroundImage(imgUrl) {
  document.body.style.backgroundImage = `url(${imgUrl})`;
}

document.addEventListener('DOMContentLoaded', () => {
  const savedImg = localStorage.getItem(backgroundImage);
  if (savedImg) {
    setBackgroundImage(savedImg);
  }
});

variants.forEach((variant) => {
  variant.addEventListener('click', () => {
    const img = variant.querySelector('img');
    const imgSrc = img.getAttribute('src');
    localStorage.setItem('backgoundImage', imgSrc);
    setTimeout(backgroundImage(imgSrc), 200);
    console.log(imgSrc);
    const themename = variant.querySelector('p');
    theme.innerHTML = `${themename.innerHTML}`;
    forInp.classList = 'for-inputs';
    noprompt.classList = 'noPrompt';
    body.classList = '';
  });
});

colorVariant.addEventListener('click', () => {
  forInp.classList = 'for-inputs';
  forInp.classList.add('nord1');
  body.classList = '';
  body.classList.add('nord');
  noprompt.classList = 'noPrompt';
  noprompt.classList.add('nord2');
});

colorVariant2.addEventListener('click', () => {
  forInp.classList = 'for-inputs';
  forInp.classList.add('Vince1');
  body.classList = '';
  body.classList.add('Vince');
  noprompt.classList.add('Vince2');
});

colorVariant3.addEventListener('click', () => {
  forInp.classList = 'for-inputs';
  forInp.classList.add('Catpuccin1');
  body.classList = '';
  body.classList.add('Catpuccin');
  noprompt.classList.add('Catpuccin2');
});

// const themename = variantcol.getAttribute('p');
// changeTheme(`${themename}`, `${themename}1`, `${themename}2`);

const translations = {
  en: {
    heading: 'Hi there!👋',
    paragraph:
      'On this site you can see a random avatar generator powered by <a class="Db" href="https://dicebear.com">DiceBear</a>. You must just simply entеr your name or nickname or what ever you want just enjoy. Good luck from <span class="dd"> Dream Developement</span>',
    button: 'Proceed',
  },
  ua: {
    heading: 'Привіт!👋',
    paragraph:
      'На цьому сайті ви можете створити собі випадковий аватар з <a class="Db" href="https://dicebear.com">DiceBear</a>. Просто введіть своє імя, або будь що. Удачі від <span class="dd"> Dream Developement</span>',
    button: 'Поїхали',
  },
};
function randomNum(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let styles = [
  'identicon',
  'bottts-neutral',
  'initials',
  'bottts',
  'big-smile',
  'big-ears-neutral',
  'big-ears',
  'adventurer',
];

let colors = [
  'FF5733',
  'FF9633',
  'A2FF33',
  '33C1FF',
  'D133FF',
  '33FFEC',
  '8333FF',
];

btn.addEventListener('click', () => {
  const nameValue = inputName.value;

  const result = colors[randomNum(0, 6)];

  container.innerHTML = `<img src="https://api.dicebear.com/6.x/${
    styles[randomNum(0, 7)]
  }/svg?seed=${nameValue}&backgroundColor=${result}&radius=10" alt="thx dicebear">`;

  const age = inputColor.value;

  htwo.innerHTML = `${nameValue}` + ' ' + `(${age}y.o)`;
  if (age == '') {
    htwo.innerHTML = `${nameValue}`;
  }
  if (htwo.innerHTML == '') {
    htwo.innerHTML = `<span class='ultrared'>Enter your name!!!</span>`;
    container.innerHTML = `<div class="noPrompt">
                <h1>Eter your name</h1>
            </div>`;
  } else {
    //just a comment :D
  }
  if ((age !== '', nameValue == '')) {
    htwo.innerHTML = `<span class='red'>Enter your name!!!</span>`;
    container.innerHTML = `<div class="noPrompt">
                <h1>Eter your name</h1>
            </div>`;
    inputName.classList.add('invalid');
  } else if (typeof age === String) {
    inputColor.classList.add('invalid');
  } else {
    inputName.classList.remove('invalid');
  }
});

function clearCons() {
  console.clear();
}

// setTimeout(clearCons, 0);

btnProceed.addEventListener('click', () => {
  modalBox.classList.replace('open', 'closed');
  forInp.classList.toggle('closed');
  black.classList.toggle('closed');
});

btntrouble.addEventListener('click', () => {
  location.reload();
});

select.addEventListener('change', (event) => {
  const selected = event.target.value;
  heading.innerHTML = translations[selected].heading;
  paragraph.innerHTML = translations[selected].paragraph;
  btnProceed.innerHTML = translations[selected].button;
});
