function pilihanKomputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp <= 0.67) return "semut";
  return "orang";
}

function rulesGame(comp, player) {
  if (player == comp) return "SERI!";
  if ((player = "gajah")) return comp == "semut" ? "MENANG!" : "KALAH!";
  if ((player = "semut")) return comp == "orang" ? "MENANG!" : "KALAH!";
  if ((player = "orang")) return comp == "gajah" ? "MENANG!" : "KALAH!";
}

function putar() {
  const imgKomputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;

      return;
    }
    imgKomputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) return (i = 0);
  }, 100);
}

const pilihanAll = document.querySelectorAll("li img");
pilihanAll.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihKomputer = pilihanKomputer();
    const pilihPlayer = pil.className;
    const hasil = rulesGame(pilihKomputer, pilihPlayer);

    putar();

    setTimeout(function () {
      const imgKomputer = document.querySelector(".img-komputer");
      imgKomputer.setAttribute("src", "img/" + pilihKomputer + ".png");

      const hasilGame = document.querySelector(".info");
      hasilGame.innerHTML = "<p> " + hasil + " </p>";
    }, 1000);
  });
});

// TAK EFEKTIFFF

// const pilihGajah = document.querySelector('.gajah');
// pilihGajah.addEventListener('click', function() {
//     const pilihKomputer = pilihanKomputer();
//     const pilihPlayer = pilihGajah.className;
//     const hasil = rulesGame(pilihKomputer, pilihPlayer);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihKomputer + '.png');
//     console.log(imgKomputer)

//     const hasilGame = document.querySelector('.info');
//     hasilGame.innerHTML = '<p> ' + hasil +' </p>';
// });

// const pilihOrang = document.querySelector('.orang');
// pilihOrang.addEventListener('click', function() {
//     const pilihKomputer = pilihanKomputer();
//     const pilihPlayer = pilihOrang.className;
//     const hasil = rulesGame(pilihKomputer, pilihPlayer);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihKomputer + '.png');
//     console.log(imgKomputer)

//     const hasilGame = document.querySelector('.info');
//     hasilGame.innerHTML = '<p> ' + hasil +' </p>';
// });

// const pilihSemut = document.querySelector('.semut');
// pilihSemut.addEventListener('click', function() {
//     const pilihKomputer = pilihanKomputer();
//     const pilihPlayer = pilihSemut.className;
//     const hasil = rulesGame(pilihKomputer, pilihPlayer);

//     const imgKomputer = document.querySelector('.img-komputer');
//     imgKomputer.setAttribute('src', 'img/' + pilihKomputer + '.png');
//     console.log(imgKomputer)

//     const hasilGame = document.querySelector('.info');
//     hasilGame.innerHTML = '<p> ' + hasil +' </p>';
// });
