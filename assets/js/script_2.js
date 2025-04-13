// Ejercicio 4
const $div1 = document.getElementById('div-1')
const $div2 = document.getElementById('div-2')
const $div3 = document.getElementById('div-3')
const $div4 = document.getElementById('div-4')

$div1.addEventListener('click', () => $div1.style.backgroundColor = 'black')
$div2.addEventListener('click', () => $div2.style.backgroundColor = 'black')
$div3.addEventListener('click', () => $div3.style.backgroundColor = 'black')
$div4.addEventListener('click', () => $div4.style.backgroundColor = 'black')



// Ejercicio 5
let aKeyColor = 'pink' 
let sKeyColor = 'orange'
let dKeyColor = 'skyblue'
let qKeyColor = 'purple'
let wKeyColor = 'grey'
let eKeyColor = 'brown'
const $divKey = document.getElementById('key')

// Cambiar color del div con la tecla
document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'a') {
        $divKey.style.backgroundColor = aKeyColor
    } else if (event.key.toLowerCase() === 's') {
        $divKey.style.backgroundColor = sKeyColor
    } else if (event.key.toLowerCase() === 'd') {
        $divKey.style.backgroundColor = dKeyColor
    } 
})

function agregarDiv(color) {
    const $contenedor3 = document.querySelector('#container-3')
    const nuevoDiv = document.createElement('div')
    nuevoDiv.style.width = '200px'
    nuevoDiv.style.height = '200px'
    nuevoDiv.style.backgroundColor = color
    nuevoDiv.style.border = '1px solid black'
    $contenedor3.appendChild(nuevoDiv)
}

// Crear divs con las teclas
document.addEventListener('keydown', function(event) {
    if (event.key.toLowerCase() === 'q') {
        agregarDiv(qKeyColor)
    } else if (event.key.toLowerCase() === 'w') {
        agregarDiv(wKeyColor)
    } else if (event.key.toLowerCase() === 'e') {
        agregarDiv(eKeyColor)
    }
})