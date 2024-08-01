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
    const select = document.getElementById('language');
    const black =document.getElementById('black');
    const translations = {
        en: {
            heading: 'Hi there!👋',
            paragraph: 'On this site you can see a random avatar generator powered by <a class="Db" href="https://dicebear.com">DiceBear</a>. You must just simply entеr your name or nickname or what ever you want just enjoy. Good luck from <span class="dd"> Dream Developement</span>',
            button:'Proceed',
        },
        ua: {
            heading: 'Привіт!👋',
            paragraph: 'На цьому сайті ви можете створити собі випадковий аватар з <a class="Db" href="https://dicebear.com">DiceBear</a>. Просто введіть своє імя, або будь що. Удачі від <span class="dd"> Dream Developement</span>',
            button: 'Поїхали',
        },
    };
    function randomNum(min, max){
        min= Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random()*(max - min + 1)) + min
    };
    
    let styles = ['identicon','bottts-neutral','initials','bottts', 'big-smile', 'big-ears-neutral'];

    let colors = ['FF5733', 'FF9633', 'A2FF33', '33C1FF', 'D133FF', '33FFEC', '8333FF'];
    
    btn.addEventListener('click', () => {

        //ForDeveloper or debug if error
        //setTimeout(clearCons, 3000);

        const nameValue = inputName.value;
        const age = inputColor.value;
        container.innerHTML = `<img src="https://api.dicebear.com/6.x/${styles[randomNum(0, 5)]}/svg?seed=${nameValue}&backgroundColor=${colors[randomNum(0, 6)]}&radius=10" alt="thx dicebear">`;

        //ForDeveloper or debug if error
        //console.log(container.innerHTML);


        //ForDeveloper or debug if error
        //console.log(age);


        //ForDeveloper or debug if error
        //console.log(nameValue);

        htwo.innerHTML = `${nameValue}` + ', ' + `(${age}y.o)`;
        if(age == ''){
            htwo.innerHTML = `${nameValue}`;
        };
        if(htwo.innerHTML == ''){
            htwo.innerHTML = `<span class='ultrared'>Enter your name!!!</span>`;
            container.innerHTML = `<div class="noPrompt">
                <h1>Eter your name</h1>
            </div>`;
        }else{

            //ForDeveloper or debug if error
            //console.log('false');

        };
        if(age !== '' && nameValue == ''){
            htwo.innerHTML = `<span class='red'>Enter your name!!!</span>`;
            container.innerHTML = `<div class="noPrompt">
                <h1>Eter your name</h1>
            </div>`;
        };

        //ForDeveloper or debug if error
        //console.log(htwo.innerHTML);

    });

    function clearCons(){

        //ForDeveloper or debug if error
        //console.clear();

    };

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