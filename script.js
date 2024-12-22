// Write JavaScript code here
const displayElement = document.getElementById('display');


function appendToDisplay(value){
   const operators = ["+", "-", "*", "/"];
   const lastChar = displayElement.value.slice(-1);

   if (operators.includes(value) && operators.includes(lastChar)) {
    return;
   }


    displayElement.value += value;
}

function clearDisplay(){
    displayElement.value = "";
}

function deleteLast(){
     displayElement.value = displayElement.value.substring(0, displayElement.value.length - 1);
}

function calculateResult(){
    displayElement.value = eval(displayElement.value);
}

