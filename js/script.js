 //*********** Dark Mode ******************

const mover = document.querySelector('#mover');
const mode = document.querySelector('#mode');
const hamburger = document.querySelector('.hamburger')
const line = document.querySelector('.line:nth-child(2)')
const firstLine = document.querySelector(".line");
const lastLine = document.querySelector(".line:last-of-type"); 
const mobilelink = document.querySelector('.mobilelink')
const mnavOpt = document.querySelectorAll('.mnavOpt')



mode.addEventListener('click', () => {
  if (mover.classList.contains('move')) {
    // Reset to default styles
    mover.classList.remove('move');
    mover.removeAttribute('style'); 
    mode.removeAttribute('style'); 
    document.body.removeAttribute('style');
    mnavOpt.forEach(element => {
      // console.log(element);
      element.style.color = 'white'
    }); 
    
  } else {
    // Apply dark mode styles
    mover.classList.add('move');
    mover.style.backgroundColor = 'white';
    mode.style.backgroundColor = 'black';
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
    mobilelink.style.color = 'black'
    mobilelink.style.backgroundColor = 'rgba(56, 88, 64, .9);'
    mnavOpt.forEach(element => {
      // console.log(element);
      element.style.color = 'black'
    });
  }
});

// *************Hamburgur*************************




hamburger.addEventListener('click' , ()=>{

  firstLine.classList.toggle('cross')
  line.classList.toggle('cross')
  lastLine.classList.toggle('cross2')
  mobilelink.classList.toggle('show')

})

// printQuestion()
// console.log(htmlQuest)
// console.log(renderHTML());
