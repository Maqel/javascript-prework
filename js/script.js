function getMoveName(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
    }  
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}
//***********// */
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

//Computer Move
let computerMove = 'nieznany ruch';

if(randomNumber == 1){
    computerMove = 'kamień';
}

else if(randomNumber ==2){
    computerMove = 'papier';
}

else if(randomNumber == 3){
    computerMove = 'nozyce'
}

printMessage('Mój ruch to: ' + computerMove);

//Player Move
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let playerMove = 'nieznany ruch';

if(playerInput == '1'){
    playerMove = 'kamień';
}

else if(playerInput == '2'){
    playerMove = 'papier';
}

else if(playerInput == '3'){
    playerMove = 'nozyce'
}

printMessage('Twój ruch to: ' + playerMove);

//Winning result
if(computerMove == 'kamień' && playerMove == 'papier'){
    printMessage('Ty wygrywasz!');
}

else if(computerMove == 'papier' && playerMove == 'nozyce'){
    printMessage('Ty wygrywasz');
}

else if(computerMove == 'nozyce' && playerMove == 'kamień'){
    printMessage('Ty wygrywasz');
}

else if(computerMove == playerMove){
    printMessage('Jest Remis');
}

else {
    printMessage('Ja Wygrałem');
}