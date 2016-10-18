$('document').ready(function() {
  var currentPlayRed = [];
  var currentPlayBlue = [];
  var player1 = true;

  //check if currentPlay has any winning combo
  //winning combo: 123,147, 258, 369, 456, 789, 159, 357 
  var checkWinner = function(currentPlayArr) {
    var winningCombo = [
    [1,2,3], [1,4,7], [2,5,8], [3,6,9], [4,5,6], [7,8,9], [1,5,9], [3,5,7]
    ];
    for (var i = 0; i < winningCombo.length; i++) {
      var checkPoint = 0;
      for (var j = 0; j < winningCombo[i].length; j++) {
        console.log('which combo', currentPlayArr, winningCombo[i], winningCombo[i][j]);
        if (currentPlayArr.indexOf(winningCombo[i][j]) !== -1) {
          checkPoint++;
        }
        console.log('checkpoint',checkPoint);
        if (checkPoint === 3) {
          $('p').text('WE HAVE A WINNER!');
        }
      }
    }
  };

  //listen to click, add position number to array
  $('.box').on('click', function() {
    var value = $(this).text();
    console.log(value);
    //toggle player
    if (player1) {
      $(this).addClass("red");
      currentPlayRed.push(parseInt(value));
      checkWinner(currentPlayRed);
      player1 = false;
    } else {
      $(this).addClass("blue");
      currentPlayBlue.push(parseInt(value));
      checkWinner(currentPlayBlue);
      player1 = true;
    }
  });


});