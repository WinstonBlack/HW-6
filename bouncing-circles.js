var circles = [];

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  for (var index = 0; index < 100; index = index + 1) {
    // new "circle" object, with x, y, xd and yd properties:
    circles[index] = {
      x: width / 2,
      y: height / 2,
      xd: random(-2, 2),
      yd: random(-2, 2),
      c: color(random(200,280), 80, 80),
			r: random(20,40)
    }
  }
}

function draw() {
  background(0);
  noStroke();

  for (var index = 0; index < 100; index = index + 1) {
    // get circle object
    var circle = circles[index];

    // draw it
    fill(circle.c);
    ellipse(circle.x, circle.y, circle.r);
		print(circle.r)

    // move it according to direction
    circle.x = circle.x + circle.xd;
    circle.y = circle.y + circle.yd;

    // check boundaries and update directions
    if (circle.x > width || circle.x < 0) {
      circle.xd = -circle.xd;
			circle.r = circle.r - 5;
			circle.c = color(random(200,280), 60,60);
		
			
    }
    if (circle.y > height || circle.y < 0) {
      circle.yd = -circle.yd;
			circle.r = circle.r - 5;
			 if (circle.r < 0) {
      circle.x = width / 2;
      circle.y = height / 2;
      circle.xd = random(-2, 2);
      circle.yd = random(-2, 2);
			circle.c = color(random(300,360), 80,80);
			circle.r= random(40,10);
			}
    }
  }
}
