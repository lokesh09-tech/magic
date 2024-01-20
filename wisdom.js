

// navbar scrolled 


document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");

  function updateNavbar() {
      if (window.scrollY > 50) {
          navbar.classList.add("navbar-scrolled");
      } else {
          navbar.classList.remove("navbar-scrolled");
      }
  }

  
  updateNavbar();

  
  document.addEventListener("scroll", updateNavbar);
});

// ...---- 





document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
   let obj = document.getElementById(id),
    current = start,
    range = end - start,
    increment = end > start ? 1 : -1,
    step = Math.abs(Math.floor(duration / range)),
    timer = setInterval(() => {
     current += increment;
     obj.textContent = current;
     if (current == end) {
      clearInterval(timer);
     }
    }, step);
  }
  counter("count1", 0, 400, 10000);
  counter("count2", 0, 50, 10000);
  counter("count3", 0, 40, 10000);
 });



//  testimonials 

 
 