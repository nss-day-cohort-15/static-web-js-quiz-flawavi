
///////////////////////////// SCRATCH 3 /////////////////////////////

var button = document.querySelector('#form input[type=submit]');
var lines;
var spaces;
var spaceCount = 0;


button.addEventListener('click', function (evt) {
  var height = document.querySelector('#height').value;
  var character = document.querySelector('#character').value;
  if ((height && character) && (height > 0)) {
    buildTree(height, character);
  } else {
    alert("Please enter a height of 1 or more, and a character of your choosing. :)");
  }
  evt.preventDefault();
});

function buildTree(height, character) {
  for (var i = 1; i <= height;) {
    spaceCount = height - i;
    line = Array(i*2).join(character);
    if (spaceCount > 0) {
      spaces = Array(spaceCount+1).join(' ');
      console.log(spaces+''+line);
    } else {
      console.log(line);
    }
    i++;
  }
}
