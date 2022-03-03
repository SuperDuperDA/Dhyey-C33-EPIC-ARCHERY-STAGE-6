class Player {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true
    };

    this.body = Bodies.rectangle(x, y, width, height, options);

    this.width = width;
    this.height = height;
    this.image = loadImage("./assets/player.png");

    this.playerlife1 = "green";
    this.playerlife2 = "green";
    this.playerlife3 = "green";

    World.add(world, this.body);
  }

  life() {
    push();
    textSize(20);
    fill("white");
    text("Player", 280, 40);

    fill(this.playerlife1);
    rect(180, 50, 70, 30);
    fill(this.playerlife2);
    rect(250, 50, 70, 30);
    fill(this.playerlife3);
    rect(320, 50, 70, 30);
    pop();
  }

  reduceLife(playerArcherLife) {
    if (playerArcherLife === 2) {
      this.playerlife1 = "red";
    }

    if (playerArcherLife === 1) {
      this.playerlife2 = "red";
    }

    if (playerArcherLife === 0) {
      this.playerlife3 = "red";
    }
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
