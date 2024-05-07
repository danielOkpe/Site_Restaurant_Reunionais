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
      dishName = "Poulet massalé au pomme de terre"; // il faut remplacer  "namPlat 1" par le nom du plat de la première photo en partant de la gauche
      break;
    case 2:
      dishName = "Rougail saucisse";
      break;
    case 3:
      dishName = "Moule au combava";
      break;
    case 4: //on fait pareil pour tout les noms de plats
      dishName = "Carry poulet";
      break;
    case 5:
      dishName = "Poulet massalé";
      break;
    case 6:
      dishName = "Poulet massalé au pomme de terre";
      break;
    case 7:
      dishName = "Thon massalé aux légumes";
      break;
    case 8:
      dishName = "Poulet vanille";
      break;
    case 9:
      dishName = "Choux pointu";
      break;
    case 10:
      dishName = "nomPlat 10";
      break;
    case 11:
      dishName = "nomPlat 10";
      break;
    case 12:
      dishName = "nomPlat 10";
      break;
    case 13:
      dishName = "nomPlat 10";
      break;
    case 14:
      dishName = "nomPlat 10";
      break;
  }
}

//fonction pour adapter la description selon "i" (qui sera "index plus tard")
function setDescription(i) {
  switch (i) {
    case 1:
      descriptionPlat =
        "Dégustez notre délicieux poulet massalé aux pommes de terre, où tendres morceaux de poulet et pommes de terre se marient harmonieusement dans un festival d'épices réunionnaises.";
      break;
    case 2:
      descriptionPlat =
        " Laissez-vous envoûter par la magie de la cuisine réunionnaise avec notre rougail saucisse, où des saucisses savoureuses sont mijotées dans une sauce tomate pimentée, relevée par des touches d'ail et d'oignon.";
      break;
    case 3:
      descriptionPlat =
        " Découvrez l'harmonie parfaite entre les moules fraîches et parfumées et le zeste citronné du combava dans ce plat délicat et raffiné. ";
      break;
    case 4: //il faut remplacer "description i" par les bonnes descriptions
      descriptionPlat =
        "Plongez dans un océan de saveurs avec notre carry poulet, où des morceaux de poulet tendres sont mijotés dans une sauce onctueuse et parfumée aux épices réunionnaises.";
      break;
    case 5:
      descriptionPlat =
        "Succombez à la tentation avec notre poulet massalé, où des morceaux de poulet tendres sont enrobés d'un mélange d'épices savamment dosé, offrant une explosion de saveurs à chaque bouchée.";
      break;
    case 6:
      descriptionPlat =
        "Dégustez notre délicieux poulet massalé aux pommes de terre, où tendres morceaux de poulet et pommes de terre se marient harmonieusement dans un festival d'épices réunionnaises.";
      break;
    case 7:
      descriptionPlat =
        "Laissez-vous séduire par cette fusion exotique de saveurs où le thon frais rencontre les légumes croquants dans une sauce massalé envoûtante.";

    case 8:
      descriptionPlat =
        "Explorez de nouveaux horizons gustatifs avec notre poulet vanille, où des morceaux de poulet juteux sont sublimés par la douceur envoûtante de la vanille.";
      break;
    case 9:
      descriptionPlat = "description 9";
      break;
    case 10:
      descriptionPlat = "description 10";
    case 11:
      descriptionPlat = "description 10";
    case 12:
      descriptionPlat = "description 10";
    case 13:
      descriptionPlat = "description 10";
    case 14:
      descriptionPlat = "description 10";
  }
}
