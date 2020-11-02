function preload() {
    totoro = loadImage("./assest/totoro.png");
    backImg = loadImage("./assest/Background.jpg")
    dust = loadImage("./assest/dust.png")
    food = loadImage("./assest/acorn.png")
   
  }
  const game = new Game();
  const scoreBox = document.querySelector(".score span");
  let gameStatus = false;

  function setup() {
    createCanvas(WIDTH,HEIGHT);
  }

  function draw() {
    background("cyan");
    image(backImg, 0, 0, width, height);
    if (gameStatus === true){
    game.draw();
    }
}


  function keyPressed() {
     if (keyCode === 37) {
      game.player.moveLeft();
    } else if (keyCode === 39) {
      game.player.moveRight();
    }

    // Press Space Bar to start the game // Game status change to True
      if (keyCode === 32){
      gameStatus = true;
      document.querySelector('div.start-game').style.visibility = "hidden";
      scoreBox.style.visibility = 'visible';
      } 
  }


