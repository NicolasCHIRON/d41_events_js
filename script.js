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
let firstCard = document.getElementsByClassName("col-md-4")[0];
let btnEditFirstCard = firstCard.getElementsByTagName('button')[1];

btnEditFirstCard.addEventListener('click',redCard);

function redCard() {
  firstCard.style.color = 'red';
}

// Fonctionnalité n°4
let secondCard = document.getElementsByClassName("col-md-4")[1];
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
  if(document.styleSheets.item(0).disabled == false) {
    void(document.styleSheets.item(0).disabled = true)
  } else {
    void(document.styleSheets.item(0).disabled = false)
  }
}

// Fonctionnalité n°6
let cards = document.getElementsByClassName("col-md-4");

for (let card = 0; card < cards.length; card++) {
  let btnEditCard = cards[card].getElementsByTagName("button")[0];
  let textCard = cards[card].querySelector(".card-text");
  let imgCard = cards[card].querySelector(".card-img-top")

  btnEditCard.addEventListener('mouseover', reduceCard);

  function reduceCard() {
    textCard.classList.toggle("collapse");
      if(imgCard.style.width == false) {
      imgCard.style.width = '20%';
    } else if(imgCard.style.width == '20%') {
      imgCard.style.width = '';
    }
  }
}

// Fonctionnalité n°7
let rotateBtn = document.querySelector(".btn-secondary");
rotateBtn.addEventListener('click',rotation);

function rotation() {
  let lastCard = cards[Number(cards.length)-1]; // cards est appelé dans la fonctionnalité n°6
  let firstCard = cards[0];
  let parentDiv = lastCard.parentNode; // On initialise une variable qui a pour valeur le parent des cartes (la div avec la classe row)

  parentDiv.insertBefore(lastCard, firstCard); 
}

// Fonctionnalité n°8
let antiRotateBtn = document.querySelector(".btn-primary");
antiRotateBtn.addEventListener('click',antiRotation);

function antiRotation(event) {
  event.preventDefault();
  let lastCard = cards[Number(cards.length)-1]; // cards est appelé dans la fonctionnalité n°6
  let firstCard = cards[0];
  lastCard.after(firstCard);
}


// Fonctionnalité n°9
let btnToPush = document.querySelector('.navbar-brand');

let isOver = false;

btnToPush.addEventListener("mousedown", () => {
  isOver = true;
});

btnToPush.addEventListener("mouseup", () => {
  isOver = false;
});

btnToPush.addEventListener('mousedown', bodyChanges);

function bodyChanges() {
  document.addEventListener('keydown', keyChoices);
  function keyChoices(event) {
    if(isOver) {
      if(event.key ==="a" || event.key ==="A"){
        document.body.className ='col-4';
      } else if(event.key ==="y" || event.key ==="Y") {
        document.body.className ='offset-md-4 col-4';
      } else if(event.key ==="p" || event.key ==="P") {
        document.body.className ='offset-md-8';
      }else if(event.key ==="b" || event.key ==="B") {
        document.body.className ='';
      }
    }
  }
}

// let headerBtn = document.querySelector('strong');
// let clicTarget = false;

// headerBtn.addEventListener('mousedown', function() {
//   clicTarget = true;
// });

// document.addEventListener('click', function(event) {
//   if (event.target !== headerBtn) {
//     clicTarget = false;
//   }
// });