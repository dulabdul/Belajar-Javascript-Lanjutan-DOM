// Method handler

const p3 = document.querySelector('.p3');

function ubahWarna(){
    p2.style.backgroundColor = 'blue';
}
const p2 = document.querySelector('.p2');
p2.onclick = ubahWarna;

// addEventLisntener()

 
p3.addEventListener('click', function () {

    const sectionA = document.querySelector('section#a');
    const pBaru = document.createElement('p')
    const textBaru = document.createTextNode('Paragraf Baru');

    pBaru.appendChild(textBaru);

    sectionA.appendChild(pBaru)
    
}) 

const p4 = document.querySelector('section#b p');
p4.style.cursor = 'pointer';

p4.addEventListener('click', function () {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const textLiBaru = document.createTextNode('List Item Baru')

    liBaru.appendChild(textLiBaru);

    ul.appendChild(liBaru);
})