 /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */

  function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
  }

  // function myFunction3() {
  //   document.getElementById("myDropdown3").classList.toggle("show");
  // }

  const faq = document.querySelectorAll(".faq");
  
  faq.forEach((item, index) => {
    let header = item.querySelector(".faq header");
    header.addEventListener("click", () => {
      item.classList.toggle("open");

      let description = item.querySelector(".faq .description");
      if(item.classList.contains(open)){
        description.style.display = ("flex");
      } else  {
        description.style.display = "none";
      } 

      if(description.style.display = "flex"){
        let description = item.querySelector(".faq .description");
      if(item.classList.contains(open)){
        description.style.display = ("none");
      } else  {
        description.style.display = "flex";
      } 
      }
      console.log(description);
    })
    
  })

  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {

    if (!e.target.matches('.dropbtn2')) {
    var myDropdown2 = document.getElementById("myDropdown2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (myDropdown2.classList.contains('show')) {
        myDropdown2.classList.remove('show');
      }
    }
   }

  //  if (!e.target.matches('.faq')) {
  //   var myDropdown3 = document.getElementById("myDropdown3");
  //   var i;
  //   for (i = 0; i < dropdowns.length; i++) {
  //     var openDropdown = dropdowns[i];
  //     if (myDropdown3.classList.contains('show')) {
  //       myDropdown3.classList.remove('show');
  //     }
  //   }
  //  }
  }