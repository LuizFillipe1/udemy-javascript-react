// Movendo pelo DOM
console.log(document.body);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// Selecinando por tag
const listItens = document.getElementsByTagName("li");

console.log(listItens);

// Selecionando por ID
const title = document.getElementById("title");

console.log(title);

// Selecionando elementos por classe
const product = document.getElementsByClassName("product");

console.log(product);

// Selecionando elementos por css
const productQuerry = document.querySelectorAll(".product");

console.log(productQuerry);

const mainContainer = document.querySelector("#main-container");

console.log(mainContainer);

// InsertBefore

const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title);

// appendChild
const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// replaceChild
const h2 = document.createElement("h2");

h2.textContent = "Meu título novo!";

header.replaceChild(h2, title);

// creatTextNode
const myText = document.createTextNode("Agora vamos colocar mais um titulo")

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);

// Trabalhando com atributos
const firstLink = navLinks.querySelector("a");

console.log(firstLink);

firstLink.setAttribute("href", "https://google.com");

console.log(firstLink.getAttribute("href"));

firstLink.setAttribute("target", "blank");

// altura e largura
const footer = document.querySelector("footer");

console.log(footer.offsetHeight);
console.log(footer.offsetWidth);

console.log(footer.clientHeight);
console.log(footer.clientWidth);

// posição do elementos
const product1 = product[0];

console.log(product1.getBoundingClientRect());

// css com js
mainContainer.style.color = "red";
mainContainer.style.backgroundColor = "#333";
mainContainer.style.paddingBottom = "15px";

// Alterando estilos de varios elementos
for (const li of listItens) {
    li.style.backgroundColor = "red";
}