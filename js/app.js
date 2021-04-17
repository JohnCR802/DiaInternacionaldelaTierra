//Navegation Menu
// let te permite declarar variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando.
//document.querySelector devuelve el primer elemento que coincide con un selector(s) CSS especificado(s) en el documento. 
let bar_icon = document.querySelector('.bar-icon');
let nav = document.querySelector('.nav');
let enlaces = document.querySelector('.container-list');
let contador = true;

//addEventListener() asocia un controlador de eventos a un elemento sin sobrescribir controladores de eventos existentes. 
bar_icon.addEventListener('click', function(){
   this.classList.toggle('active');
   
   if (contador == true) {
     enlaces.style.width = '100%';
     enlaces.style.overflow = 'hidden';
     enlaces.style.transition = '0.5s';

     nav.style.background = '#f1f4df';
     nav.style.transition = '0.5s';

     contador = false;

   }else{
     contador = true;
     enlaces.style.width = '0%';
     enlaces.style.overflow = 'hidden';
     enlaces.style.transition = '0.5s';

     nav.style.background = 'transparent';
     nav.style.transition = '0.5s';

   }

});

