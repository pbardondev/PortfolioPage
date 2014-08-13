(function (root) {
  var S = root.S = (root.S || {});

  var SnakeUI = S.SnakeUI = function($rootEl) {
    this.$el = $rootEl;
    this.speedCounter = 0;
  };

  SnakeUI.STEP_MILLIS = 100;

  SnakeUI.prototype.setUpBoard = function () {
    this.$el.html(this.buildBoard(15));
    this.start();
  };



  SnakeUI.prototype.buildBoard = function(num){
    var squareString = "";
    _.times(num, function (i) {
      squareString += "<div class='row" + i + "'>";
      _.times(num, function(j) {
      squareString += "<div class='square col" + j + "'></div>";
      });
      squareString += "</div>";
    });
    return squareString;
  };

  SnakeUI.prototype.start = function() {
    this.board = new S.Board(this);
    $(window).on("keydown", handlekeyEvent.bind(this.board));
    this.interID = setInterval(this.turn.bind(this), 250);
  };

  SnakeUI.prototype.gameOver = function() {
    clearInterval(this.interID);
    this.board.renderGameOver();
    this.stopGame();
  };

  SnakeUI.prototype.turn = function() {
    this.board.render();
    this.board.snake.move(this);

    // if (this.board.snake.points % 5 === 0 && this.board.snake.points !== 0) {
    //   this.increaseSpeed();
    //   this.increased = true;
    // }
  };

  SnakeUI.prototype.increaseSpeed = function() {
    if (!this.increased) {
      this.speedCounter += 1;
      clearInterval(this.interID);
      clearInterval(this.speedID);
      this.speedId = setInterval(this.turn.bind(this), (300 - this.speedCounter));
    }
  };

  SnakeUI.prototype.pauseGame = function() {
    clearInterval(this.interID);
  };

  SnakeUI.prototype.restartGame = function() {
    this.interID = setInterval(this.turn.bind(this), 250);
  };



  SnakeUI.prototype.stopGame = function() {
    clearInterval(this.speedId);
  };

  var handlekeyEvent = function(event) {
    if (event.keyCode === 65) {
      this.snake.turn("E");
    } else if (event.keyCode === 87) {
      this.snake.turn("N");
    } else if (event.keyCode === 68) {
      this.snake.turn("W");
    } else if (event.keyCode === 83) {
      this.snake.turn("S");
    } else if (event.keyCode === 80) {
       this.ui.pauseGame();
    } else if (event.keyCode === 71) {
      this.ui.restartGame();
    }
  };

  window.onload = function() {
   document.getElementById("restart").addEventListener('click', function() {
      window.location.reload();
   }, false);
  };



})(this);
