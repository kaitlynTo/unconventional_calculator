const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; //empty array initialization

//Gets input from input field and convert it to an actual number
function getUserNumberInput(){
    return parseInt(userInput.value);
}

//generate and display the currentCalculationOutput log
function createAndWriteOutput(resultBeforeCalc, operator,calcNumber){
    const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`; //automatically treated as string
    outputResult(currentResult,calcDescription); //from vendor.js
}

function writeToLog(operationIdentifier,prevResult,operationNumber,newResult){
        const logEntry = {
            operation:  operationIdentifier,
            prevResult: prevResult,
            number: operationNumber,
            result: newResult
        }; //object for one logEntry
        logEntries.push(logEntry);
        console.log(logEntries);
    }

function add(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult; //currentResult still needs to be displayed for the calculation output
    currentResult += enteredNumber; 
    createAndWriteOutput(initialResult,'+',enteredNumber);
    writeToLog('ADD',initialResult,enteredNumber,currentResult);
}

function subtract(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult -= enteredNumber; 
    createAndWriteOutput(initialResult,'-',enteredNumber);
    writeToLog('SUBTRACT',initialResult,enteredNumber,currentResult);
}

function multiply(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult *= enteredNumber; 
    createAndWriteOutput(initialResult,'*',enteredNumber);
    writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult);
}

function divide(){
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber; 
    createAndWriteOutput(initialResult,'/',enteredNumber);
    writeToLog('DIVIDE',initialResult,enteredNumber,currentResult);
}    

addBtn.addEventListener('click',add);
    //add() : direct function execution
    //add : indirect function execution
    //don't execute the function right away, execute when the button is clicked
    //browser can execute the function by this
    //providign the address of the function
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click',multiply);
divideBtn.addEventListener('click',divide);