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

  const numberElement = document.querySelector("#zahl")
  let num = parseInt(numberElement.textContent)
  num = num + 3
  numberElement.textContent = num

}