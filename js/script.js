//Funkcje

function getMoveName(argMoveid){
    if(argMoveid == 1){
        return 'kamień';
    } 
    if(argMoveid == 2){
        return 'papier';
    }
    if(argMoveid == 3){
        return 'nożyce';
    } 
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
        return 'nieznany ruch';
}
    
function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
        } else {
        printMessage('Tym razem przegrywasz :(');
        }
    if(argComputerMove == 'kamień' && argPlayerMove == 'kamień'){
        printMessage('Remis!');
        } else {
        printMessage('Tym razem przegrywasz :(');
        }
    if(argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
        printMessage('Tym razem przegrywasz :(');
        } else {
        printMessage('Ty wygrywasz!');
        }
    if(argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
        printMessage('Tym razem przegrywasz :(');
        } else {
        printMessage('Ty wygrywasz!');
        }
    if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz!');
        } else {
        printMessage('Tym razem przegrywasz :(');
        }
    if(argComputerMove == 'nożyce' && argPlayerMove == 'nożyce'){
        printMessage('Remis!');
        } else {
        printMessage('Tym razem przegrywasz :(');
        }    
    if(argComputerMove == 'papier' && argPlayerMove == 'papier'){
        printMessage('Remis!');
        } else {
        printMessage('Tym razem przegrywasz :(');
        }    
    if(argComputerMove == 'papier' && argPlayerMove == 'kamień'){
        printMessage('Tym razem przegrywasz :(');
        } else {
        printMessage('Ty wygrywasz!');
        }                  
    if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz!');
        } else {
        printMessage('Tym razem przegrywasz :(');
        } 
}


//Losowanie liczby
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

//Wybór komputera

/*let computerMove = 'nieznany ruch';

if(randomNumber == 1){
    computerMove = 'kamień';
}

else if(randomNumer == 2){
    computerMove = 'papier';
}

else if(randomNumber == 3){
    computerMove = 'nożyce';
}
*/

let argComputerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + argComputerMove);



// Wybór gracza
let argPlayerMove = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + argPlayerMove);

/*let playerMove = 'nieznany ruch';

if(playerInput == 1){
  playerMove = 'kamień';
}

else if(playerInput == 2){
    playerMove = 'papier';
}

else if(playerInput == 3){
    playerMove = 'nożyce';
}
*/
let argPlayerMove = getMoveName(argPlayerMove);
printMessage('Twój ruch to: ' + argPlayerMove);



//Wynik gry

/*if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz');
}

else(computerMove == 'kamień' && playerMove == 'nożyce'){
    printMessage('Ja wygrywam');
}

else(computerMove == 'kamień' && playerMove == 'kamień'){
    printMessage('Remis');
}

if(computerMove == 'nożyce' && playerMove == 'papier'){
    printMessage('Ja wygrywam');
}

else(computerMove == 'nożyce' && playerMove == 'nożyce'){
    printMessage('Remis')
}
else(computerMove == 'nożyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz')
}

if(computerMove == 'papier' && playerMove == 'papier'){
    printMessage('Remis')
}

else(computerMove == 'papier' && playerMove == 'nożyce'){
    printMessage('Ty wygrywasz')
}

else(computerMove == 'papier' && playerMove == 'kamień'){
    printMessage('Ja wygrywam')
}
*/

displayResult(argComputerMove, argPlayerMove);

