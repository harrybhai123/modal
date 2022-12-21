const btnclick = document.getElementById("btn");
const btnclose = document.getElementById("close");
const btncancel = document.getElementById("cancel");
const btnyes = document.getElementById("yes");
let open = document.getElementById("open");

btnclick.addEventListener("click", function () {
  open.style.display = "block";
});
btnclose.addEventListener("click", function () {
  open.style.display = "none";
});
btncancel.addEventListener("click", function () {
  open.style.display = "none";
});
btnyes.addEventListener("click", function () {
  open.style.display = "none";
});
