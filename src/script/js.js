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
    setTimeout(() => slider(el), 4000);
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
  if (navbarCollapse.classList.contains("opened")) {
    if (window.innerWidth <= 1200) {
      let y = window.innerWidth - x;
      navbarCollapse.style.cssText = `
    padding-left: ${0}px;
    width: ${400 + y}px;
    padding-right: ${y}px;
  `;
    } else {
      navbarCollapse.style.cssText = `
    padding-left: ${x}px;
    width: ${400 + x}px;
    padding-right: ${0}px;
  `;
    }
  } else {
    navbarCollapse.style.cssText = " ";
  }
}
toggler.addEventListener("click", navbarToggle);

// =========== tabs =============

const tab = document.querySelectorAll(".faq__tab");

tab.forEach((el) => el.addEventListener("click", tabToggler));
function tabToggler(e) {
  let answer = e.currentTarget.querySelector(".faq__answer");
  answer.classList.toggle("show");
  let btn = e.currentTarget.querySelector(".faq__btn");
  btn.classList.toggle("toggled");
}
