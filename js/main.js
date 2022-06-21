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

/* let mm = document.getElementsByName("mm") */


openModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');
    modalmes.innerHTML = "Mayo";

    let mm = document.querySelectorAll(".mm ");



    /* if (e == document.getElementById('#mes-mayo-25')) {
        modaldia.innerHTML = diaMLunes.innerHTML;
        modalnumero.innerHTML = numeroM25.innerHTML;
    }
    if (e == document.getElementById('#mes-mayo-26')) {
        modaldia.innerHTML = diaMMartes.innerHTML;
        modalnumero.innerHTML = numeroM26.innerHTML;
    } */

    //console.log(mm);

    /*  mm.addEventListener('click', () => {
         for (i in mm) {
             if (mm[1]) {
                 modaldia.innerHTML = diaMMartes.innerHTML;
                 modalnumero.innerHTML = numeroM26.innerHTML;
             };

             if (mm[2]) {
                 modaldia.innerHTML = diaMMiercoles.innerHTML;
                 modalnumero.innerHTML = numeroM27.innerHTML;
             }


         }
     }) */
    //$('mes-mayo-lunes').click(function() {
    var $boton = $('.mm');
    console.log($boton);
    if ($boton[0]) {

        modaldia.innerHTML = diaMLunes.innerHTML;

        modalnumero.innerHTML = numeroM25.innerHTML;
    } else if ($boton[1]) {
        modaldia.innerHTML = diaMMartes.innerHTML;
        modalnumero.innerHTML = numeroM26.innerHTML;
    } else if ($boton.hasClass('mes-mayo-miercoles')) {
        modaldia.innerHTML = diaMMiercoles.innerHTML;
        modalnumero.innerHTML = numeroM27.innerHTML;

    }








    /* switch ($(".c-mayo-n")) {

        case '#mes-mayo-35':
            {
                modaldia.innerHTML = diaMLunes.innerHTML;
                modalnumero.innerHTML = numeroM25.innerHTML;
                break;
            }
        case "26":
            {
                modaldia.innerHTML = diaMMartes.innerHTML;
                modalnumero.innerHTML = numeroM26.innerHTML;
                break;
            }
        case ".mes-mayo-miercoles":
            {
                modaldia.innerHTML = diaMMiercoles.innerHTML;
                modalnumero.innerHTML = numeroM27.innerHTML;
                break;
            }
        case "mes-mayo-jueves":
            {
                modaldia.innerHTML = diaMJueves.innerHTML;
                modalnumero.innerHTML = numeroM28.innerHTML;
                break;
            }
        case "mes-mayo-viernes":
            {
                modaldia.innerHTML = diaMViernes.innerHTML;
                modalnumero.innerHTML = numeroM29.innerHTML;
                break;
            }
        case "mes-mayo-lunes2":
            {
                modaldia.innerHTML = diaMLunes2.innerHTML;
                modalnumero.innerHTML = numeroM30.innerHTML;
                break;
            }
        default:
            {
                console.log("no encontro");
            }
    }


}); */

});



closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');
});

const openModal2 = document.querySelector('.c-junio-n');

openModal2.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('modal--show');

    let modalmes = document.getElementById('modal-mes')
    modalmes.innerHTML = "Junio";
    let id = $(mm).attr('id');
    console.log(id)

    switch (id) {
        case "mes-junio-lunes":
            {
                modaldia.innerHTML = diajLunes.innerHTML;
                modalnumero.innerHTML = numeroj25.innerHTML;
                break;
            }
        case "mes-junio-martes":
            {
                modaldia.innerHTML = diajMartes.innerHTML;
                modalnumero.innerHTML = numeroj26.innerHTML;
                break;
            }
        case "mes-junio-miercoles":
            {
                modaldia.innerHTML = diajMiercoles.innerHTML;
                modalnumero.innerHTML = numeroj27.innerHTML;
                break;
            }
        case "mes-junio-jueves":
            {
                modaldia.innerHTML = diajJueves.innerHTML;
                modalnumero.innerHTML = numeroj28.innerHTML;
                break;
            }
        case "mes-junio-viernes":
            {
                modaldia.innerHTML = diajViernes.innerHTML;
                modalnumero.innerHTML = numeroj29.innerHTML;
                break;
            }
        case "mes-junio-lunes2":
            {
                modaldia.innerHTML = diajLunes2.innerHTML;
                modalnumero.innerHTML = numeroj30.innerHTML;
                break;
            }
    }


});

closeModal.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('modal--show');

});