function preload() {
    totoro = loadImage("./assest/totoro.png");
    backImg = loadImage("./assest/Background.jpg")
   
  }
  const game = new Game();

  function setup() {
    createCanvas(WIDTH,HEIGHT);

  }

  function draw() {
    background("cyan");
    image(backImg, 0, 0, width, height);
    game.draw();
  }