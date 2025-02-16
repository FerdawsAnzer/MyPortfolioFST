const menuIcon=document.querySelector('#menu-icon');
const navigationlink=document.querySelector(".nav-links");
menuIcon.addEventListener('click',()=>{
  navigationlink.classList.toggle('active');
})