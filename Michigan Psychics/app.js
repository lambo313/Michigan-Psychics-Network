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
  scrollContainer.scrollLeft += 370;
})

backBtn.addEventListener("click", ()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 370;
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