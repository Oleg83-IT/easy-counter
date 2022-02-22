const minus = document.getElementById('minus')

const plus = document.getElementById('plus')

const resetCounter = document.getElementById('reset-counter')

const totalCount = document.getElementById('totalCount')

const counterStep = document.getElementById('counter-step')

const resetCounterStep = document.getElementById('reset-counter-step')

const resetBoth = document.getElementById('reset-both')

const stepValue = document.getElementById('step-value')

let counter = 0

const setInnerText = 
  counterValue => totalCount.innerText = `Total count: ${counterValue}`

setInnerText(counter)

stepValue.innerText = counterStep.value

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

resetCounterStep.onclick = () => {
  counterStep.value = 1
  stepValue.innerText = counterStep.value
}

resetBoth.onclick = () => {
  resetCounter.onclick()
  resetCounterStep.onclick()
}

counterStep.onchange = () => {
  stepValue.innerText = counterStep.value
}

counterStep.onmousemove = () => {
  stepValue.innerText = counterStep.value
}
