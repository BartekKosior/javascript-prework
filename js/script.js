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

if(playerInput == '1'){
  playerMove = 'kamień';
}

else if(randomNumer == 2){
    playerMove = 'papier';
}

else if(randomNumber == 3){
    playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove);