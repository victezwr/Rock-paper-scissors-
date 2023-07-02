let finalResults = document.querySelector('.results-decider');
let randomNumber = '' ;
let result = '';
let showOutPut = '';
let outPut = document.querySelector('.results');
let final = document.querySelector('.final')
let scores = {
  Wins : 0 ,
  Loses : 0 ,
  Ties : 0
};
function computerMove() {
   randomNumber = Math.random();
    if (randomNumber >= 0  && randomNumber < 1/3) {
       result = 'rock' 
    }else if (randomNumber >= 1/3 && randomNumber < 2/3 ) {
      result = 'paper' 
    }else if (randomNumber >= 2/3 && randomNumber < 1) {
      result = 'scissors'
    }
}
let score = document.querySelector('.scores-one');


function clearAll () {
  if (finalResults){
    finalResults.innerHTML = '';
  }
  final.innerHTML = ``
  score.innerHTML = ``
  scores.Loses = 0
  scores.Ties = 0
  scores.Wins = 0
}
function playerMove(move) {
  const play = computerMove() ;
 if(move === 'scissors') {
  if ( result === 'rock') {
    showOutPut = 'You loose';
  }else if ( result === 'paper') {
    showOutPut = 'You Win';
  }else if (result === 'scissors'){
    showOutPut = 'Tie';
  }
 
 }
 

 if (move === 'rock') {
  if ( result === 'rock') {
    showOutPut = 'Tie';
   }else if ( result === 'paper') {
    showOutPut = 'You loose';
   }else if (result === 'scissors'){
    showOutPut = 'You Win';
   }
   
 }
 

 if (move === 'paper') {
  if ( result === 'rock') {
    showOutPut = 'You Win';
  }else if ( result === 'paper') {
    showOutPut = 'Tie';
  }else if (result === 'scissors'){
    showOutPut = 'You loose';
  }
 }
 if ( showOutPut === 'Tie') {
  scores.Ties += 1;
}else if ( showOutPut === 'You loose' ) {
  scores.Loses += 1 ;
}else if ( showOutPut === 'You Win' ) {
  scores.Wins += 1;
}

 finalResults.innerHTML = `You <img src="myImages/${move}-emoji.png" alt="rock">
 <img src="myImages/${result}-emoji.png" alt="rock"> computer`
  final.innerHTML = `${showOutPut}`
  score.innerHTML = `Wins: ${scores.Wins}
Loses : ${scores.Loses}
Tie : ${scores.Ties}`;
if ( scores.Wins === 11) {
  alert('Hurray, You Win');
  finalResults.innerHTML = ''
  final.innerHTML = ``
  score.innerHTML = ``
  scores.Loses = 0
  scores.Ties = 0
  scores.Wins = 0
}else if ( scores.Loses === 11) {
  alert('You loose, Better luck Next Time');
  finalResults.innerHTML = ''
  final.innerHTML = ``
  score.innerHTML = ``
  scores.Loses = 0
  scores.Ties = 0
  scores.Wins = 0
}
}




