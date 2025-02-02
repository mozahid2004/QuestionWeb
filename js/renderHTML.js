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

const topic = document.querySelector('.topics')
// console.log(topic);
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

    const div = document.createElement('div');
    div.setAttribute('id', 'AnswerConatainer')
    div.innerHTML = elem.innerHTML;

    const existingDiv = document.getElementById('AnswerConatainer');
    if (existingDiv) {
      existingDiv.remove();
    }
    
    AnswerHere.appendChild(div)
    
    if (elem.innerHTML) {
      // console.log('likha h');
      let updateText = elem.innerHTML
      // console.log(updateText);
      updateText = " "
    } else {
      console.log('Khali h');
    }
  })
})


// **********************************************




export default renderHTML;