//Losowanie liczby
let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

//Wybór komputera
let computerMove = 'nieznany ruch';

if(randomNumber == 1){
    computerMove = 'kamień';
}

else if(randomNumer == 2){
    computerMove = 'papier';
}

else if(randomNumber == 3){
    computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);

// Wybór gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

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

printMessage('Twój ruch to: ' + playerMove);

//Wynik gry
if(computerMove == 'kamień' && playerMove == 'papier'){
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


