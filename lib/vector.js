/**
 * @license MIT
 * @author Baptiste Crespy <baptiste.crespy@gmail.com>
 * 
 * The class Vector is a generic vector class that can be used by used to 
 * manipulate any n-dimensions vector. The number x of parameters given when 
 * calling the class constructor will determine the number x of dimensions.
 * The children class use this mechanism to provide a better interface for the 
 * developers without touching to the core of this class.
 **/

class Vector {
  /**
   * The Vector class is a generic vector class that can be used by used to 
   * manipulate any n-dimensions vector. The number **x** of parameters given when 
   * calling the class constructor will determine the number **x** of dimensions.
   * The children class use this mechanism to provide a better interface for the 
   * developers without touching to the core of this class.
   * 
   * @param  {...number} components the components of the vector
   */
  constructor (...components) {
    /**
     * the dimensions of the vector
     * @type {number} 
     * @public
     */
    this.dimensions = components.length;

    /**
     * the components of the vector 
     * @type {Array.<number>}
     * @public
     */
    this.components = components;
  }

  /**
   * Because we want the vector class to be as fast as possible, its constructor 
   * needs to perform as less actions as possible. In order to achieve such an effect, 
   * a "copy constructor" cannot be used because it would require some more tests and 
   * computations within the constructor. Therefore such a copy is possible through this
   * static method 
   * 
   * @param {Vector} vector the vector to be copied
   * 
   * @return {Vector} a shallow copy of @param vector 
   */
  static fromVector (vector) {
    return new Vector(...vector.components);
  }

  /**
   * The length of the vector, computed as Math.sqrt(x*x + y*y + z*z +...)
   * 
   * @return {number} the length of the vector
   */
  get length () {
    let l = 0;
    for (let i = 0; i < this.dimensions; i++) {
      l+= this.components[i]*this.components[i];
    }
    return Math.sqrt(l);
  }

  /**
   * @return {Vector} a shallow copy of the vector 
   */
  copy () {
    return new Vector(this.components);
  }

  /**
   * Applies a function @param func to all the components of this vector 
   * 
   * @param {function} func function that will be applied
   * 
   * @return {Vector} this, can be used to chain operations
   */
  apply (func) {
    for (let i = 0; i < this.dimensions; i++) {
      this.components[i] = func(this.components[i]);
    }
    return this;
  }

  /**
   * Adds the components in parameter to the components of the vector 
   * 
   * @param  {...number} components each component that will be added to the corresponding
   *                                component
   * 
   * @return {Vector} this, can be used to chain operations
   */
  add (...components) {
    for (let i = 0; i < this.dimensions; i++) {
      this.components[i]+= components[i];
    }
    return this;
  }

  /**
   * Adds the @param vector to this vector 
   * 
   * @param {Vector} vector to be added to this vector, needs to have at least the same number 
   *                        of dimensions
   * 
   * @return {Vector} this, can be used to chain operations
   */
  addVector (vector) {
    for (let i = 0; i < this.dimensions; i++) {
      this.components[i]+= vector.components[i];
    }
    return this;
  }

  /**
   * Adds the @param scalar number to all the components of the vector 
   * 
   * @param {number} scalar the scalar number that will be added to all the components 
   * 
   * @return {Vector} this, can be used to chain operations 
   */
  addScalar (scalar) {
    for (let i = 0; i < this.dimensions; i++) {
      this.components[i]+= scalar;
    }
    return this;
  }
  
  /**
   * Substract the components in parameter to the components of the vector 
   * 
   * @param  {...any} components each component will be substracted to the corresponding component
   * 
   * @return {Vector} this, can be used to chain operations 
   */
  substract (...components) {
    for (let i = 0; i < this.dimensions; i++) {
      this.components[i]-= components[i];
    }
    return this;
  }
  
  /**
   * Substract the @param vector *vector* to this vector 
   * 
   * @param {Vector} vector to be substracted to this vector, needs to have at least the same
   *                        number of dimensions
   * 
   * @return {Vector} this, can be used to chain operations
   */
  substractVector (vector) {
    for (let i = 0; i < this.dimensions; i++) {
      this.components[i]-= vector.components[i];
    }
    return this;
  }

  /**
   * Substract @param scalar *scalar* to all the components of the vector 
   * 
   * @param {number} scalar the scalar to be substracted to all the components of the vector 
   * 
   * @return {Vector} this, can be used to chain operations 
   */
  substractScalar (scalar) {
    for (let i = 0; i < this.dimensions; i++) {
      this.components[i]-= scalar;
    }
    return this;
  }

  /**
   * Multiply the components of this vector by the @param components *components* sent as parameters.
   * Each component will be multiplied with its corresponding parameter 
   * 
   * @param  {...number} components multiply each component with its corresponding argument 
   * 
   * @return {Vector} this, can be used to chain operations 
   */
  multiply (...components) {
    for (let i = 0; i < this.dimensions; i++) {
      this.components[i]*= components[i];
    }
    return this;
  }

  /**
   * Multiply the components of the vector @param vector *vector* to the corresponding components of 
   * this vector. Resulting vector will be [x*x', y*y', z*z', ...]
   * 
   * @param {Vector} vector multiply each **component** with its corresponding component
   * 
   * @return {Vector} this, can be used to chain operations
   */
  multiplyVector (vector) {
    for (let i = 0; i < this.dimensions; i++) {
      this.components[i]*= vector.components[i];
    }
    return this;
  }

  /**
   * Multiplies all the components of this vector with @param scalar *scalar*
   * 
   * @param {number} scalar the scalar to multiply the components with
   * 
   * @return {Vector} this, can be used to chain operations
   */
  multiplyScalar (scalar) {
    return this.apply(x=>x*scalar);
  }

  /**
   * Divide the components of this vector by the @param components *components* sent as parameters. Each
   * component will be divided by its corresponding parameter
   * 
   * @param  {...number} components divide each components by its corresponding argument 
   * 
   * @return {Vector} this, can be used to chain operations 
   */
  divide (...components) {
    for (let i = 0; i < this.dimensions; i++) {
      this.components[i]/= components[i];
    }
    return this;
  }

  /**
   * Divide the components of this vector by the corresponding components of @param vector *vector*
   * Resulting vector will be [x/x', y/y', z/z', ...]
   * 
   * @param {Vector} vector divide each component by its corresponding component  
   * 
   * @return {Vector} this, can be used to chain operations 
   */
  divideVector (vector) {
    for (let i = 0; i < this.dimensions; i++) {
      this.components[i]/= vector.components[i];
    }
    return this;
  }

  /**
   * Divides each component of this vector by the number @param scalar *scalar*
   * 
   * @param {number} scalar the scalar that will divide each components of the vector
   * 
   * @return {Vector} this, can be used to chain operations 
   */
  divideScalar (scalar) {
    return this.apply(x=>x/scalar);
  }

  /**
   * @param {Vector} vector the vector to compute the dot product with 
   * 
   * @return {number} the dot product between this and @param vector *vector*
   */
  dot (vector) {
    let dotproduct = 0;
    for (let i = 0; i < this.dimensions; i++) {
      dotproduct+= this.components[i]*vector.components[i];
    }
    return dotproduct;
  }

  /**
   * Computes the cross product between this and the vector in parameter
   * 
   * @param {Vector} vector the vector to compute the cross product with
   * 
   * @return {Vector} a new Vector, cross product of *this* by *vector*
   */
  cross (vector) {
    let components = [];
    for (let i = 1; i < this.dimensions+1; i++) {
      let imod = i%this.dimensions;
      let i2 = imod==this.dimensions-1 ? 0 : imod+1;
      components.push(this.components[imod]*vector.components[i2]-this.components[i2]*vector.components[imod]);
    }
    return new Vector(...components);
  }

  /**
   * Normalizes the vector 
   * 
   * @return {Vector} this, as a normalized vector
   */
  normalize () {
    let length = this.length;
    return this.apply(x=>x/length);
  }

  /**
   * @param {Vector} vector the vector to test
   * 
   * @return {boolean} true if the vectors have the same nb of dimensions 
   * and the same components values
   */
  equals (vector) {
    let sameComponents = true;
    for (let i = 0; i < this.dimensions; i++) {
      if (this.components[i] !== vector.components[i]) {
        sameComponents = false;
        break;
      }
    }
    return sameComponents && this.dimensions===vector.dimensions;
  }
}

export default Vector;