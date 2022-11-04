
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
 
let playerMove = 'nieznany ruch';
 
if (playerInput == '1'){
        playerMove = 'kamień';
    }else if (playerInput == '2') {
        playerMove = 'papier';
    }else {
        playerMove = 'nożyce';
};
 
printMessage('Twój ruch to: ' + playerMove);
 
let randomNumber = Math.floor(Math.random() * 3 + 1);
 
let computerMove = 'nieznany ruch';
 
if(randomNumber == 1){
  computerMove = 'kamień';
}else if (randomNumber==2){
    computerMove = "papier";
}else {
    computerMove = 'nożyce';
};
 
printMessage('Komputer wybrał: ' + computerMove);
 
 
if ( playerMove == "kamień" && computerMove == "papier") {
    printMessage('Przegrałeś!');
}else if (playerMove == "kamień" && computerMove == "nożyce") {
    printMessage('Ty wygrywasz!');
}else if (playerMove == "papier" && computerMove == "kamień") {
    printMessage('Ty wygrywasz!');
}else if (playerMove == "papier" && computerMove == "nożyce") {
    printMessage('Przegrałeś');
}else if (playerMove == "nożyce" && computerMove == "papier") {
    printMessage('Ty wygrywasz!');
}else if (playerMove == "nożyce" && computerMove == "kamień") {
    printMessage('Przegrałeś');
}else if (playerInput>3 || playerInput<0) {
    printMessage('Błąd! wybierz cyfrę od 1 do 3!')
}else{
    printMessage('Remis');
};
