
class Game {
    constructor() {
      this.player = new Player();
      this.dust = new Dust();
      this.food = new Food();
     
    }
  
    draw() {
      this.player.draw();
      this.dust.draw();
      this.food.draw();
   }
}
  
  