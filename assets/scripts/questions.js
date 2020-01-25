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

let content = document.querySelector('#content')
let h3 = document.createElement('h3')
let p = document.createElement('p')
let div = document.createElement('div')
let startQuizButton = document.createElement('button')
let answerArr = []
let button = document.createElement('button')

let questionsIndex = 0



startQuizButton.addEventListener('click', startQuiz)


loadLandingPage()


function startQuiz(event){
  event.preventDefault()
  h3.remove()
  p.remove()
  div.remove()

  let h4 = document.createElement('h4')
  button.textContent = 'continue'


  content.appendChild(h4)
  h4.innerHTML = questions[questionsIndex]['title']

  let br = document.createElement('BR')
  questions[questionsIndex]['choices'].forEach(choice => {
    let button = document.createElement('button')
    content.appendChild(button)
    button.innerText = choice
    // div.appendChild(document.createElement('BR'))
    button.append(document.createElement('BR'))
    // button.append(document.createElement('br'))
    // document.write('<br/>')
  })


}

function loadLandingPage() {
  content.appendChild(h3)
  content.appendChild(p)
  content.appendChild(div)
  div.appendChild(startQuizButton)

  div.setAttribute('class', 'button-style')

  h3.textContent = `Coding Quiz Challenge`
  p.innerText = ''
  p.setAttribute('class', 'button-style')
  startQuizButton.setAttribute('class', 'btn btn-sm')
  startQuizButton.textContent = 'Start Quiz'
}

