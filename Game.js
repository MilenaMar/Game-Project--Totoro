
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

    if (this.colisionCheck(foodOb,this.player)) {
      drawPlayer = false;
      foodOb.y=-50;
      document.querySelector(".score span").innerText = this.player.scoreCounter;
      if (this.player.scoreCounter >= 5){
        speed = 2.5
        console.log(speed)
      }
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

    if (this.colisionCheck(dustOb, this.player)) {
      noLoop();
      document.querySelector('div.game-over').style.visibility = "visible";
    }
 });
    }

    colisionCheck(object, player) {
      if ((player.x-50)+ player.width < object.x ){
        return false;
      }
      if (object.x + object.width < (player.x+50) ){
        return false;
      }
      if ((player.y+20) > object.y + object.height) {
        return false;
      }
      if (object.y > player.y + player.height) {
        return false;
      }
      this.player.scoreCounter += 1;
      return true;
      
    } 
    

  }
   

 