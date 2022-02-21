const minus = document.getElementById('minus')

const plus = document.getElementById('plus')

const resetCounter = document.getElementById('reset-counter')

const totalCount = document.getElementById('totalCount')

const counterStep = document.getElementById('counter-step')

let counter = 0

const setInnerText = counterValue => totalCount.innerText = `Total count: ${counterValue}`

setInnerText(counter)

plus.onclick = () => {
  counter += +counterStep.value
  setInnerText(counter)
}

minus.onclick = () => {
  counter -= +counterStep.value
  setInnerText(counter)
}

resetCounter.onclick = () => {
  counter = 0
  setInnerText(counter)
}
