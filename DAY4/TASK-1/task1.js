let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

let slideIndex = 1;
showSlides(slideIndex);



function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  
  let cards = document.getElementsByClassName('card')
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

}

let menus = document.getElementsByClassName('menu')
let row1Cards = Array.from(document.querySelectorAll('#cardsRow1 .card-first-row'))
let row2Cards = Array.from(document.querySelectorAll('#cardsRow2 .card-first-row'))
let row1CardsContainer = document.getElementById('cardsRow1')
let row2CardsContainer = document.getElementById('cardsRow2')

const cardWidth = 190; 
const visibleCardsCount = 4; 


  let focusedSection = 'menu'; 
  let focusedMenuIndex = 0;
  let focusedRow1Index = 0;
  let focusedRow2Index = 0;

  
  menus[0].focus();


document.addEventListener('keydown', (e) => {
    if (focusedSection === 'menu') {
      if (e.key === 'ArrowDown') {
        if (focusedMenuIndex < menus.length - 1) {
          focusedMenuIndex++;
          menus[focusedMenuIndex].focus();
        }
      } else if (e.key === 'ArrowUp') {
        if (focusedMenuIndex > 0) {
          focusedMenuIndex--;
          menus[focusedMenuIndex].focus();
        }
      } else if (e.key === 'ArrowRight') {
        // Move to first card of row 1
        focusedSection = 'row1';
        focusedRow1Index = 0;
        focusCardRow('row1', focusedRow1Index);
      }
    } else if (focusedSection === 'row1') {
      if (e.key === 'ArrowRight') {
        if (focusedRow1Index < row1Cards.length - 1) {
          focusedRow1Index++;
          focusCardRow('row1', focusedRow1Index);
        }
        else{
          focusCardRow('row2', 0);
          focusedSection = 'row2';
        }
      } else if (e.key === 'ArrowLeft') {
        if (focusedRow1Index > 0) {
          focusedRow1Index--;
          focusCardRow('row1', focusedRow1Index);
        } else {
          // From first card back to menus
          focusedSection = 'menu';
          menus[focusedMenuIndex].focus();
        }
      } else if (e.key === 'ArrowDown') {

        // Move down to row 2 cards
        focusedSection = 'row2';
        focusedRow2Index = Math.min(focusedRow1Index, row2Cards.length -1);
        focusCardRow('row2', 0);
      } else if (e.key === 'ArrowUp') {
        // Move up to menus
        focusedSection = 'menu';
        menus[focusedMenuIndex].focus();
      }
    } else if (focusedSection === 'row2') {
      if (e.key === 'ArrowRight') {
        if (focusedRow2Index < row2Cards.length - 1) {
          focusedRow2Index++;
          focusCardRow('row2', focusedRow2Index);
        }
      } else if (e.key === 'ArrowLeft') {
        if (focusedRow2Index > 0) {
          focusedRow2Index--;
          focusCardRow('row2', focusedRow2Index);
        } else {
          // From first card back to menus
          focusedSection = 'menu';
          menus[focusedMenuIndex].focus();
        }
      } else if (e.key === 'ArrowUp') {
        // Move up to row 1 cards
        focusedSection = 'row1';
        focusedRow1Index = Math.min(focusedRow2Index, row1Cards.length -1);
        focusCardRow('row1', focusedRow1Index);
      } else if (e.key === 'ArrowDown') {
        // Down from last row — do nothing or loop back to menu?
        // Here: loop to menu for convenience
        focusedSection = 'menu';
        menus[focusedMenuIndex].focus();
      }
    }
  });

  function focusCardRow(row, index) {
    let cards, container;
    if (row === 'row1') {
      cards = row1Cards;
      container = row1CardsContainer;
      focusedRow1Index = index;
    } else {
      cards = row2Cards;
      container = row2CardsContainer;
      focusedRow2Index = index;
    }

    // Slide cards horizontally so the focused card is visible
    let shift = 0;
    if (index >= visibleCardsCount) {
      shift = (index - visibleCardsCount + 1) * cardWidth;
    }
    container.style.transform = `translateX(${-shift}px)`;

    cards[index].focus();


    for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";

  }
  slides[index].style.display = 'block';


  for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");

    }
    dots[index].classList.add('active')
  }

