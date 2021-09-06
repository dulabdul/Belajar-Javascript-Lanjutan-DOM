// Manipulation ELEMENT

// innerHTML

// const judul = document.querySelector('#judul');
// judul.innerHTML = '<small>Ini JUDULL</small>';

// const sectionB = document.getElementById('b');
// sectionB.innerHTML= 'Helo WOrld'

//  setAttribute
// Menambahkan attribute baru

// const judul = document.getElementById('judul');

// judul.setAttribute('name', 'abdul')

// getAttribute
// menampilkan atau meliha attribute

// const link = document.querySelector('section#a p:nth-child(3)');


// console.log(link.getAttribute('class'));

// remove attribute

// const link = document.querySelector(' a');


// console.log(link.removeAttribute('href'));

// classList

// const p = document.querySelector('.p2');

// console.log(p.classList.add('label'));

// console.log(p.classList.remove('p2'));
// classList.toggle
// menambahkan class bila blm ada, dan menghapus class bila sudah ada dengan nama yang sama
// console.log(p.classList.toggle('p-baru'));

// console.log(p.classList.item(2));


// console.log(p.classList.replace('p2', 'p10'));

// Manipulation NODE

// MENAMBAHKAN TEXT BARU DI AKHIR ELEMENT

// const pBaru = document.createElement('p');
// const pBaruText = document.createTextNode('Ini Paragraf Baru');

// pBaru.appendChild(pBaruText);

// const sectionA = document.getElementById('a');

// sectionA.appendChild(pBaru);


// const listBaru = document.createElement('li');
// const listBaruText = document.createTextNode('Ini List Baru');

// listBaru.appendChild(listBaruText);

// const sectionB = document.querySelector('section#b ul');

// sectionB.appendChild(listBaru);
// MENYIMPAN ELEMENT BUKAN DI AKHIR

// const liBaru = document.createElement('li');
// const liBaruText = document.createTextNode('Ini List Item Baru');

// liBaru.appendChild(liBaruText);

// const ul = document.querySelector('ul');
// const li = ul.querySelector('li:nth-child(3)');

// ul.insertBefore(liBaru, li)

// const sectionA = document.querySelector('section#a');
// const link = sectionA.querySelector('a');
// const p1 = sectionA.querySelector('.p1');

// sectionA.removeChild(link)
// sectionA.removeChild(p1)

// const sectionA = document.getElementById('a');
// const p1 = sectionA.querySelector('.p1');

// const h1Baru = document.createElement('h1');
// const textH1Baru = document.createTextNode('Ini H1 Dengna Javascript');

// h1Baru.appendChild(textH1Baru);

// sectionA.replaceChild(h1Baru, p1)