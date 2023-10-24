function sayHello() {
  alert("Hello World!")
}

function changeBackground() {
  const body = document.querySelector("body")
  body.style.backgroundColor = "darkgrey"
}

function deleteText() {
  const elemToDeleteText = document.querySelector("#to-delete")
  elemToDeleteText.textContent = "Inhalt gelöscht"
}

function incrementCounter() {

  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num + 1
  numberElement.textContent = num

}

function decrementCounter() {

  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num - 1
  numberElement.textContent = num

}


function resetCounter() {

  const numberElement = document.querySelector("#counter")
  let num = parseInt(numberElement.textContent)
  num = num + 0
  numberElement.textContent = num

}


function writeText() {
  const inputElem = document.querySelector("#input")
  const outputElem = document.querySelector("#output")
   
  const inputValue = inputElem.value
  const outputValue = outputElem.textContent
  const newValue = outputValue + "\n" + inputValue
   
  outputElem.textContent = newValue
  }
   

  function updateRange() {
const rangeElem = document.querySelector("#range")
const headerElement = document.querySelector("#range-target")

const alpha = parseInt(rangeElem.value) / 100
const red = parseInt(document.querySelector("#red").value) / 100 * 255
const green = parseInt(document.querySelector("#green").value) / 100 * 255
const blue = parseInt(document.querySelector("#blue").value) / 100 * 255

headerElement.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`

  }


