async function navbar_responsive(){
  
    let target = document.querySelectorAll(".cat_nav div");
    for (let i = 0; i < target.length; i++) {
      target[i].onmouseenter = (event) => {
        navbar_appen(event);
      };
      target[i].onmouseleave = (event) => {
        navbar_remove(event);
      };
    }
    function navbar_appen(e) {
      let y = e.target.childNodes[1];
  
      document.querySelector(`.${y.textContent}`).style.visibility = "visible";
    }
    function navbar_remove(e) {
      let y = e.target.childNodes[1];
  
      let t = document.querySelector(`.${y.textContent}`);
      t.onmouseenter = () => {
        t.style.visibility = "visible";
      };
      t.onmouseleave = () => {
        t.style.visibility = "hidden";
      };
      t.style.visibility = "hidden";
    }
    var navbar = document.querySelector(".mid_nav");
    let postiton = navbar.offsetTop;
    window.onscroll = function () {
      myFunction();
    };
    function myFunction() {
      let nav = document.querySelector(".sticky_nav");
      if (window.pageYOffset >= postiton) {
        navbar.classList.add("sticky");
  
        nav.innerHTML = `<span><i class="fas fa-bars"></i></span>`;
        let y = document.querySelectorAll(".filter>div");
        for (let k = 0; k < y.length; k++) {
          y[k].style.position = "fixed";
          y[k].style.top = "50px";
        }
      } else {
        navbar.classList.remove("sticky");
        nav.innerHTML = null;
        let y = document.querySelectorAll(".filter>div");
        for (let k = 0; k < y.length; k++) {
          y[k].style.position = "absolute";
          y[k].style.top = "auto";
        }
      }
    }
    let nav_btn = document.querySelectorAll(".nav_btn");
    nav_btn[0].addEventListener("click", (event) => {
      let y = document.querySelector(".slide_nav");
      y.classList.toggle("active");
    });
    nav_btn[1].addEventListener("click", (event) => {
      let y = document.querySelector(".slide_nav");
      y.classList.toggle("active");
    });
    nav_btn[2].addEventListener("click", (event) => {
      let y = document.querySelector(".slide_nav");
      y.classList.toggle("active");
    });
}

export default navbar_responsive;