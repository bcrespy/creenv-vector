/**
 * @license MIT
 * @author Baptiste Crespy <baptiste.crespy@gmail.com>
 * 
 * 
 **/

import Vector from './vector';

class Vector2 extends Vector {
  constructor (x, y) {
    super(x,y);
  }

  get x () { return this.components[0]; }

  get y () { return this.components[1]; }

  set x (x) { this.components[0] = x; }

  set y (y) { this.components[1] = y; }
}

export default Vector2;