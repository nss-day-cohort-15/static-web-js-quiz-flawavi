
var button = document.querySelector('#form input[type=submit]');
var lines;
var spaces;
var spaceCount = 0;
var enterKey = document.querySelector('#button');
enterKey.addEventListener('keypress', function (evt) {
    var key = e.keyCode;
    if (key === 13) {
    }
    evt.preventDefault();
});


button.addEventListener('click', function (evt) {
  var userInput = {}
  userInput.height = document.querySelector('#height').value;
  userInput.character = document.querySelector('#character').value;
  if ((userInput.height && userInput.character) && (userInput.height > 0)) {
    buildTree(userInput);
  } else {
    alert("Please enter a height of 1 or more, and a character of your choosing. :)");
  }
  evt.preventDefault();
});

function buildTree(treeObj) {
  for (var i = 1; i <= treeObj.height;) {
    spaceCount = treeObj.height - i;
    line = Array(i*2).join(treeObj.character);
    if (spaceCount > 0) {
      spaces = Array(spaceCount+1).join(' ');
      console.log(spaces+''+line);
    } else {
      console.log(line);
    }
    i++;
  }
}
