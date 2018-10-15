/**
 * @license MIT
 * @author Baptiste Crespy <baptiste.crespy@gmail.com>
 **/

import Vector from './index';

class Vector4 extends Vector {
  /**
   * A 3 dimentionnal vector
   * @param {number} x value of the 1st component
   * @param {number} y value of the 2nd component
   * @param {number} z value of the 3rd component
   * @param {number} w value of the 4th component
   */
  constructor (x, y, z, w) {
    super(x, y, z, w);
  }

  get x () { return this.components[0]; }

  get y () { return this.components[1]; }

  get z () { return this.components[2]; }
  
  get w () { return this.components[3]; }

  set x (x) { this.components[0] = x; }

  set y (y) { this.components[1] = y; }

  set z (z) { this.components[2] = z; }

  set w (w) { this.components[3] = w; }
}

export default Vector4;