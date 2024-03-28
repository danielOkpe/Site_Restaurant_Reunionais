let btn = document.getElementById("horaire");
let pos = btn.getBoundingClientRect();
console.log(pos.x);

document.getElementById("descover_btn").addEventListener("click", function () {
  window.scroll({
    top: pos.y,
    left: 0,
    behavior: "smooth",
  });
  /* document.getElementById("history").scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });*/
});
