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

const modal = document.getElementById("modal"); // on initialise "modal" avec la div qui a pour id "modal"
const overlay = document.getElementById("overlay"); //on initialise "overlay" avec la div qui a pour id "overlay"(c'est le fond noir qui apparait quand la modal elle s'ouvre)
const modalImg = document.getElementById("modal_img"); //on initialise "modaleImg" avec la div qui contiendra l'image des plats
const nomPlat = document.getElementById("nom_plat"); //on initialise "nomPlat" avec le h1 qui contiendra le nom des plats
const descriptionId = document.getElementById("description_plat"); //on initialise "descriptionId" avec le paragraphe qui contiendra les descriptions des plats
let dishName; // le nom des plats
let descriptionPlat; // la description des plats

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

//fonction pour ouvrir le modal
function openModal(index) {
  modal.style.display = "block"; //on fait apparaitre le modal
  overlay.style.display = "block"; //on fait apparaitre le fond noir
  setName(index); //on adapte le nom du plat selon l'index
  nomPlat.innerHTML = dishName; //on remplace le h1 par le bon nom de plat
  modalImg.style.backgroundImage = "url('/food_img/" + index + ".jpg')"; //on met en fond l'image du plat qui correspond
  setDescription(index); //on adapte la description selon l'index
  descriptionId.innerHTML = descriptionPlat; // on remplace le contenu du paragraphe par la description qui correspond
}

//fonction pour fermer le modal
function closeModal() {
  modal.style.display = "none"; //on fait disparaitre le modal
  overlay.style.display = "none"; // on fait disparaitre le fond noir
}

//fonction pour adapter le nom du plat selon "i" (qui sera "index" plus tard)
function setName(i) {
  switch (i) {
    case 1:
      dishName = "namPlat 1"; // il faut remplacer  "namPlat 1" par le nom du plat de la première photo en partant de la gauche
      break;
    case 2:
      dishName = "namPlat 2";
      break;
    case 3:
      dishName = "namPlat 3";
      break;
    case 4: //on fait pareil pour tout les noms de plats
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

//fonction pour adapter la description selon "i" (qui sera "index plus tard")
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
    case 4: //il faut remplacer "description i" par les bonnes descriptions
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
