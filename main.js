let readlineSync  =  require('readline-sync');

let playAgain = true;


while(playAgain){
  // answer = readlineSync.question('Do you wanna play again? Yes or No. ')
  let answer = readlineSync.question('Do you wanna play a drinking game? Yes or No. ')
  
  if(answer == 'no' || answer == 'n' || answer == 'Nay' || answer == 'N') {
    console.log("Too bad. You must play.");
    playAgain = false
  }
  if(answer == 'yes' || answer == 'y' || answer == 'si' || answer == 'Y') {
    console.log("ok, lets keep playing")}

  let gameType  = readlineSync.question("What is your preference? Beer or Wine. ")
  if(gameType == 'beer' || gameType == 'beers' || gameType == 'Beer' || gameType == 'Beers') {

    console.log("take a sip");
    playAgain = true

  }
  if(gameType == 'wine' || gameType == 'Wine' || gameType == 'wines' || gameType == 'Wines') {

    console.log("take a sip");
    playAgain = true
    }


  }


console.log('Okay then goodbye and have a nice day.');
