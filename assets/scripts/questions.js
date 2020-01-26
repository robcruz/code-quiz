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

let scoreArr = []
let questionsArrayIndex = 0
let buttonsIndex = 0
let startContainer = document.querySelector('#start-container')
let questionContainer = document.querySelector('#question-container')
let questionElement = document.querySelector('#question')
startContainer.addEventListener('click', function (event) {
  startContainer.remove()
  renderQuestion(questionsArrayIndex)
})

function renderQuestion(index) {
  questionsArrayIndex++
  let buttonsArr = []
  let question = questions[index]
  questionElement.textContent = question['title']

  question['choices'].forEach((choice, index) => {
    let button = document.querySelector(`button[class="choice-button"][data-index="${index+1}"]`)
    button.innerText = `${index+1}. ${choice}`
    buttonsArr[index] = button
    buttonsArr[index].addEventListener('click', function (event) {
      if (questionsArrayIndex === questions.length) {
        questionElement.textContent = 'Done!'
        questionContainer.remove()
        return
      }
      renderQuestion(questionsArrayIndex)
    })
  })
  // loadChoiceButtonListeners(buttonsArr)
  // question['answer']

}

function loadChoiceButtonListeners(buttons) {
  buttons.forEach((button, index) => {
    // render buttons

    //record it


    //render next question
  })
}
