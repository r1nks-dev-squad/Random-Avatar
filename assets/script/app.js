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
const bod = document.querySelector('body');
var navlist = document.querySelector('#navlistOpt');
var menu = document.querySelector('.icon-For-menu');
var closeI = document.querySelector('.fa-xmark');
var menuI = document.querySelector('.fa-bars');
const home = document.getElementsByClassName('reload');

closeI.classList.add('noUse');
menu.addEventListener('click', function () {
  if (navlist.id.includes('navlistOpt')) {
    openNav();
  } else {
    closeNav();
  }
});
bod.addEventListener('contextmenu', function (a) {
  alert('Inspect is forbidden');
  a.preventDefault();
});

function closeNav() {
  if (!navlist.id.includes('navlistOpt')) {
    navlist.classList.remove('navlistOpt');
    navlist.id = 'navlistOpt';
    menuI.classList.remove('noUse');
    closeI.classList.add('noUse');
    //for check
    //      console.log('nav list was closed succesfully');
  }
}
function openNav() {
  navlist.id = '';
  navlist.classList.add('navlistOpt');
  menuI.classList.add('noUse');
  closeI.classList.remove('noUse');
  //for check
  //      console.log('nav list was opened succesfully');
}

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

  //ForDeveloper or debug if error
  //setTimeout(clearCons, 3000);

  //ForDeveloper or debug if error
  //console.log(container.innerHTML);

  //ForDeveloper or debug if error
  //console.log(age);

  //ForDeveloper or debug if error
  //console.log(nameValue);

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
    //ForDeveloper or debug if error
    //console.log('false');
  }
  if (age !== '' && nameValue == '') {
    htwo.innerHTML = `<span class='red'>Enter your name!!!</span>`;
    container.innerHTML = `<div class="noPrompt">
                <h1>Eter your name</h1>
            </div>`;
  }

  //ForDeveloper or debug if error
  //console.log(htwo.innerHTML);
});

function clearCons() {
  //ForDeveloper or debug if error
  //console.clear();
}

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

//ForDeveloper or debug if error
//console.log(result);
