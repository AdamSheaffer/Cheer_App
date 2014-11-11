var $target = document.querySelector('.target');
var an = " AEFHILMNORSX"

function createPreamble(){
  var name = document.getElementById('nameInput').value;
  var $preamble = document.createElement('li');
  $preamble.textContent = "You're name is " + name + "!";
  $target.appendChild($preamble);
}

function spellName(){
  var name = document.getElementById('nameInput').value;
  var splitName = name.split('');
  console.log(splitName);
  for(var i=0; i<splitName.length; i++){
    var $li = document.createElement('li');
    var letter = splitName[i].toUpperCase();
    console.log(letter);
    if(an.indexOf(letter) > -1){
      $li.textContent = "Give me an " + splitName[i].toUpperCase() + "!";
      $target.appendChild($li);
    } else if(an.indexOf(letter) === -1) {
        $li.textContent = "Give me a " + splitName[i].toUpperCase() + "!";
        $target.appendChild($li);
    } else if (splitName[i] === ' '){
      $li.textContent = "";
      $target.appendChild($li);
    }
  }
}

function createAfterwards(){
  var name = document.getElementById('nameInput').value;
  $afterward = document.createElement('li');
  $afterward.textContent = "Gooooooooo " + name.toUpperCase() + "!";
  $target.appendChild($afterward);
}

$('form').submit(function(event){
  event.preventDefault();
  $target.innerHTML = '';
  createPreamble();
  spellName();
  createAfterwards();
});
