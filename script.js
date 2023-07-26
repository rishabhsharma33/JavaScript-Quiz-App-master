const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'Which animal is known as the "Ship of the Desert"?',
    answers: [
      { text: 'Capybara', correct: false },
      { text: 'Whale', correct: false },
      { text: 'Camel', correct: true },
      { text: 'Tortoise', correct: false }
    ]
  },
  {
    question: 'Who is the first citizen of India?',
    answers: [
      { text: 'The President of India ', correct: true },
      { text: 'The Prime Minister of India', correct: false },
      { text: 'Me', correct: false },
      { text: 'IDK', correct: false }
    ]
  },
  {
    question: 'Which festival is called the festival of colours?',
    answers: [
      { text: 'Diwali', correct: false },
      { text: 'Holi', correct: true }
    ]
  },
  {
    question: 'How many days a February month have in the leap year?',
    answers: [
      { text: '366', correct: false },
      { text: '29', correct: true },
      { text: '28', correct: false },
      { text: '365', correct: false },
    ]
  },
  {
    question: 'Name the longest river on the Earth?',
    answers: [
      { text: 'Ganges', correct: false },
      { text: 'Nile', correct: true },
      { text: 'Yamuna', correct: false },
      { text: 'Amazon River', correct: false },
    ]
  },
  {
    question: 'Anti-clockwise is it from left or right?',
    answers: [
      { text: 'Right', correct: false },
      { text: 'Left', correct: true },
      { text: 'Down', correct: false },
      { text: 'Up', correct: false },
    ]
  },
  {
    question: 'Which festival is known as the festival of light?',
    answers: [
      { text: 'Diwali', correct: true },
      { text: 'Holi', correct: false },
    ]
  },
  {
    question: 'Name the National Heritage Animal of India?',
    answers: [
      { text: 'Tiger', correct: false },
      { text: 'Dog', correct: false },
      { text: 'Cat', correct: false },
      { text: 'Elephant', correct: true },
    ]
  },
  {
    question: 'Who invented Radio?',
    answers: [
      { text: 'Marconi', correct: true },
      { text: 'Albert Einstein', correct: false },
      { text: 'Marie Curie', correct: false },
      { text: 'Macroni :)', correct: false },
    ]
  }
]