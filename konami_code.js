const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  let idx = 0
  document.body.addEventListener("keydown")
  
   idx = (codes[idx] === key) ? ++idx : 0
  
  if (idx === codes.length) {
    alert("YAY!")
    idx = 0
  }
}
