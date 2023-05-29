/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHandler() {
  const header = document.getElementById("header");
  if (window.scrollY >= 80) {
    header.classList.add("scroll-header");
  } else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHandler);
/*==================== SHOW SCROLL UP ====================*/
function scrollTop() {
  const scrollUp = document.getElementById("scroll-top");
  if (window.scrollY >= 560) {
    scrollUp.classList.add("show-scroll");
  } else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollTop);
