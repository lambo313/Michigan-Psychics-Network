  /* When the user clicks on the menu bar, 
toggle between displaying and hiding the nav */

const toggleButton = document.getElementsByClassName('menu-toggle-btn')[0];
const mobileMenu = document.getElementsByClassName('mobile-nav')[0];
const nonMenu = document.getElementsByClassName('content','ban-2','ban-3-container')[0];

toggleButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('active')
  toggleButton.classList.toggle('active')

  // if (mobileMenu.classList.contains('active')) {
  //     nonMenu.addEventListener('click', () => {
  //       mobileMenu.classList.toggle('inactive');
  //       toggleButton.classList.toggle('inactive');
  //     })}
  //     if (mobileMenu.classList.contains('inactive')) {
  //       toggleButton.addEventListener('click', () => {
  //         mobileMenu.classList.toggle('active')
  //         toggleButton.classList.toggle('active')
  //     })
  
  if (mobileMenu.classList.contains('active')) {
    toggleButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('inactive');
      toggleButton.classList.toggle('inactive');
    })}    
})

const loginToggle = document.getElementsByClassName('account-toggle-btn')[0];
const loginPage = document.getElementsByClassName('sign-in-page')[0];
const exitLogin = document.getElementsByClassName('exit-sign-in')[0];
const noScroll = document.getElementsByClassName('hero')[0];
const exitLogin2 = document.getElementsByClassName('sign-in-page-logo')[0];

loginToggle.addEventListener('click', () => {
  loginPage.classList.toggle('active')
  noScroll.classList.toggle('no-scroll')
})

exitLogin.addEventListener('click', () => {
  loginPage.classList.remove('active')
  noScroll.classList.remove('no-scroll')
})

exitLogin2.addEventListener('click', () => {
  loginPage.classList.remove('active')
  noScroll.classList.remove('no-scroll')
})
  
// let mobileMenu = document.querySelectorAll(".menu-toggle-btn");
// let clickedMm = document.querySelector(".nav:first-of-type");
// for(var i = 0; i < li.length; i++) {
//   mobileMenu[i].addEventListener("click", (e)=> {
//    if(e.target.classList.contains(".menu-toggle-btn"))
//       clickedMm.style.display="none";
//      else {
//       clickedMm.style.display="none";
//      }
//       // clickedMm.classList.toggle(".nav:first-of-type")
//  });
// }

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

// function toggle() {
//   var elem = document.getElementById("mobile-nav");
//   if(elem.style.display == "block"){
//       elem.style.display="none";
//   } else {
//       elem.style.display="block";
//   }
// }



  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
  
    if (!e.target.matches('.dropbtn2')) {
    var myDropdown2 = document.getElementById("myDropdown2");
    var i;
    for (i = 0; i < myDropdown2.length; i++) {
      var openDropdown = dropdowns[i];
      if (myDropdown2.classList.contains('show')) {
        myDropdown2.classList.remove('show');
      }
    }
   }

  }

  /* When the user clicks on each faq, 
toggle between displaying and hiding the description */
  
  
 let li = document.querySelectorAll(".faq-all li");
 for(var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", (e)=> {
    let clickedLi;
    if(e.target.classList.contains("faq"))
      clickedLi = e.target.parentElement;
      else {
       clickedLi = e.target.parentElement.parentElement;
       console.log(clickedLi);
      }
    clickedLi.classList.toggle("description")
  });
}
  
 
// // Allows last nav li to display above border when hovered

//   // li.forEach((item, index) => {
//     let lastLi = document.querySelector("li:last-child");
//     lastLi.addEventListener("click"), (e)=> {
//       document.classList.toggle("open");

//       let flow = item.querySelector("nav ul");
//         if(e.item.classList.contains(open)){
//           flow.style.overflow = ("");
//         } else  {
//           flow.style.overflow = "hidden";
//         } 
//         console.log("open");
//     }
//     // })
    
// 

let scrollContainer = document.querySelector(".offers > ul");
let backBtn = document.getElementById("offers-backbtn");
let nextBtn = document.getElementById("offers-nextbtn");

scrollContainer.addEventListener("wheel", (evt) => {
  // evt.preventDefault();
  // scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
})

nextBtn.addEventListener("click", ()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 380;
})

backBtn.addEventListener("click", ()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 380;
})

let ttasscrollContainer = document.querySelector(".ttas ul");
let ttasbackBtn = document.getElementById("ttas-backbtn");
let ttasnextBtn = document.getElementById("ttas-nextbtn");

ttasscrollContainer.addEventListener("wheel", (evt) => {
  // evt.preventDefault();
  // ttasscrollContainer.scrollLeft += evt.deltaY;
  ttasscrollContainer.style.scrollBehavior = "auto";
})

ttasnextBtn.addEventListener("click", ()=>{
  ttasscrollContainer.style.scrollBehavior = "smooth";
  ttasscrollContainer.scrollLeft += 420;
})

ttasbackBtn.addEventListener("click", ()=>{
  ttasscrollContainer.style.scrollBehavior = "smooth";
  ttasscrollContainer.scrollLeft -= 420;
})

// particlesJS("particles-js", {"particles":{"number":{"value":600,"density":{"enable":true,"value_area":1200}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;