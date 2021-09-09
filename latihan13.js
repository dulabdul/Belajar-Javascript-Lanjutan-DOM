const container = document.querySelector(".container");
const jumbo = document.querySelector(".img-jumbo");
const tumbs = document.querySelectorAll(".thumb");
container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;

    jumbo.classList.add("fade");

    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);
    tumbs.forEach(function (thumbs) {
      if (thumbs.classList.contains("active")) {
        thumbs.classList.remove("active");
      }
    });
    e.target.classList.add("active");
  }
});
