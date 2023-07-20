var outputScreen = document.getElementById('output-screen');

function display(value) {
  outputScreen.value += value;
}

function Clear() {
  outputScreen.value = '';
}

function del() {
  outputScreen.value = outputScreen.value.slice(0, -1);
}

function sqrt() {
  outputScreen.value = Math.sqrt(outputScreen.value);
}
function perc() {
  outputScreen.value = outputScreen.value / 100;
}

function e() {
  outputScreen.value = Math.E;
}
function pow() {
  var power = parseFloat(outputScreen.value);
  outputScreen.value = Math.pow(outputScreen.value, power);
}



function Calculate() {
  try {
    outputScreen.value = eval(outputScreen.value);
  } catch (error) {
    outputScreen.value = 'Error';
  }
}
