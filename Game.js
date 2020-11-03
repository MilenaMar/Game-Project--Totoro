
class Game {
    constructor() {
      this.player = new Player();
      this.dust = [];
      this.food = [];  
      this.dustlevel =[];  
    }
  
    draw() {
      this.player.draw();

  /* Food draw method called if the Dust object is out of the canvas  delete from the 
    the array for the food, collision check for the food object if is collision drawPlayer is false which
    enable me to draw again the image of the Player (smileTotoro) also use collision check to update the score 
    of the Player with the scoreCounter*/
     if (frameCount % 120 === 0) {
      this.food.push(new Food());
    }
    this.food.forEach((foodOb, index) => {
      foodOb.draw();
      if (foodOb.y + foodOb.height >= HEIGHT) {
        this.food.splice(index, 1);
      }
    if (this.colisionCheck(foodOb,this.player)) {
      drawPlayer = false;
      foodOb.y=-50;
      document.querySelector(".score span").innerText = this.player.scoreCounter;
      if (this.player.scoreCounter >= 10){
        speed = 3.0
      }
      else if (this.player.scoreCounter >= 5){
        speed = 2.5
      }
      }
   });
  

   /* Dust draw mathod called, if the Dust object is out of the canvas delete from the 
    the array for the dust, also check of collision for the dust if collision is true the Player lose the game.  
   */
   if (frameCount % 60 === 0) {
    this.dust.push(new Dust());
  }

  this.dust.forEach((dustOb, index) => { 
    dustOb.draw();
    if (dustOb.y + dustOb.height >= HEIGHT) {
      this.dust.splice(index, 1);
    }

    if (this.colisionCheck(dustOb, this.player)) {
      noLoop();
      document.querySelector('div.game-over').style.visibility = "visible";
    }
 });
    }
 

  /*Collision Check for Dust and Food of the 
  player if collision with the food happend the socoreCounter increases by 1*/
    colisionCheck(object, player) {
      if ((player.x-10)+ player.width < object.x ){
        return false;
      }
      if ((object.x-10) + object.width < player.x){
        return false;
      }
      if ((player.y+20) > object.y + object.height) {
        return false;
      }
      if (object.y+30 > player.y + player.height) {
        return false;
      }
      this.player.scoreCounter += 1;
      return true; 
    } 
    

  }
   

 