/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */

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
  scrollContainer.scrollLeft += 360;
})

backBtn.addEventListener("click", ()=>{
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 360;
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