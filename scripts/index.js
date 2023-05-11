// ?------------------------ Pantalla de Carga

window.onload = function(){
    $('#carga').fadeOut();
    $('body').removeClass('hidden');
    $('.headline-fade').css('opacity', 0);
    $('.headline-fade').animate({ opacity: 1 }, 2500);
}

// ?------------------------ Maquina de escribir 


const numRepeticiones = Infinity;
let contadorRepeticiones = 0;
let escribiendo = true;
let borrando = true;
let detener = false;

function maquinaEscribir() {
  const texto = document.getElementById('texto');
  const contenido = texto.textContent;

  let i = 0;
  let temporizador = setInterval(function() {
    if (escribiendo) {
      if (i === 0) { // Verifica si es la primera vez que se escribe el texto
        texto.textContent = contenido.charAt(0);
        i++;
      } else {
        texto.textContent += contenido.charAt(i);
        i++;
      }
      if (i >= contenido.length) {
        escribiendo = false;
        detener = true;
        i--;
      }
    } else if (detener) {
      setTimeout(function() {
        detener = false;
        borrando = true;
      }, 1000);
    } else if (borrando) {
      if (texto.textContent.substring(0, i) === "Hola!") { // Comprobación adicional para borrar solo hasta "Hola!"
        i = 5; // Establece i en la longitud de "Hola!"
        escribiendo = true; // Comienza a escribir nuevamente desde "Hola!"
      } else {
        texto.textContent = texto.textContent.substring(0, i);
        i--;
        if (i < 0) {
          borrando = false;
          escribiendo = true;
          contadorRepeticiones++;
          if (contadorRepeticiones < numRepeticiones) {
            i = 0;
            borrando = true;
          } else {
            clearInterval(temporizador);
          }
        }
      }
    }
  }, 100);
}

maquinaEscribir();

// ?--------------------------------------- boton volver arriba

// !Inicio de JQUERY

$(document).ready(function () {


var btnVolverArriba = $('#btnVolverArriba');

    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
          btnVolverArriba.css('margin-right', 0);
      } else {
          btnVolverArriba.css('margin-right', '-80px');
      }
    });

    function desplazamientoSuave() {
      $('html, body').animate({
        scrollTop: 0
      }, 1000);
    }

    $('#btnVolverArriba').click(function() {
      desplazamientoSuave($('html, body'));
    });


// ?------------------------------------------Menu 

var numero = 1;

$('#btnMenu').on('click', function (e) {
    e.preventDefault();
    if (numero == 1) {
        $('.header-movil .menu-movil').animate({right:'-0'}, 300, function() {
            numero = 0;
        });
    } else {
        $('.header-movil .menu-movil').animate({right:'-100%'}, 300, function(){
            numero = 1;
        })
    }
});

$('.menu-movil a').on('click', function(){
    $('.menu-movil').animate({right:'-100%'}, 300, function(){
        numero = 1;
    });
});

// ?---------------------------Movimiento suave de scroll para todos los elementos del header

  // Movimiento suave de scroll de los demás items del menú principal

  $('a.scroll-inicio').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.scroll-suave').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 100
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.scroll-proyectos').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 50
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.scroll-educacion').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 50
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.scroll-habilidades').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 70
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });

  $('a.scroll-formulario').on('click', function (e) {
    e.preventDefault();
    var seccionOffsetTop = $($(this).attr('href')).offset().top - 32
    $('html, body').stop().animate({scrollTop: seccionOffsetTop}, 1000);
  });
  
  // ?--------------------------Fixed Header
  
  var fixedHeader = $('#fixedHeader');

  $(window).on('scroll', function () {

    var aboutOffsetTop = $('#about').offset().top;

    if ($(window).scrollTop() >= aboutOffsetTop/2) {

      fixedHeader.css('margin-top', 0);

    }else if ($(window).scrollTop() <= aboutOffsetTop/2) {

      fixedHeader.css('margin-top', '-120px');

    }

  })

  // ?-----------------------------Validacion

  var formulario = $('#formularioValidacion');
  var nombre = $('#nombre');
  var email = $('#email');
  var asunto = $('#asunto');
  var mensaje = $('#mensaje');

  function valNombre(e) {

    if (nombre.val() == '' || nombre.val() == null) {
      e.preventDefault();
      $('input[name="nombre"]').nextAll('.error').first().css('display', 'block');
    } else {
      $('input[name="nombre"]').nextAll('.error').first().css('display', 'none');
    }

  }

  
  function valEmail(e) {
    
    if (email.val() == '' || email.val() == null) {
      e.preventDefault();
      $('input[type="email"]').nextAll('.error').first().css('display', 'block');
    } else {
      $('input[type="email"]').nextAll('.error').first().css('display', 'none');;
    }
    
  }
  
  function valAsunto(e) {

    if (asunto.val() == '' || asunto.val() == null) {
      e.preventDefault();
      $('input[name="asunto"]').nextAll('.error').first().css('display', 'block');
    } else {
      $('input[name="asunto"]').nextAll('.error').first().css('display', 'none');
    }

  }
  
  function valMensaje(e) {

    if (mensaje.val() == '' || mensaje.val() == null) {
      e.preventDefault();
      $('textarea').nextAll('.error').first().css('display', 'block');
    } else {
      $('textarea').nextAll('.error').first().css('display', 'none');
    }

  }

  function validacion(e) {
    valNombre(e);
    valEmail(e);
    valAsunto(e);
    valMensaje(e);
  }

  formulario.on('submit', validacion);

    $('.headline-fade').css('opacity', 0);
    $('.headline-fade').animate({ opacity: 1 }, 2500);
    
});

// !fin de JQUERY

// ?----------------------------- Animaciones para que aparezca el contenido

const intersectionObserver = document.getElementById('intersectionObserver');
const intersectionObserver1 = document.getElementById('intersectionObserver1');
const intersectionObserver2 = document.getElementById('intersectionObserver2');
const intersectionObserver3 = document.getElementById('intersectionObserver3');

const cargarImagen = (entradas, observador) => {
// 	console.log(entradas)
// 	console.log(observador)

    entradas.forEach((entrada) => {
        if(entrada.isIntersecting){
            entrada.target.classList.add('visible');
        }
    });
}

const observador = new IntersectionObserver(cargarImagen, {
	root: null,
	rootMargin: '0px',
	threshold: 0.1
});

observador.observe(intersectionObserver);
observador.observe(intersectionObserver1);
observador.observe(intersectionObserver2);
observador.observe(intersectionObserver3);