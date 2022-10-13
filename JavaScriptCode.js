//names and activates the displayWelcome function
function displayWelcome() { //this is the opening scope operator
    //sets the text for the displayWelcome function
    document.write("<h2>Scroll down to land at the space port and enter the Casino!</h2>");
} //this is the closing scope operator
//names and activates the displayInstructions function
function displayInstructions() { //this is the opening scope operator
    //sets the text for the instruction function
    document.write("<br/><p>This is how you play....<br/>Refresh the page to roll the antigravity dice!</p><br/><p><p>You can't win if you don't play!</p><br/>");
} //this is the closing scope operator
//this names and activates the play function for the game
function play() { //this is the opening scope operator
    //this sets the first die's variable to a random number between 1 and 6
    var die1 = Math.ceil(Math.random() * 6);
    //this sets the second die's variable to a random numbeer between 1 and 6
    //this is a problem in our code because we are using 6 sided dices
    //we comment out our code and fix it
    //var die2 = Math.ceil(Math.random() * 12);
    var die2 = Math.ceil(Math.random() * 6);
    //this sets the overall sum to be die 1 added to die 2 
    var sum = die1 + die2
    //this sets the first die to equal the first variable which is die 1
    document.write("Die 1 = " + die1)
    //a line break for space
    document.write("<br/>")
    //this sets the second die to equal the second variable which is die 2
    document.write("Die 2 = " + die2)
    //another line break for space
    document.write("<br/>")
    //this sets the sum of both die to equal the third variable which is the sum
    document.write("Sum = " + sum)
    //another line break for space
    document.write("<br/>")
    //this starts the if statement that if the sum is equal to 8 or 11
    //this is a problem in our code we have to change this to a 7 because an 8 would mean we possibly rolled doubles which would ba a tie
    //we comment out the code and fix it 
    //if (sum == 8 || sum == 11) { //this is the opening scope operator
    if (sum == 7 || sum == 11) {
        //this sets the text to tell you, you have lost
        document.write("You lose Space Cadet!")
        //a line break for space
        document.write("<br/>")
    } //this is the closing scope operator
    //this set the or else if statement that if die 1 is equal to die 2 and die 1 divided by 2 is equal to 0
    else if (die1 == die2 && die1 % 2 == 0) { //this is the opening scope operator
        //this sets the text to tell you, you have won
        document.write("DOUBLES - you win Space Ranger!")
        //a line break for space
        document.write("<br/>")
    } //this is the closing scope operator
    //this sets the else statement
    else { //this is the opening scope operator
        //this sets the text to tell you to roll aain because you have tied
        document.write("Roll again Space Cadet!")
        //a line break for space
        document.write("<br/>")
    } //this is the closing scope operator
} //this is the closing scope operator
