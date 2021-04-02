
//Funkcje

function getMoveName(argMoveId){
    if(argMoveId == 1){
        return 'kamień';
    } else if(argMoveId == 2){
        return 'papier';
    } else if(argMoveId == 3){
        return 'nożyce';
    } else {
        return 'nieznany ruch'
    }
}

function displayResult(argComputerMove, argPlayerMove){
    if((argComputerMove == 'nożyce' && argPlayerMove == 'kamień')||(argComputerMove == 'kamień' && argPlayerMove == 'papier')||(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
        printMessage('Wynik: Ty wygrywasz')
    } else if(argComputerMove == argPlayerMove){
        printMessage('Wynik: Remis')
    } else if(argPlayerMove == 'nieznany ruch'){
        printMessage('Wynik: Błędny ruch')
    } else {
        printMessage('Wynik: Ja wygrywam')
    }
}

//Losowanie liczby

let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

//Wybór komputera
/*
let computerMove = 'nieznany ruch';
if(randomNumber == 1){
    computerMove = 'kamień';
}

else if(randomNumber == 2){
    computerMove = 'papier';         
}

else if(randomNumber == 3){
    computerMove = 'nożyce';
}
printMessage('Mój ruch to: ' + computerMove);
*/


let argComputerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + argComputerMove);


//Wybór gracza


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

/*
let playerMove = 'nieznany ruch';
if(playerInput == 1){
  playerMove = 'kamień';
}

else if(playerInput == 2){
    playerMove = 'papier';
}

else if(playerInput == 3){
    playerMove = 'nożyce';
}
printMessage ('Twój ruch to: ' + playerMove);
*/

let argPlayerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + argPlayerMove);

//Wynik gry
/*
if(playerMove == 'nieznany ruch'){
    printMessage('Błedny ruch')
}
else if((computerMove == 'nożyce' && playerMove == 'kamień')
||(computerMove == 'kamień' && playerMove == 'papier')||(computerMove == 'nożyce' && playerMove == 'kamień')){
    printMessage('Ty wygrywasz')
}
else if(computerMove == playerMove) {
    printMessage('Remis')
}
else {
    printMessage('Ja wygrywam')
}
*/
displayResult(argComputerMove, argPlayerMove)