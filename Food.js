class Food extends Dust {
    draw() {
      this.y += speed;
      image(food,this.x, this.y, this.width, this.height+30);
    }

  }
  