function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    }else if (argMoveId == 2){
        return 'papier';
    }else{
        return 'nożyce';
    };
};
 
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput);
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
 
 
printMessage('Twój ruch to: ' + playerMove);
 
printMessage('Komputer wybrał: ' + computerMove);
 
function displayResult(argPlayerMove,argComputerMove){
    if ( playerMove == "kamień" && argComputerMove == "papier") {
        printMessage('Przegrałeś!');
    }else if (argPlayerMove == "kamień" && argComputerMove == "nożyce") {
        printMessage('Ty wygrywasz!');
    }else if (argPlayerMove == "papier" && argComputerMove == "kamień") {
        printMessage('Ty wygrywasz!');
    }else if (argPlayerMove == "papier" && argComputerMove == "nożyce") {
        printMessage('Przegrałeś');
    }else if (argPlayerMove == "nożyce" && argComputerMove == "papier") {
        printMessage('Ty wygrywasz!');
    }else if (argPlayerMove == "nożyce" && computerMove == "kamień") {
        printMessage('Przegrałeś');
    }else if (argPlayerMove>3 || playerInput<0) {
        printMessage('Błąd! wybierz cyfrę od 1 do 3!')
    }else{
        printMessage('Remis');
    };
};
 
displayResult(playerMove,computerMove);
