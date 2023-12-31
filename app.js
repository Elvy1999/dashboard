const calculator_card = document.getElementById("calculator");
const landing_page_card = document.getElementById("landing_page");
const summary_card = document.getElementById("summary");
const etchASketch_card = document.getElementById("EtchASketch");
const rockPaperScissors_card = document.getElementById("rockPaperScissors");
const library_card = document.getElementById("library");

calculator_card.addEventListener("click", () => {
  window.open("https://elvy1999.github.io/calculator/", "_blank");
});
landing_page_card.addEventListener("click", () => {
  window.open("https://elvy1999.github.io/landing_page1/", "_blank");
});
summary_card.addEventListener("click", () => {
  window.open("https://elvy1999.github.io/results_summary/", "_blank");
});
etchASketch_card.addEventListener("click", () => {
  window.open("https://elvy1999.github.io/Etch-a-sketch/", "_blank");
});

rockPaperScissors_card.addEventListener("click", () => {
  window.open("https://elvy1999.github.io/RockPaperScissor/", "_blank");
});

library_card.addEventListener("click", () => {
  window.open("https://elvy1999.github.io/Odin_Projects_Repo/libraryApp/", "_blank");
});
