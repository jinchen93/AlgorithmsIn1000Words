// Vector Math helper I use often
class Vector {
  constructor (x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  add (other) {
    return new Vector(this.x + other.x, this.y + other.y);
  }

  subtract (other) {
    return new Vector(this.x - other.x, this.y - other.y);
  }

  times (num) {
    return new Vector(this.x * num, this.y * num);
  }

  divide (num) {
    return new Vector(this.x / num, this.y / num);
  }

  distanceSq () {
    return this.x * this.x + this.y * this.y;
  }

  distance () {
    return Math.sqrt(this.distanceSq());
  }

  normal() {
    const dist = this.distance();
    if(dist === 0)
      return new Vector();
    return this.divide(dist);
  }

  leftHandNormal() {
    return new Vector(this.y, -this.x);
  }

  rightHandNormal() {
    return new Vector(-this.y, this.x);
  }

  toString() {
    return `{${this.x},${this.y}}`;
  }
}

export default Vector;
