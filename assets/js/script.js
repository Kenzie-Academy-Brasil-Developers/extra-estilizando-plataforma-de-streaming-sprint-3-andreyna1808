let button = document.getElementById('button')
let ul = document.getElementById('ul')
let aberto = false

button.addEventListener('click', () => {
    if (aberto) {
        ul.style.display = 'none'
        aberto = false;
    }
    else {
        ul.style.display = 'block'
        aberto = true;
    }
})