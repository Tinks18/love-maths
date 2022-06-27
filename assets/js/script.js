//Wait for the dom to finidh loading before running the game
//Get the button elements and event listeners to them 

document.addEventListener("DOMContentLoaded", function(){
    let buttons = this.getElementsByTagName('button');

    for (let button of buttons){
        button.addEventListener("click", function(){
            if(this.getAttribute("data-type") === "submit"){
                alert("You clicked Submit!");
            }else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})

/**
 * the main  game loop, called when the function is first loaded
 * and after the users input has been processed
 */

function runGame(gameType){
    //Creates two random numbers between 1 and 25
   let num1 = Math.floor(Math.random()*25)+1;
   let num2 = Math.floor(Math.random()*25)+1;

   if (gameType === "addition") {
    displayAdditionQuestion(num1, num2);
   }else{
    alert(`unknown game type: ${gameType}`);
    throw `unknown game type: ${gameType}. Aborting!`;
   }
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion(){
    
}

function displayMultiplyQuestion(){
    
}