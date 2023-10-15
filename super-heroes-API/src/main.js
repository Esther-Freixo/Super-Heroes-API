import './style.css'

const photo = document.querySelector('#photo');
const name = document.querySelector('#name');
const btn = document.querySelector('#btn');



fetch("https://akabab.github.io/superhero-api/api/all.json")
.then(response => response.json())
.then((data) => {

    name.innerHTML = data[393].name;
    photo.src = data[393].images.sm;

    btn.addEventListener('click', () => {

        const randomNum = Math.round(Math.random() * data.length);
        const superhero = data[randomNum];
        
        name.innerHTML = superhero.name;
        photo.src = superhero.images.sm;
    });


});





