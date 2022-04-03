function getMoveName(argMoveId){
        if(argMoveId == 1){
            return 'kamień';
    }
        else if(argMoveId == 2){
            return 'papier';
    }
        else if(argMoveId == 3){
            return 'nożyce'
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}
//***********//
let randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('Wylosowana liczba to: ' + randomNumber);

//Computer Move//
let argComputerMove = getMoveName(randomNumber);

printMessage('Mój ruch to: ' + argComputerMove);

//Player Move
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);
let argPlayerMove = getMoveName(playerInput);

printMessage('Twój ruch to: ' + argPlayerMove);

//Winning result//
function displayResult(argComputerMove, argPlayerMove){
    
    if(argComputerMove == 'kamień' && argPlayerMove == 'papier'){
        printMessage('Ty wygrywasz!');
    } 
    else if(argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
        printMessage('Ty wygrywasz');
    } 
    else if(argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
        printMessage('Ty wygrywasz');
    } 
    else if(argComputerMove == argPlayerMove){
        printMessage('Jest Remis');
    }
    else {
        printMessage('Ja Wygrałem');
    }
};
displayResult(argComputerMove, argPlayerMove);