const header = document.querySelector(".header");
console.log(header);
const btn = document.querySelector(".btn_contact");
window.addEventListener("scroll", function (event) {
  var top = this.scrollY;
  if (top >= 5) {
    header.classList.add("sticky");
    btn.style.background = "#fff";
    btn.style.color = "#ff8000";
  } else {
    header.classList.remove("sticky");
    btn.style.background = "#ff8000";
    btn.style.color = "#fff";
  }
});

// const ham = document.querySelector(".ham");
// const nav = document.querySelector(".nav_wrapper");
// ham.addEventListener("click", function () {
//   ham.classList.toggle("transform");
//   nav.classList.toggle("mobile_menu");
// });

const submenuWrappers = document.querySelectorAll(".sub_menu_wrapper");
const submenuInners = document.querySelectorAll(".sub_menu_inner");

submenuWrappers.forEach((wrapper, index) => {
  wrapper.addEventListener("click", () => {
    submenuInners.forEach((element, subIndex) => {
      if (index === subIndex) {
        element.classList.toggle("flex_menu");
      } else {
        element.classList.remove("flex_menu");
      }
    });
  });
});

const loder = document.querySelector(".loder");
console.log(loder);
window.addEventListener("load", (event) => {
  loder.style.display = "none";
});

var myButton = document.getElementById("backToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

window.addEventListener("mousemove", (event) => {
  const cursor =document.querySelector('.cursor');
  cursor.style.left = event.pageX + 'px';
  cursor.style.top = event.pageY + 'px';
});

function pauseMarquee() {
  document.querySelector('.marquee-content').style.animationPlayState = 'paused';
}

function startMarquee() {
  document.querySelector('.marquee-content').style.animationPlayState = 'running';
}