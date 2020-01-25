let questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  ///etc.
];

let questionsArrayIndex = 0
let startContainer = document.querySelector('#start-container')
let questionElement = document.querySelector('#question')

loadEventListeners()

function loadEventListeners(){
  startContainer.addEventListener('click', function (event) {
    startContainer.remove()
    renderQuestion(questionsArrayIndex)
  })


}

function renderQuestion(index) {
  let question = questions[index]
  questionElement.textContent = question['title']

  question['choices'].forEach((choice, index) => {

  })
  question['answer']

  questionsArrayIndex++
}


