
class Game {
    constructor() {
      this.player = new Player();
      this.dust = [];
      this.food = [];  
      this.dustlevel =[];  // object introduce in level 3
      this.boost = [] // boost for the game 
    }
  
draw() {
      this.player.draw();
  /* Food draw method called if the Dust object is out of the canvas  delete from the 
    the array for the food, collision check for the food object if is collision drawPlayer is false which
    enable me to draw again the image of the Player (smileTotoro), increase the speed of the food and Dust
     base on the scoreCounter*/
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
      this.player.scoreCounter += 1;
      if (this.player.scoreCounter >= 10){
        speed = 3.3
      }
      else if (this.player.scoreCounter >= 5){
        speed = 2.5
      }
      this.food.splice(index, 1);
      document.querySelector(".score span").innerText = this.player.scoreCounter;
      }
    });


    /// Boost Introduced to the game 
    if (frameCount % 600 === 0) {
      this.boost.push(new Boost()); 
    }
    this.boost.forEach((boostOb, index) => { 
      boostOb.draw();
      if (boostOb.y + boostOb.height >= HEIGHT) {
        this.boost.splice(index, 1);
      } 
      if (this.colisionCheck(boostOb, this.player)) {
        boostStatus=true;
        this.boost.splice(index,1);
        // set timer for 5 secods for the boost
        timer = 5;   
      }
    });


    /*timer if th boost timer is zero the status of the boost change to false*/
    if (frameCount % 60 == 0 && timer > 0) { 
      timer --;
    }
    if (timer === 0) {
      boostStatus=false;
    } 


   /* Dust draw mathod called, if the Dust object is out of the canvas delete from the 
    the array for the dust, also check of collision for the dust if collision is true the Player lose the game.  
   */
   if (frameCount % 60 === 0) {
    this.dust.push(new Dust());
  }
   this.dust.forEach((dustOb, index) => { 
    dustOb.draw();
    if (dustOb.y + dustOb.height >= HEIGHT || dustOb.y < 0) {
      this.dust.splice(index, 1);
    }
    if (this.colisionCheck(dustOb, this.player)) {
      noLoop();
      document.querySelector('div.game-over').style.visibility = "visible";
      document.querySelector('div.hidden').style.visibility="visible";
    }
    });

    
   
    /* Dust for the Third and last level  draw () this only should run once the scoreCunter is >= than 10*/
    if (this.player.scoreCounter >= 10){
    if (frameCount % 60 === 0) {
     this.dustlevel.push(new LevelDust());
   }
   this.dustlevel.forEach((dustOb, index) => { 
     dustOb.draw();
     if (dustOb.y + dustOb.height >= HEIGHT || dustOb.y < 0) {
       this.dustlevel.splice(index, 1);
     }
     if (this.colisionCheck(dustOb, this.player)) {
       noLoop();
       document.querySelector('div.game-over').style.visibility = "visible";
       document.querySelector('div.hidden').style.visibility="visible";
     }
   });
    }
}
  /*Collision Check for Dust and Food of the 
  player if collision with the food happend the socoreCounter increases by 1*/
    colisionCheck(object, player) {
      if ((player.x-10)+ player.width < object.x ||(object.x-10) + object.width < player.x){
        return false;
      }
      if ((player.y+20) > object.y + object.height || object.y+30 > player.y + player.height) {
        return false;
      }
      return true; 
    }  
  }