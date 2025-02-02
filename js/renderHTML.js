import HtmlTopics from "./htmlQuest.js";


const questionBtn = document.querySelector('.questionBtn')
// console.log(QuestionContainer);

const Question = HtmlTopics;

const renderHTML = (Question) => {
  Question.forEach((element, i) => {

    const topics = document.createElement('p');
    topics.classList.add('topics')
    topics.innerHTML = `
    <p class="topicName" id="card${i}">${element.topic}</p>
    `;

    questionBtn.appendChild(topics)
  });
}

renderHTML(Question)


// *********************************************

const card = document.querySelectorAll('.topicName')
// console.log(card);
let AnswerHere = document.querySelector('.AnswerHere')
const htmlContainer = document.querySelector('.htmlContainer')
console.log(htmlContainer);





card.forEach((elem) => {
  // console.log(elem);
  elem.addEventListener('click', () => {
    // const id = elem.getAttribute("id")
    // console.log(elem.innerHTML);
    // alert(id)
    htmlContainer.style.display = 'none'
    goBack.style.display = 'inline-flex'

    const div = document.createElement('div');
    div.setAttribute('id', 'AnswerConatainer')
    div.innerHTML = elem.innerHTML;


    const existingDiv = document.getElementById('AnswerConatainer');
    console.log(existingDiv);
    if (existingDiv) {
      existingDiv.remove();
    }

    AnswerHere.appendChild(div)

    console.log(existingDiv);
  })
})


// **********************************************

const goBack = document.querySelector('.go-back-btn ')

goBack.addEventListener('click', () => {
  htmlContainer.style.display = 'block'
  
  const existingDiv = document.getElementById('AnswerConatainer');
  if(existingDiv){
    existingDiv.style.display = 'none'
  }
  goBack.style.display = 'none'

})




export default renderHTML;