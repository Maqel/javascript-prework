'use strict';
{
    function playGame(playerInput){

        clearMessages();
        const getMoveName = function(argMoveId){
                if(argMoveId == 1){
                    return 'kamień';
            }
                else if(argMoveId == 2){
                    return 'papier';
            }
                else if(argMoveId == 3){
                    return 'nożyce';
            }
            printMessage('Nie znam ruchu o id ' + argMoveId + '.');
            return 'nieznany ruch';
        }
        //Random Number//
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        console.log('Wylosowana liczba to: ' + randomNumber);

        //Computer Move//
        const argComputerMove = getMoveName(randomNumber);

        printMessage('Mój ruch to: ' + argComputerMove);

        //Player Move
        console.log('Gracz wpisał: ' + playerInput);
        const argPlayerMove = getMoveName(playerInput);

        printMessage('Twój ruch to: ' + argPlayerMove);

        //Winning result//
        const displayResult = function(argComputerMove, argPlayerMove){
            
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
    }

    document.getElementById('play-rock').addEventListener('click', function(){
        playGame(1);
    });
    document.getElementById('play-paper').addEventListener('click', function(){
        playGame(2);
    });
    document.getElementById('play-scissors').addEventListener('click', function(){
        playGame(3);
    });
}