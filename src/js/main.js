// Import our custom CSS
import '../scss/styles.scss'
import { createScene } from './scene2D';

// Import only the Bootstrap components we need
import { Dropdown, Offcanvas, Popover } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })


window.addEventListener('DOMContentLoaded', () => {
  createScene(document.querySelector('#c'));

});
