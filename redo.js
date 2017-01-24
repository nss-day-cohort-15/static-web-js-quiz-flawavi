
// Elements //
const form = document.getElementById("form")
const height = document.getElementById("height")
const character = document.getElementById("character")
const button = document.getElementById("button")

// variables //
const space = " "

// Functions //
const buildTree = () => {
  let selectedHeight = height.value
  let selectedChar = character.value
  for(let i = 1; i <= selectedHeight; i++){
    console.log(space.repeat(selectedHeight - i) + selectedChar.repeat(i) + selectedChar.repeat(i - 1))
  }
}

form.addEventListener("keypress", function (evt) {
  buildTree()
  var key = evt.keyCode;
  if (key === 13) {
  }
})

// === Listeners === //
button.addEventListener("click", buildTree)
