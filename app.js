var cpuChoice = ['Rock','Paper','Scissors'];
var playAgain = true;

do {
  var turns = 1;
  var input = '';
  var usrScore = 0;
  var cpuScore = 0;
  input = prompt('Would you like to play Rock, Paper, Scissors?\n(y)Yes\n(n)No');
  if (input=='n') {
    playAgain = false;
  } else if (input=='y') {
    while (turns<=5 && usrScore <3 && cpuScore<3) {
      var cpuRand = Math.floor(Math.random()*3);
      var usrChoice = prompt('(r)Rock\n(p)Paper\n(s)Scissors');
      switch (cpuChoice[cpuRand]) {
        case 'Rock':
          if (usrChoice =='r') {
            alert('CPU picked: '+cpuChoice[cpuRand]+'. It\'s a draw');
          } else if (usrChoice == 'p') {
            alert('CPU picked: '+cpuChoice[cpuRand]+'. You are the WinRaR');
            usrScore++;
          } else if (usrChoice == 's') {
            alert('CPU picked: '+cpuChoice[cpuRand]+'. You lost');
            cpuScore++;
          } else {
            alert('CPU wins by default, pick a real choice next time');
            cpuScore++;
          }
          break;
        case 'Paper':
          if (usrChoice =='r') {
            alert('CPU picked: '+cpuChoice[cpuRand]+'. You lost');
            cpuScore++;
          } else if (usrChoice == 'p') {
            alert('CPU picked: '+cpuChoice[cpuRand]+'. It\'s a draw');
          } else if (usrChoice == 's') {
            alert('CPU picked: '+cpuChoice[cpuRand]+'. You are the WinRaR');
            usrScore++;
          } else {
            alert('CPU wins by default, pick a real choice next time');
            cpuScore++;
          }
          break;
        case 'Scissors':
          if (usrChoice =='r') {
            alert('CPU picked: '+cpuChoice[cpuRand]+'. You are the WinRaR');
            usrScore++;
          } else if (usrChoice == 'p') {
            alert('CPU picked: '+cpuChoice[cpuRand]+'. You lost');
            cpuScore++;
          } else if (usrChoice == 's') {
            alert('CPU picked: '+cpuChoice[cpuRand]+'. It\'s a draw');
          } else {
            alert('CPU wins by default, pick a real choice next time');
            cpuScore++;
          }
          break;
        default:
      }//switch close
      turns++;
      alert('CPU score: '+cpuScore+'\nYour Score: '+usrScore);
    }//while loop close
  }
  if(usrScore>cpuScore){
    alert('Winner, winner chicken dinner!');
  } else if (cpuScore>usrScore) {
    alert('You take the L, embaressment fills your heart, how will you ever recover?');
  } else if(usrScore==cpuScore){
    alert('A draw, how very normal.');
  }
} while (playAgain);
