/**
 * @license MIT
 * @author Baptiste Crespy <baptiste.crespy@gmail.com>
 **/

import Vector from './index';

class Vector3 extends Vector {
  /**
   * A 3 dimentionnal vector
   * @param {number} x value of the x component
   * @param {number} y value of the y component
   * @param {number} z value of the z component
   */
  constructor (x, y, z) {
    super(x, y, z);
  }

  get x () { return this.components[0]; }

  get y () { return this.components[1]; }

  get z () { return this.components[2]; }

  set x (x) { this.components[0] = x; }

  set y (y) { this.components[1] = y; }

  set z (z) { this.components[2] = z; }
}

export default Vector3;