
document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const accordionHeader = item.querySelector('.accordion-header');
  accordionHeader.addEventListener('click', () => {
    const accordionContent = item.querySelector('.accordion-content');

   
    if (accordionContent.style.display === 'none') {
      accordionContent.style.display = 'block';
      accordionHeader.firstElementChild.src = "images/up-arrow.png";
    } else {
      accordionContent.style.display = 'none';
      accordionHeader.firstElementChild.src = "images/down-arrow.png";
    }
  });
});


