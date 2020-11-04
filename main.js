
function preload() {
    totoro = loadImage("./assest/totoro.png");
    backImg = loadImage("./assest/Background.jpg")
    dust = loadImage("./assest/dust.png")
    food = loadImage("./assest/acorn.png")
    dustTo = loadImage("./assest/totoroD.png");
    secondLevel =loadImage("./assest/secondLevel.jpg");
    enemydust =loadImage("./assest/dust3.png");
    thirdLevel =loadImage("./assest/3level.jpg");
    umbrella = loadImage("./assest/boost.png");

    
    
  }
  const game = new Game();
  const scoreBox = document.querySelector(".score span");
  let gameStatus = false;

  function setup() {
     canvas = createCanvas(WIDTH,HEIGHT);
     canvas.parent('canvas-holder');
     anthem = loadSound("./audio/anthem.mp3", loadedSound);
     bite = loadSound("./audio/bite.mp3");
     pain =loadSound("./audio/pain.mp3");
  }

   function loadedSound(){
     anthem.play();
     anthem.setVolume (0.1);
   }
  function draw() {
    image(backImg, 0, 0, width, height);
    
if (game.player.scoreCounter >= 10){
  image(thirdLevel, 0, 0, width, height);
} 
else if (game.player.scoreCounter >= 5){
  image(secondLevel, 0, 0, width, height);
  }
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
    // Press Space Bar to start the game // Game status change to True // visivility CSS change 
      if (keyCode === 32){
      gameStatus = true;
      document.querySelector('div.start-game').style.visibility = "hidden";
      document.querySelector('div.hidden').style.visibility="hidden";
      } 

  }


