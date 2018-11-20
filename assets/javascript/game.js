// Selects a random number between 19-120 for the computer
$(document).ready(function(){
    var Random = Math.floor(Math.random()*101+19)

//Move the random number between 19-120 into computer number area
$('#computerRandom').text(Random);

//Each crystal will be given number from 1-12
//blue
var num1= Math.floor(Math.random()*11+1)
//white
var num2= Math.floor(Math.random()*11+1)
//green
var num3= Math.floor(Math.random()*11+1)
//clear
var num4= Math.floor(Math.random()*11+1)

//variables
var userTotal = 0;
var wins = 0;
var loss = 0;

//counts up the wins or losses
$('#numberWins').text(wins);
$('#numberLosses').text(loss);

//resets the game after win or loss of game
function reset() {
    Random = Math.floor(Math.random() *101+19);
    //console.log(Random)
    $('#computerRandom').text(Random);
    num1 = Math.floor(Math.random()*11+1);
    num2 = Math.floor(Math.random()*11+1);
    num3 = Math.floor(Math.random()*11+1);
    num4 = Math.floor(Math.random()*11+1);
    userTotal = 0;

    $('#total').text(userTotal);
}

//if user wins
function winner() {
    wins++;
    $('#numberWins').text(wins)
    reset();
}
//if user loses
function loser() {
    losses++;
    $('#numberLosses').text(loss);
    reset()
}

//set up each jewel for onclick event to create random number
$('#blue').on('click', function() {
    userTotal = userTotal + num1;
    //console.log("Number" + userTotal);
    $('#total').text(userTotal);

        if (userTotal == Random) {
            winner();
        }
        else if (userTotal > Radom) {
            loser();
        }
})
})