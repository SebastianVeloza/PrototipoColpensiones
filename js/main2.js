const openModal = document.querySelector('.c-mayo-n');

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal-title img');
let modalnumero = document.getElementById('modal-numero')
let modalmes = document.getElementById('modal-mes')
let modaldia = document.getElementById('modal-dia')


//mayo
let diaMLunes = document.getElementById('mes-mayo-lunes');
let diaMMartes = document.getElementById('mes-mayo-martes');
let diaMMiercoles = document.getElementById('mes-mayo-miercoles');
let diaMJueves = document.getElementById('mes-mayo-jueves');
let diaMViernes = document.getElementById('mes-mayo-viernes');
let diaMLunes2 = document.getElementById('mes-mayo-lunes2');

let numeroM25 = document.getElementById('mes-mayo-25')
let numeroM26 = document.getElementById('mes-mayo-26')
let numeroM27 = document.getElementById('mes-mayo-27')
let numeroM28 = document.getElementById('mes-mayo-28')
let numeroM29 = document.getElementById('mes-mayo-29')
let numeroM30 = document.getElementById('mes-mayo-30')

//junio
let diajLunes = document.getElementById('mes-junio-lunes');
let diajMartes = document.getElementById('mes-junio-martes');
let diajMiercoles = document.getElementById('mes-junio-miercoles');
let diajJueves = document.getElementById('mes-junio-jueves');
let diajViernes = document.getElementById('mes-junio-viernes');
let diajLunes2 = document.getElementById('mes-junio-lunes2');

let numeroj25 = document.getElementById('mes-junio-25')
let numeroj26 = document.getElementById('mes-junio-26')
let numeroj27 = document.getElementById('mes-junio-27')
let numeroj28 = document.getElementById('mes-junio-28')
let numeroj29 = document.getElementById('mes-junio-29')
let numeroj30 = document.getElementById('mes-junio-30')

function mayo(dia) {
    switch (dia) {
        case document.getElementById('mes-mayo-25'):
            {
                modaldia.innerHTML = 'lunes'
                modalnumero.innerHTML = '25'
                modalmes.innerHTML = "Mayo";
                modal.classList.add('modal--show');
                modalmes.innerHTML = "Mayo";
                break
            }

        case document.getElementById('mes-mayo-26'):
            {
                modaldia.innerHTML = 'Martes'
                modalnumero.innerHTML = '26'
                modalmes.innerHTML = "Mayo";
                modal.classList.add('modal--show');
                modalmes.innerHTML = "Mayo";
                break
            }
        case document.getElementById('mes-mayo-27'):
            {
                modaldia.innerHTML = 'Miercoles'
                modalnumero.innerHTML = '27'
                modalmes.innerHTML = "Mayo";
                modal.classList.add('modal--show');
                modalmes.innerHTML = "Mayo";
                break
            }
        case document.getElementById('mes-mayo-28'):
            {
                modaldia.innerHTML = 'Jueves'
                modalnumero.innerHTML = '28'
                modalmes.innerHTML = "Mayo";
                modal.classList.add('modal--show');
                modalmes.innerHTML = "Mayo";
                break
            }
        case document.getElementById('mes-mayo-29'):
            {
                modaldia.innerHTML = 'Viernes'
                modalnumero.innerHTML = '29'
                modalmes.innerHTML = "Mayo";
                modal.classList.add('modal--show');
                modalmes.innerHTML = "Mayo";
                break
            }
        case document.getElementById('mes-mayo-30'):
            {
                modaldia.innerHTML = 'lunes'
                modalnumero.innerHTML = '30'
                modalmes.innerHTML = "Mayo";
                modal.classList.add('modal--show');
                modalmes.innerHTML = "Mayo";
                break
            }

    }
    console.log(dia);
    /* if (dia = document.getElementById('mes-mayo-25')) {

        modaldia.innerHTML = 'lunes'
        modalnumero.innerHTML = '25'
        modalmes.innerHTML = "Mayo";
        modal.classList.add('modal--show');
        modalmes.innerHTML = "Mayo";
    }
    if (dia = document.getElementById('mes-mayo-26')) {

        modaldia.innerHTML = 'Martes'
        modalnumero.innerHTML = '26'
        modalmes.innerHTML = "Mayo";
        modal.classList.add('modal--show');
        modalmes.innerHTML = "Mayo";
    } */
}

function junio(dia) {
    switch (dia) {
        case document.getElementById('mes-junio-25'):
            {
                modaldia.innerHTML = 'lunes'
                modalnumero.innerHTML = '25'
                modalmes.innerHTML = "Junio";
                modal.classList.add('modal--show');
                break
            }

        case document.getElementById('mes-junio-26'):
            {
                modaldia.innerHTML = 'Martes'
                modalnumero.innerHTML = '26'
                modalmes.innerHTML = "Junio";
                modal.classList.add('modal--show');
                break
            }
        case document.getElementById('mes-junio-27'):
            {
                modaldia.innerHTML = 'Miercoles'
                modalnumero.innerHTML = '27'
                modalmes.innerHTML = "Junio";
                modal.classList.add('modal--show');
                break
            }
        case document.getElementById('mes-junio-28'):
            {
                modaldia.innerHTML = 'Jueves'
                modalnumero.innerHTML = '28'
                modalmes.innerHTML = "Junio";
                modal.classList.add('modal--show');
                break
            }
        case document.getElementById('mes-junio-29'):
            {
                modaldia.innerHTML = 'Viernes'
                modalnumero.innerHTML = '29'
                modalmes.innerHTML = "Junio";
                modal.classList.add('modal--show');
                break
            }
        case document.getElementById('mes-junio-30'):
            {
                modaldia.innerHTML = 'lunes'
                modalnumero.innerHTML = '30'
                modalmes.innerHTML = "Junio";
                modal.classList.add('modal--show');
                break
            }

    }
}

function cerrar() {
    modal.classList.remove('modal--show');
}