/*function scrollToHistory() {
  let historyElement = document.getElementById("history");
  let offsetTop = historyElement.offsetTop;
  let duration = 800; // Durée de l'animation en millisecondes
  let start = window.pageYOffset;
  let startTime =
    "now" in window.performance ? performance.now() : new Date().getTime();

  function scroll() {
    let now =
      "now" in window.performance ? performance.now() : new Date().getTime();
    let time = Math.min(1, (now - startTime) / duration);
    let timeFunction = easeInOutQuad(time);
    window.scroll(0, Math.ceil(timeFunction * (offsetTop - start) + start));

    if (Math.abs(window.pageYOffset - offsetTop) < 1 || time >= 1) {
      return;
    }

    requestAnimationFrame(scroll);
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  scroll();
}
*/

function scrollToHistory() {
  let historyElement = document.getElementById("history");
  let offsetBottom =
    historyElement.getBoundingClientRect().top + window.pageYOffset;
  let duration = 800; // Durée de l'animation en millisecondes
  let start = window.pageYOffset;
  let startTime =
    "now" in window.performance ? performance.now() : new Date().getTime();

  function scroll() {
    let now =
      "now" in window.performance ? performance.now() : new Date().getTime();
    let time = Math.min(1, (now - startTime) / duration);
    let timeFunction = easeInOutQuad(time);
    window.scroll(0, Math.ceil(timeFunction * (offsetBottom - start) + start));

    if (Math.abs(window.pageYOffset - offsetBottom) < 1 || time >= 1) {
      return;
    }

    requestAnimationFrame(scroll);
  }

  function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  scroll();
}

const menuHamburger = document.querySelector(".menu-hamberger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
  if (navLinks.style.visibility === "hidden") {
    navLinks.style.visibility = "visible";
  } else {
    navLinks.style.visibility = "hidden";
  }
});
