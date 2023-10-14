import "./style.css";

const btnDog = document.querySelector('#dog');
const btnCar = document.querySelector('#cat');
const btnSurprise = document.querySelector('#surprise');

btnDog.addEventListener('click', () => {
    fetch("https://dog.ceo/api/breeds/image/random",{})
    .then(response => console.log(response.json()))

});