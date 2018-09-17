/**
 * [http://www.tannerhelland.com/3643/grayscale-image-algorithm-vb6/] 
 * Seven grayscale conversion algorithms (with pseudocode and VB6 source code)
 * Tanner Helland
 * 
 * [https://www.w3.org/TR/WCAG20]
 * Web Content Accessibility Guidelines (WCAG) 2.0
 * Ben Caldwell, Trace R&D Center, University of Wisconsin-Madison
 * Michael Cooper, W3C
 * Loretta Guarino Reid, Google, Inc.
 * Gregg Vanderheiden, Trace R&D Center, University of Wisconsin-Madison
 *
 */


/**
 * Creates a color given the 3 components, which values are in range [0;255],
 * and an optional alpha paramater in range [0;1]
 * 
 * @param {number} red red component 
 * @param {number} green green component
 * @param {number} blue blue component
 * @param {?number} alpha the alpha component
 */
function Color( red, green, blue, alpha ) {
  if( arguments.length === 3 || arguments.length === 4 ) {
    this.r = red;
    this.g = green;
    this.b = blue;
    this.a = alpha ? alpha : 1;
  } else if( arguments.length === 1 ) {
    return Color.fromHex( red );
  } else {
    return new Color(0,0,0);
  }

  // is used to fasten operations
  this.colors = [ red, green, blue, alpha ];
}

/**
 * Convert a 6 digits string of an hexadecimal color to Color
 * 
 * @return {Color}
 * @param {string} hexString 6 digits string to convert, with or without #
 * @static
 */
Color.fromHex = function( hexString ) {
  let matches = hexString.replace(/#/,'').match(/.{1,2}/g);
  return new Color( parseInt(matches[0],16), parseInt(matches[1],16), parseInt(matches[2],16) );
}

/**
 * Creates a Color from a 3 or 4 sized array, [r,g,b,?a]
 * 
 * @return {Color} the color object which components are those in the array
 * @param {Array} colorsArray 3 or 4 components color array
 * @static
 */
Color.fromArray = function( colorsArray ) {
  return new Color( colorsArray[0], colorsArray[1], colorsArray[2], colorsArray[3] );
}


Color.prototype = {

  /**
   * @return {Array.<number>} a length-4 array with color components [r,g,b,a]
   */
  toArray: function() {
    return [ this.r, this.g, this.b, this.a ];
  },

  /**
   * @return {{r: number, g: number, b: number, a: number}} an object with the color data
   */
  toObject: function() {
    return {
      r: this.r, g: this.g, b: this.b, a: this.a
    };
  },

  /**
   * @return {string} a css-valid rgb string
   */
  rgb: function() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  },

  /**
   * @returns {string} a css-valid rgba string
   */
  rgba: function() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  },

  /**
   * @returns {string} a css-valid hexadecimal string 
   */
  hex: function() {
    return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(16)}`;
  },

  /**
   * @returns {Color} color with rounded components
   */
  rounded: function() {
    return this.convert(Color, Math.round);
  },

  /**
   * @template T
   * @param {T} Class a class with a 3 params constructor
   * @param {function(number)?} func a function which will be applied to all params
   * @return {T} 
   */
  convert: function( Class, func ) {
    if( typeof func === "undefined" ) {
      func = function(x) {
        return x;
      }
    }
    return new Class( func(this.r), func(this.g), func(this.b), func(this.a) );
  }
};


module.exports = Color;