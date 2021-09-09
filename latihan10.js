const close = document.querySelectorAll(".close");
const card = document.querySelectorAll(".card");

// PAKE FOR BIASA
// for (let i = 0; i < close.length; i++) {
//   close[i].addEventListener("click", function (e) {
//     // close[i].parentElement.style.display = "none";
//     e.target.parentElement.style.display = "none";
//   });
// }

// PAKE FOREACH

// close.forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.target.parentElement.style.display = "none";
// preventDefault() => Untuk menghentikan aksi default dari sebuah element
//     e.preventDefault();
//     e.stopPropagation();
//   });
// });

// card.forEach(function (el) {
//   el.addEventListener("click", function () {
//     alert("Hi");
//   });
// });
////////////////////////////////////////////////////////

// const nama = document.querySelector(".nama");
// console.log(nama.parentElement);

// EFISIEN CODE

const container = document.querySelector(".container");

container.addEventListener("click", function (e) {
  if (e.target.className == "close") {
    e.target.parentElement.style.display = "none";
    e.preventDefault();
  } else if (
    e.target.className == "card" ||
    e.target.className == "telp" ||
    e.target.className == "nama"
  ) {
    alert("HI");
  }
  console.log(e.target);
});
