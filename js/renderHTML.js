import HtmlTopics from "./htmlQuest.js";


const questionBtn = document.querySelector('.questionBtn')
const Question = HtmlTopics;

const renderHTML = (Question) => {
  Question.forEach((element, i) => {
    const topics = document.createElement('p');
    topics.classList.add('topics')
    topics.innerHTML = `<p class="topicName" id="card${i}">${element.topic}</p>`;
    questionBtn.appendChild(topics)
  });
}
renderHTML(Question)

// *********************************************

const card = document.querySelectorAll('.topicName')
const AnswerHeadingHere = document.querySelector('.AnswerHeadingHere')
const htmlContainer = document.querySelector('.htmlContainer')
const QuestionHere = document.querySelector('.QuestionHere')
const AnswerHere = document.querySelector('.AnswerHere')


AnswerHeadingHere.style.display = "none"

card.forEach((Cardelem) => {
  Cardelem.addEventListener('click', () => {
    // Hide the HTML container and show the "go back" button
    htmlContainer.style.display = 'none';
    goBack.style.display = 'inline-flex';
    
    
    

    // Create a new div to display the topic name
    const div = document.createElement('div');
    div.setAttribute('id', 'AnswerHeadingContainer');
    div.innerHTML = Cardelem.innerHTML;

    // Check if the div already exists, and remove it if so
    const existingDiv = document.getElementById('AnswerHeadingContainer');
    if (existingDiv) {
      existingDiv.remove();
    }
    // Append the new div to the AnswerHeadingHere container
    AnswerHeadingHere.appendChild(div);

    // **********************************

    AnswerHeadingHere.style.display = "block";

    // Find the selected topic from the Question array based on the clicked card
    const selectedTopic = Question.find(item => item.topic === Cardelem.innerHTML.trim());
    if (selectedTopic) {
      console.log(selectedTopic);
      // Clear any previous questions before appending new ones
      QuestionHere.innerHTML = "";

      // Iterate over the questions of the selected category and display them
      selectedTopic.question.forEach((elem, i) => {
        // console.log(elem);
        const p = document.createElement('p');
        p.setAttribute('class', 'seeYourQ');
        p.innerHTML = `${i + 1} | ${elem.quest}`;
        // Append the question to the container
        QuestionHere.appendChild(p);
        // console.log(QuestionHere);

        // Use event delegation for the `.seeYourQ` elements
        const seeYourQ = document.querySelectorAll('.seeYourQ')
        console.log(seeYourQ);

        seeYourQ.forEach((ele,index) => {
        ele.addEventListener('click',()=>{
          console.log(ele);
          // AnswerHere.style.display = "block";
          AnswerHere.style.right = "25%"
          const selectedAnswer = selectedTopic.question[index]
          console.log(selectedAnswer.definition);
          // renderAnswer.forEach(Answer => {
          //   console.log(Answer.definition);
            AnswerHere.innerHTML = selectedAnswer.definition;
          // })
        })
        })
        
      });
    }
  });
});




// **********************************************

const goBack = document.querySelector('.go-back-btn ')

goBack.addEventListener('click', () => {
  htmlContainer.style.display = 'block';

  const existingDiv = document.getElementById('AnswerHeadingContainer');
  if (existingDiv) {
    existingDiv.style.display = 'none';
  }

  goBack.style.display = 'none';
  QuestionHere.innerHTML = ""; // Clear any displayed questions
  AnswerHeadingHere.style.display = "none";
  AnswerHere.innerHTML = "";
  AnswerHere.style.right = "-100%";  
});


// ********************************************

export default renderHTML;