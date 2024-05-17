
document.addEventListener('DOMContentLoaded', () => {

    // Toma todos los valores del nabbar-burger
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // agregar un evento click
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // toma la el objetivo del target
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        //activa y desactiva el muenu
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });

  //Muestra o oculta el menu

  //elecciona todos los elementos del DOM que tienen la clase accordion-item y los almacena en una constante llamada accordionItems.

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => { //Itera sobre cada uno de los elementos seleccionados (accordionItems), donde item representa cada elemento individual en la colección.
  const accordionHeader = item.querySelector('.accordion-header');//Dentro de cada item, selecciona el elemento con la clase accordion-header y lo almacena en la constante accordionHeader.
  accordionHeader.addEventListener('click', () => { //Agrega un event listener al accordionHeader que escucha por el evento de click. Cuando se detecta un clic, se ejecuta la función proporcionada como argumento.
    const accordionContent = item.querySelector('.accordion-content'); //Dentro de la función del event listener, selecciona el elemento con la clase accordion-content que se encuentra dentro del item y lo almacena en la constante accordionContent.

   
    if (accordionContent.style.display === 'none') {//Comprueba si el estilo display del accordionContent está establecido en 'none', lo que indicaría que el contenido está oculto.
      accordionContent.style.display = 'block';//Si el contenido está oculto, cambia su estilo display a 'block' para mostrarlo.
      accordionHeader.firstElementChild.src = "images/up-arrow.png";//Cambia la fuente de la primera imagen hija (firstElementChild) del accordionHeader para que apunte a "images/up-arrow.png". Esto normalmente se usa para indicar visualmente que el menu se ha expandido.

    } else {
      //de lo contrario no se muetra el menu 
      accordionContent.style.display = 'none';
      accordionHeader.firstElementChild.src = "images/down-arrow.png";
    }
  });
});


