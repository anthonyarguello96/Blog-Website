import * as lib from './functions.js';
import './main.css';
const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');


// Show
toggleMenu.addEventListener('click', ()=>{
  navMenu.classList.toggle('show');
});


// Hidden
closeMenu.addEventListener('click', ()=>{
  navMenu.classList.remove('show');
});


//  Active & Remove
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');
  // console.log(this);

  // Remove Mobile Menu After click
  navMenu.classList.remove('show');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));
