// Fonctionnalité n°1

let footerZone = document.querySelector('footer');
footerZone.addEventListener('click',clickFooter);

let nbOfClick = 0

function clickFooter() {
  nbOfClick++
  console.log(`click numéro ${nbOfClick}`)
}

// Fonctionnalité n°2
let btnNavbar = document.querySelector('.navbar-toggler');
let navbarHeader = document.getElementById('navbarHeader');

btnNavbar.addEventListener('click',clickNavbar);

function clickNavbar() {
  // la fonction toggle permet d'ajouter la classe indiquée si elle n'est pas présente ou de la supprimer si elle est présente
  navbarHeader.classList.toggle("collapse");
}

// Fonctionnalité n°3
let firstCard = document.getElementsByClassName("card")[0];
let btnEditFirstCard = firstCard.getElementsByTagName('button')[1];

btnEditFirstCard.addEventListener('click',redCard);

function redCard() {
  firstCard.style.color = 'red';
}

// Fonctionnalité n°4
let secondCard = document.getElementsByClassName("card")[1];
let btnEditSecondCard = secondCard.getElementsByTagName('button')[1];

btnEditSecondCard.addEventListener('click',greenCard);

function greenCard() {
  if(secondCard.style.color === "") {
    secondCard.style.color = 'green';
  } else {
    secondCard.style.color = '';
  }
}

// Fonctionnalité n°5

let navbar = document.getElementsByTagName('header')[0];
navbar.addEventListener('dblclick', deleteCdn);
linkCdn = document.getElementsByTagName('link')[0]

function deleteCdn() {
  if(linkCdn.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css") {
    linkCdn.href = "javascript:void(0)"; // fonctionne très bien si on met href="" également
  } else {
    linkCdn.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
  }
}
