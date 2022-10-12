const num1 = document.querySelector('#num1')
const num2 = document.querySelector('#num2')
const addBtn = document.querySelector('#add')
const subBtn = document.querySelector('#sub')
const multiplyBtn = document.querySelector('#multiply')
const divideBtn = document.querySelector('#divide')
const output = document.querySelector('#output')

function getInputValues() {
  const value1 = parseInt(num1.value)
  const value2 = +num2.value

  return [value1, value2]
}

function addHandler() {
  const values = getInputValues()

  const result = values[0] + values[1]

  displayResult(result)
}

function subHandler() {
  const values = getInputValues()

  const result = values[0] - values[1]

  displayResult(result)
}

function multiplyHandler() {
  const values = getInputValues()

  const result = values[0] * values[1]

  displayResult(result)
}

function divideHandler() {
  const values = getInputValues()

  const result = values[0] / values[1]

  displayResult(result)
}

function displayResult(result) {
  output.closest('.card').style.display = 'block'
  output.innerHTML = `Результат = ${result}`
}

addBtn.addEventListener('click', addHandler)
subBtn.addEventListener('click', subHandler)
multiplyBtn.addEventListener('click', multiplyHandler)
divideBtn.addEventListener('click', divideHandler)
