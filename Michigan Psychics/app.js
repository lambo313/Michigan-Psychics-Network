/* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */

  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }

  // function myFunction3() {
  //   document.getElementById("myDropdown3").classList.toggle("show");
  // }


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

    
      

  
  // faq.forEach((item, index) => {
  //   let header = item.querySelector(".faq");
  //   header.addEventListener("click", () => {
  //     item.classList.toggle("open");

  //     let description = item.querySelector(".faq-all .description");
  //     if(item.classList.contains(open)){
  //       description.style.display = ("flex");
  //     } else  {
  //       description.style.display = "none";
  //     } 

  //     if(description.style.display = "flex"){
  //       let description = item.querySelector(".faq-all .description");
  //     if(item.classList.contains(open)){
  //       description.style.display = ("none");
  //     } else  {
  //       description.style.display = "flex";
  //     } 
  //     }
  //     console.log(description);
  //   })
    
  // })

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