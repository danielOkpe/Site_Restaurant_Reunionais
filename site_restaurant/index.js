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

const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");
const modalImg = document.getElementById("modal_img");
const nomPlat = document.getElementById("nom_plat");
const descriptionId = document.getElementById("description_plat");
let dishName;
let descriptionPlat;

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

function openModal(index) {
  modal.style.display = "block";
  overlay.style.display = "block";
  setName(index);
  nomPlat.innerHTML = dishName;
  modalImg.style.backgroundImage = "url('/food_img/" + index + ".jpg')";
  setDescription(index);
  descriptionId.innerHTML = descriptionPlat;
}

function closeModal() {
  const modal = document.getElementById("modal");
  const overlay = document.getElementById("overlay");
  modal.style.display = "none";
  overlay.style.display = "none";
}

function setName(i) {
  switch (i) {
    case 1:
      dishName = "namPlat 1";
      break;
    case 2:
      dishName = "namPlat 2";
      break;
    case 3:
      dishName = "namPlat 3";
      break;
    case 4:
      dishName = "namPlat 4";
      break;
    case 5:
      dishName = "namPlat 5";
      break;
    case 6:
      dishName = "namPlat 6";
      break;
    case 7:
      dishName = "namPlat 7";
  }
}

function setDescription(i) {
  switch (i) {
    case 1:
      descriptionPlat = "description 1";
      break;
    case 2:
      descriptionPlat = "descrition 2";
      break;
    case 3:
      descriptionPlat = "description 3";
      break;
    case 4:
      descriptionPlat = "description 4";
      break;
    case 5:
      descriptionPlat = "description 5";
      break;
    case 6:
      descriptionPlat = "description 6";
      break;
    case 7:
      descriptionPlat = "description 7";
  }
}
