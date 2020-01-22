var questions = [
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

let contentElement = document.querySelector('#content')

let h3 = document.createElement('h3')
let p = document.createElement('p')
let div = document.createElement('div')
let startQuizButton = document.createElement('button')

contentElement.appendChild(h3)
contentElement.appendChild(p)
contentElement.appendChild(div)
div.appendChild(startQuizButton)

h3.textContent = `Coding Quiz Challenge`
p.textContent = 'Try to answer the following code related questions within the time frame limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!'
p.setAttribute('class', 'button-style')
div.setAttribute('class', 'button-style')
startQuizButton.setAttribute('class', 'btn btn-sm')
startQuizButton.textContent = 'Start Quiz'
