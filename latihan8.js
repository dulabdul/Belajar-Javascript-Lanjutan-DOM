// const button = document.querySelector('.btn');
// function ubahBacground() {
//     const body = document.querySelector('body');
//     body.style.backgroundColor = "#000";
// }
// button.onclick = ubahBacground;

const button = document.querySelector('.btn');

button.addEventListener('onclick', function() {
  document.body.classList.toggle('merah');
    
});
// tombol dengna Javascript
const buttonBaru = document.createElement('button');
const textButton = document.createTextNode('Klik Tombol');
buttonBaru.appendChild(textButton);
buttonBaru.setAttribute('id', 'button')
buttonBaru.setAttribute('type', 'button')

const sectionA = document.getElementById('a');
sectionA.append(buttonBaru);

buttonBaru.addEventListener('click', function() {
// VERSI SIMPLENYA
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
        document.body.style.backgroundColor = 'rgb('+ r +' '+ g +' '+ b +')'
// CARA LOGIKA GW SANGAT RIBET
    // if (random  < 0.10) {
    //     document.body.style.backgroundColor = 'green';
    // }else if(random > 0.10 && random <= 0.20 ){
    //     document.body.style.backgroundColor = 'blue';
    // }else if(random > 0.20 && random <= 0.30){
    //     document.body.style.backgroundColor = 'red';
    // }else if(random > 0.30 && random <= 0.40){
    //     document.body.style.backgroundColor = 'black';
    // }else if(random > 0.40 & random <= 0.50){
    //     document.body.style.backgroundColor = 'lightblue'
    // }else if(random > 0.50 && random <= 0.60 ){
    //     document.body.style.backgroundColor = 'yellow';
    // }else if(random > 0.60 && random <= 0.70){
    //     document.body.style.backgroundColor = 'brown';
    // }else if(random > 0.70 && random <= 0.80){
    //     document.body.style.backgroundColor = 'aqua';
    // }else if(random > 0.80 && random <= 0.90){
    //     document.body.style.backgroundColor = 'purple';
    // }else{
    //     document.body.style.backgroundColor = 'greey';
    // }
});

const merah = document.querySelector('input[name=merah]');
const hijau = document.querySelector('input[name=hijau]');
const biru = document.querySelector('input[name=biru]');

merah.addEventListener('input', function() {
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';

    const textMerah = document.getElementById('merah');
    textMerah.innerHTML = ' '+r+' '
})

hijau.addEventListener('input', function() {
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';

    const textHijau = document.getElementById('hijau');
    textHijau.innerHTML = ' '+g+' '
})
biru.addEventListener('input', function() {
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;
    document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';

    const textBiru = document.getElementById('biru');
    textBiru.innerHTML = ' '+b+' '
})

document.body.addEventListener('mousemove', function(e){
    const x = Math.round((e.clientX / window.innerWidth) * 255);
    const y = Math.round((e.clientY / window.innerHeight) * 255);

    document.body.style.backgroundColor = 'rgb('+ x +', '+ y +', 100)'
})




// button.onclick = function() {
//     document.body.classList.toggle('merah');
// }
// button.addEventListener('click', function() {
//     const body = document.querySelector('body');
//     body.style.fontSize = '10px';
    
// })