# Belajar Javascript Lanjutan DOM WPU

## Document Object Model

---

*"Dom adalah antarmuka pemprogaman untuk HTML yang mepresentasikan halaman web, sehingga program dapat mengubah dan memanipulasi strukturnya."*

***"-Mozilla"***

*"Representasi element HTML pada dokumen menjadi sebuah object."*

***"-Web Progamming Unpas"***

---

### DOM

* Antarmuka pemprogaman berbasis objek yang mempresentasikan dokumen web
* DOM membuat seluruh komponen dari halaman web dapat diakses dan dimanipulasi
* Komponen
  * Element HTML
  * Atribut
  * Text
  * Dll
* DOM dapat dimanipulasi(dibuat,diubah,dan dihapus) dengan Javascript

### DOM Tree

DOM tree adalah representasi element element HTML di browser dalam bentuk tree/pohon.

### Tipe-Tipe Node

* Element
* Atrribute
* Text
* CData Section
* Entity Reference
* Entity
* Processing Instruction
* Comment
* Document
* Document Type
* Document Fragment
* Notation

### NodeList Vs HTML Collection

* Keduanya merupakan **kumpulan node**
* Struktur datanya mirip **array**
* **nodeList** dapat berisi node apapun, sedangkan **HTMLCollection** harus berisi element HTML saja
* **HTMLCollection** bersifat **live** sedangkan **nodeList** tidak

### Struktur Hierarki DOM Tree

* Root Node
  * **Node yang menjadi sumber dari semua node lain di dalam DOM**
  * **document**
* Parent Node
  * **Node yang berada di 1 tingkat diatas node yang lain**
  * **body adalah parent dari h1,p,p,div,dan a**
* Grant Parent
  * **Node yang berada di 2 tingkat diatas node yang lain**
* Child Node
  * **Node yang berada di 1 tingkat dibawah node yang lain**
  * **h1 adalah child dari body**

### DOM Selection

* getElementById()
  * Method untuk memilih dengan cara ID dan mengembalikan nilai dalam bentuk **Element**
* getElementsByTagName()
  * Method untuk memilih dengan tag HTML dan mengembalikan nilai dalam bentuk **HTMLCollection**
* getElementsByClassName()
  *  Method untuk memilih dengan Class HTML dan mengembalikan nilai dalam bentuk **HTMLCollection**
* querySelector()
  * Method untuk memilih dengan cara mencari selectornya dan mengembalikan nilai dalam bentuk **Element**
* querySelectorAll()
    * Method untuk memilih dengan cara mencari selectornya dan mengembalikan nilai dalam bentuk **nodeList**

### DOM Manipulation

#### Manipulaion Element

* element.innerHTML
Untuk merubah text yang di pilih
* element.style.<property>
Untuk mengubah CSS yang dipilih
* element.setAttribute()
Untuk mengubah attribute dengan javascript
* element.classList
Untuk memanipulasi class HTML
* Dll..............

#### Manipulation Node
* document.createElement()
* document.createTextNode()
* node.appendChild()
* node.insertBefore()
* parentNode.removeChild()
* parentNode.replaceChild()
* Dll............

### Events

*"Event pada javascript merepresentasikan sebuah kejadian yang terjadi di dalam DOM"*

***-Mozilla Developer***

#### Cara *"Mendengarkan"* Event
* Event Handler
  * Inline HTML Attribute
  * Elment Method
* addEventListener()

### DOM Traversal Method
* parentNode => Node
* parentElement => Element
* nextSibling => Node
* nextElementSibling => Element
* previousSibling => Node
* previousElementSibling => Element
