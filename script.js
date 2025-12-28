let i = 0;
let colors = ["red", "blue", "green", "orange", "purple"];

function change() {
  document.body.style.backgroundColor = colors[i];
  i = (i + 1) % 5;
}