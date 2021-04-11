{
//Funkcje
const playGame = function(playerInput){
    clearMessages()   
    const getMoveName = function(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
        } else if(argMoveId == 2){
            return 'papier';
        } else if(argMoveId == 3){
            return 'nożyce';
        }
    }

    const displayResult = function(argComputerMove, argPlayerMove){
        if((argComputerMove == 'nożyce' && argPlayerMove == 'kamień')||(argComputerMove == 'kamień' && argPlayerMove == 'papier')||(argComputerMove == 'nożyce' && argPlayerMove == 'kamień')){
            printMessage('Wynik: Ty wygrywasz')
        } else if(argComputerMove == argPlayerMove){
            printMessage('Wynik: Remis')
        } else {
            printMessage('Wynik: Ja wygrywam')
        }
    }

    //Losowanie liczby
    const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);

    //Wybór komputera
    const argComputerMove = getMoveName(randomNumber);
        printMessage('Mój ruch to: ' + argComputerMove);

    //Wybór gracza
    const argPlayerMove = getMoveName(playerInput);
        printMessage('Twój ruch to: ' + argPlayerMove);

    //Wynik gry
    displayResult(argComputerMove, argPlayerMove)
}

document.getElementById('play-rock').addEventListener('click', function(){
    playGame('1');
  });
document.getElementById('play-paper').addEventListener('click', function(){
    playGame('2');
  });
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame('3');
  });
}