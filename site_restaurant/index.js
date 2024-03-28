let btn = document.getElementById("horaire");
let descoverBtn = document.getElementById("descover_btn");

let posHorraire = btn.getBoundingClientRect();
let posDescBtn = descoverBtn.getBoundingClientRect();
posy = parseInt(posHorraire.y);

let distance = parseInt(posHorraire.y - posDescBtn.y);
let d = parseInt(distance / 10);
let pas = 10;

let index = 0;
let i = 0;

console.log(posDescBtn);
console.log(distance);

descoverBtn.addEventListener("click", function () {
  timout = setInterval(() => {
    window.scrollBy(0, pas);
    d = d - 1; //posy = posy - 1;
  }, 1);

  setInterval(() => {
    if (d == 0) {
      clearInterval(timout);
      d = parseInt(distance / 10);
    }
  });

  /*document.getElementById("history").scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });*/
});
