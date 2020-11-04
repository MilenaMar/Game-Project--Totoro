class LevelDust extends Dust {
    draw() {
      if (boostStatus === false){
      this.y += speed;
      image(enemydust,this.x, this.y, this.width+20, this.height+20);
    } else {
      this.y--;
      image(enemydust,this.x, this.y, this.width+20, this.height+20);
    }
  }
}