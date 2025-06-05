/**
 * Import dependencies from node_modules
 * see commented examples below
 */

import lightbox from "lightbox2";
import 'lightbox2/dist/css/lightbox.min.css';

/**
 * Write any other JavaScript below
 */

  const currentPath = window.location.pathname.split('/').pop(); // obtiene el archivo, ej: "index.html"
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const linkPath = link.getAttribute('href').split('/').pop();

    if (linkPath === currentPath) {
      link.classList.add('bg-primary-dark', 'text-white');
    }
  });
