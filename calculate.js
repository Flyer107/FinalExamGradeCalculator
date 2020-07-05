var text = document.getElementById('gradeNeeded');
var btn = document.getElementById('calculate');


var changeColor = function() {
  newColor = '#' + (Math.random()*0xFFFFFF<<0).toString(16);
  console.log(newColor.length);
  if(newColor.length < 7) {
    changeColor();
  }
}

function calculate() {
  var current = Number(document.getElementById("currGrade").value);
  var worth = Number(document.getElementById("finWorth").value);
  var objective = Number(document.getElementById("gradeObjective").value);
  var worthPerc = worth/100;
  return 'Required Final Exam Grade: ' + ((objective - ((1 - worthPerc) * current)) /worthPerc).toFixed(2) + '%';
}

btn.addEventListener('click', function() {
  changeColor();
 
  document.body.style.background = newColor;
  btn.style.color = newColor;
  text.innerText = calculate();
  
});

// F = ( G - ((1-w) x C) )/w