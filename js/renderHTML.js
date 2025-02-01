import HtmlTopics from "./htmlQuest.js";



const QuestionContainer = document.querySelector('.QuestionContainer')
console.log(QuestionContainer);

const Question = HtmlTopics;

const renderHTML = (Question)=>{
  Question.forEach(element => {

    const topics = document.createElement('p');
    topics.classList.add('topics')

    console.log(element);
    topics.innerHTML = `
    <p class="topicName">${element.topic}</p>
    `;
    
    QuestionContainer.appendChild(topics)
  });  
}

renderHTML(Question)


export default renderHTML;