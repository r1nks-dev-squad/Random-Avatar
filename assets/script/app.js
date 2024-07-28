    const inputName = document.querySelector('.r1nk');
    const inputColor = document.querySelector('.r4nk');
    const btn = document.querySelector('#submit');
    const container = document.querySelector('.for-img');
    const htwo = document.querySelector('#yourName');
    const heading = document.querySelector('#heading');
    const paragraph = document.querySelector('#paragraph');
    const modalBox = document.querySelector('.modal-box');
    const btnProceed = document.querySelector('.btn-proceed');
    const btntrouble = document.querySelector('#trouble');
    const forInp = document.querySelector('.for-inputs');
    const select = document.getElementById('language');
    const eng = document.querySelector('.en');
    const ukr = document.querySelector('.ua');
    const translations = {
        en: {
            heading: 'Hi there!👋',
            paragraph: 'On this site you can see a random avatar generator powered by <span class="Db">DiceBear</span>. You must just simply entеr your name or nickname or what ever you want just enjoy. Good luck from <span class="dd"> Dream Developement</span>',
            button:'Proceed',
        },
        ua: {
            heading: 'Привіт!👋',
            paragraph: 'На цьому сайті ви можете створити собі випадковий аватар з <span class="Db">DiceBear</span>. Просто введіть своє імя, або будь що. Удачі від <span class="dd"> Dream Developement</span>',
            button: 'Поїхали',
        },
    };
    //const contForhtwo = document.querySelector('.for-name');
    function randomNum(min, max){
        min= Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max - min + 1)) + min
    };
    
    let styles = ['identicon','bottts-neutral','initials','bottts', 'big-smile', 'big-ears-neutral'];

    let colors = ['FF5733', 'FF9633', 'A2FF33', '33C1FF', 'D133FF', '33FFEC', '8333FF'];
    
    btn.addEventListener('click', () => {
        setTimeout(clearCons, 3000);
        const nameValue = inputName.value;
        container.innerHTML = `<img src="https://api.dicebear.com/6.x/${styles[randomNum(0, 5)]}/svg?seed=${nameValue}&backgroundColor=${colors[randomNum(0, 6)]}&radius=10" alt="thx dicebear">`;
        console.log(container.innerHTML);
        htwo.innerHTML = `${nameValue}`;
    });
    function clearCons(){
        console.clear();
    };
    btnProceed.addEventListener('click', () => {
        modalBox.classList.replace('open', 'closed');
        forInp.classList.toggle('closed');
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
//0096c7`<img src="https://api.dicebear.com/6.x/open-peeps/svg?seed=${nameValue}&backgroundColor=0096c7&radius=10" alt="thx dicebear">`;  

/*function randomNum(min, max){
    min= Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1)) + min
};

let styles = ['identicon','bottts-neutral','initials','bottts','dylan'];

console.log(styles[randomNum(0, 4)]);*/