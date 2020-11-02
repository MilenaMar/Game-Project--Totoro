
class Game {
    constructor() {
      this.player = new Player();
      this.dust = [];
      this.food = [];     
    }
  
    draw() {
      this.player.draw();

     if (frameCount % 120 === 0) {
      this.food.push(new Food());
    }

    this.food.forEach((foodOb, index) => {
      foodOb.draw();
      if (foodOb.y + foodOb.width <= 0) {
        this.food.splice(index, 1);
      }
   });

   if (frameCount % 60 === 0) {
    this.dust.push(new Dust());
  }

  this.dust.forEach((dustOb, index) => {
    dustOb.draw();
    if (dustOb.y + dustOb.width <= 0) {
      this.dust.splice(index, 1);
    }
 });
    }


  }
