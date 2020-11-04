class Boost extends Dust {
    draw() {
      this.y += speed;
      image(umbrella,this.x, this.y, this.width+20, this.height+20);
  }
}