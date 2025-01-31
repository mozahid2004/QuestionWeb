//*********** Dark Mode ******************

const mover = document.querySelector('#mover');
const mode = document.querySelector('#mode');
mode.addEventListener('click', () => {
  if (mover.classList.contains('move')) {
    // Reset to default styles
    mover.classList.remove('move');
    mover.removeAttribute('style'); 
    mode.removeAttribute('style'); 
    document.body.removeAttribute('style'); 
  } else {
    // Apply dark mode styles
    mover.classList.add('move');
    mover.style.backgroundColor = 'black';
    mode.style.backgroundColor = 'white';
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
});

// *************Hamburgur*************************

const hamburger = document.querySelector('.hamburger')
const line = document.querySelector('.line:nth-child(2)')
const firstLine = document.querySelector(".line");
const lastLine = document.querySelector(".line:last-of-type"); 


hamburger.addEventListener('click' , ()=>{

  firstLine.classList.toggle('cross')
  line.classList.toggle('cross')
  lastLine.classList.toggle('cross2')

})
