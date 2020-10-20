const colors = ["FDE8DA", "DCEEEA", "89B0AE", "BEE3DB", "FAF9F9", "FFD6BA"];
const windowH = window.innerHeight;
const windowW = window.innerWidth;

class Bubble {
  constructor(id) {
    this.size = this.randInt(20, 25);
    this.x = this.randInt(this.size, windowW - this.size - 3);
    this.y = this.randInt(this.size, windowH - this.size - 3);
    this.id = id;
    this.bg = colors[this.randInt(0, colors.length - 1)];
    this.speed = this.randInt(0.1, 0.3, false);
    this.direction = {
      x: Math.random() * Math.random() > 0.5 ? 1 : -1,
      y: Math.random() * Math.random() > 0.5 ? 1 : -1
    };
    this.time = this.randInt(8, 11);
  }

  update() {
    this.x += this.direction.x * this.speed;
    this.y += this.direction.y * this.speed;

    if (this.y + this.size >= windowH || this.y < 0) {
      this.direction.y *= -1;
      return;
    }
    if (this.x + this.size >= windowW || this.x < 0) {
      this.direction.x *= -1;
      return;
    }
  }

  getBg() {
    return "#" + this.bg;
  }

  getSize() {
    return this.size + "vw";
  }

  getPos() {
    return {
      x: this.x + "px",
      y: this.y + "px"
    };
  }

  randInt(min, max, int = true) {
    if (int) return Math.floor(Math.random() * (max - min + 1)) + min;
    else {
      return Math.random() * (max - min + 1) + min;
    }
  }
}

let divs = document.querySelectorAll(".bubbles");
let bubbles = [];

// Setup
divs.forEach((div, index) => {
  bubbles.push(new Bubble(index));
  div.textContent = "";
  div.id = index;
  const bubble = bubbles[index];
  const { x, y } = bubble.getPos();
  div.style.width = bubble.getSize();
  div.style.height = bubble.getSize();
  div.style.left = x;
  div.style.top = y;
  div.style.background = bubble.getBg();
  div.style.opacity = "0.7";
  div.style["-webkit-animation-duration"] = bubble.time + "s";
});

// Drawing
function draw() {
  divs.forEach((div) => {
    bubbles[div.id].update();
    const { x, y } = bubbles[div.id].getPos();
    div.style.left = x;
    div.style.top = y;
  });

  window.requestAnimationFrame(draw);
}

window.requestAnimationFrame(draw);
