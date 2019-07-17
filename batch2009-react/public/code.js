/* eslint-disable */
var stats = new Stats();
stats.setMode(0); // Start off with FPS mode
stats.domElement.style.position = "absolute";
stats.domElement.style.right = "5px";
stats.domElement.style.bottom = "5px";
document.body.appendChild(stats.domElement);

class Particle {
  constructor(x, y) {
    this.linked = false;
    this.position = new Victor(x, y);
    this.velocity = new Victor(Math.random() * 2 - 1, Math.random() * 2 - 1);
    //   this.direction = new Victor(0,0);
  }

  update() {
    this.linked = false;
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (this.position.y > height || this.position.y < 0) {
      this.velocity.y *= -1;
    }
    if (this.position.x > width || this.position.x < 0) {
      this.velocity.x *= -1;
    }
  }
}

var canvas = document.getElementById("c");
var context = canvas.getContext("2d");
var width, height;
var particleAmount = 144;
var lineAlpha = 0.3;
var particleDistance = 150;
var particles = [];

function createParticles() {
  while (particleAmount--) {
    particles.push(new Particle(Math.random() * width, Math.random() * height));
  }
}

function render() {
  context.save();
  context.fillStyle = "rgba(0, 0, 0, 1)";
  context.fillRect(0, 0, width, height);
  context.fillStyle = "rgba(196, 196, 255,255)";

  particles.forEach(function(p1) {
    p1.update();
  });
  particles.forEach(function(p1) {
    p1.linked = true;
    var pos = p1.position;
    context.beginPath();
    context.arc(pos.x, pos.y, 2, 0, 2 * Math.PI);
    // context.closePath();
    context.fill();
    p1.linked = true;
    particles.forEach(function(p2) {
      if (p1 != p2 && !p2.linked) {
        var posLink = p2.position;
        // console.log(p1.position.distance(p2) );
        dist = Math.abs(pos.distance(posLink));
        if (dist < particleDistance) {
          context.beginPath();
          context.strokeStyle =
            "rgba(196, 196, 255," +
            (lineAlpha - (lineAlpha / particleDistance) * dist) +
            ")";
          context.moveTo(pos.x, pos.y);
          posLink;
          context.lineTo(posLink.x, posLink.y);
          // context.closePath();
          context.stroke();
        }
      }
    });
  });
  context.restore();
}
var loop = function() {
  requestAnimationFrame(loop);
  stats.begin();
  render();
  stats.end();
};
loop();

var resize = function(event) {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
};
resize();

window.addEventListener("resize", resize);

createParticles();
