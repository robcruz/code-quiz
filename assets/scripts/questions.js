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
let buttonsArr = []
let startContainer = document.querySelector('#start-container')
let questionElement = document.querySelector('#question')


startContainer.addEventListener('click', function (event) {
  startContainer.remove()
  renderQuestion(questionsArrayIndex)
})


function renderQuestion(index) {
  let question = questions[index]
  questionElement.textContent = question['title']

  question['choices'].forEach((choice, index) => {
    buttonsArr.push(document.querySelector(`button[class="choice-button"][data-index="${index+1}"]`))
  })
  loadChoiceButtonListeners(buttonsArr)
  question['answer']

  questionsArrayIndex++
}

function loadChoiceButtonListeners(buttons) {
  buttons.forEach(button => {
    //record it

    //render next question
  })
}
