const minus = document.getElementById('minus')

const plus = document.getElementById('plus')

const totalCount = document.getElementById('totalCount')

let counter = 0

totalCount.innerText = `Total count: ${counter}`

plus.onclick = () => {
  counter++
  totalCount.innerText = `Total count: ${counter}`
}

minus.onclick = () => {
  counter--
  totalCount.innerText = `Total count: ${counter}`
}
