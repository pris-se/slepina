// ============ slider ==================================
const sliderBlock = document.querySelectorAll(".slider");
sliderBlock.forEach((el) => slider(el));
function slider(el) {
  const slide = el.querySelectorAll(".slider__item");
  for (key of slide) {
    if (key.classList.contains("hide")) {
      key.classList.remove("hide");
    } else {
      key.classList.add("hide");
    }
  }
  if (window.innerWidth <= 992) {
    setTimeout(() => slider(el), 2000);
  }
}

// =========================== navbar ========================================
const navbarCollapse = document.querySelector("#navbarCollapse");
const toggler = document.querySelector("#toggler");
function navbarToggle() {
  toggler.classList.toggle("toggled");
  navbarCollapse.classList.toggle("opened");
  let x = toggler.getBoundingClientRect().x;
  console.log(x);
  if (window.innerWidth <= 1200) {
    let y = window.innerWidth - x;
    navbarCollapse.style.paddingLeft = 0 + "px";
    navbarCollapse.style.width = 400 + y + "px";
    navbarCollapse.style.paddingRight = y + "px";
  } else {
    navbarCollapse.style.paddingRight = 0 + "px";
    navbarCollapse.style.width = 400 + x + "px";
    navbarCollapse.style.paddingLeft = x + "px";
  }
}
toggler.addEventListener("click", navbarToggle);
