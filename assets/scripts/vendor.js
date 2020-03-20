//starting script

const userInput = document.getElementById('input-number');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');

const currentResultOuptut = document.getElementById('current-result');
const currentCalculationOutput = document.getElementById('current-calculation');

function outputResult(result,text)
{
  currentResultOuptut.textContent = result;
  currentCalculationOutput.textContent = text;
}

//.textContent : overwrites code in HTML as a text