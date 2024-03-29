function scrollToHistory() {
  var historyElement = document.getElementById("history");
  var offsetTop = historyElement.offsetTop;
  var duration = 800; // Durée de l'animation en millisecondes
  var start = window.pageYOffset;
  var startTime =
    "now" in window.performance ? performance.now() : new Date().getTime();

  function scroll() {
    var now =
      "now" in window.performance ? performance.now() : new Date().getTime();
    var time = Math.min(1, (now - startTime) / duration);
    var timeFunction = easeInOutQuad(time);
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

/*
function scrollToHistory() {
  var historyElement = document.getElementById("history");
  var offsetBottom =
    historyElement.getBoundingClientRect().top + window.pageYOffset;
  var duration = 800; // Durée de l'animation en millisecondes
  var start = window.pageYOffset;
  var startTime =
    "now" in window.performance ? performance.now() : new Date().getTime();

  function scroll() {
    var now =
      "now" in window.performance ? performance.now() : new Date().getTime();
    var time = Math.min(1, (now - startTime) / duration);
    var timeFunction = easeInOutQuad(time);
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
*/
