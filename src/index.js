/**
 * [http://www.tannerhelland.com/3643/grayscale-image-algorithm-vb6/] 
 * Seven grayscale conversion algorithms (with pseudocode and VB6 source code)
 * Tanner Helland
 * 
 * 
 */

class Color {
  /**
   * Creates a color given the 3 components, which values are in range [0;255],
   * and an optional alpha paramater in range [0;1]
   * @param {number} red red component 
   * @param {number} green green component
   * @param {number} blue blue component
   * @param {number} alpha the alpha component
   */
  constructor( red, green, blue, alpha = 1.0 ) {
    if( arguments.length === 3 || arguments.length === 4 ) {
      this.r = red;
      this.g = green;
      this.b = blue;
      this.a = alpha;
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
   * @returns {Color}
   * @param {string} hexString 6 digits string to convert, with or without #
   */
  static fromHex( hexString ) {
    let matches = hexString.replace(/#/,'').match(/.{1,2}/g);
    return new Color( parseInt(matches[0],16), parseInt(matches[1],16), parseInt(matches[2],16) );
  }

  /**
   * @returns {Color} the color object which components are those in the array
   * @param {Array} colorsArray 3 or 4 components color array
   */
  static fromArray( colorsArray ) {
    return new Color( colorsArray[0], colorsArray[1], colorsArray[2], colorsArray[3] );
  }

  /**
   * @returns {Array.<number>} a length-4 array with color components [r,g,b,a]
   */
  toArray() {
    return [ this.r, this.g, this.b, this.a ];
  }

  /**
   * @returns {{r: number, g: number, b: number, a: number}} an object with the color data
   */
  toObject() {
    return {
      r: this.r, g: this.g, b: this.b, a: this.a
    };
  }

  /**
   * @returns {string} a css-valid rgb string
   */
  rgb() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  /**
   * @returns {string} a css-valid rgba string
   */
  rgba() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  /**
   * @returns {string} a css-valid hexadecimal string 
   */
  hex() {
    return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(16)}`;
  }

  /**
   * @returns {Color} color with rounded components
   */
  rounded() {
    return this.convert(Color, Math.round);
  }

  /**
   * @template T
   * @param {T} Class a class with a 3 params constructor
   * @param {function(number)?} func a function which will be applied to all params
   * @returns {T} 
   */
  convert( Class, func = x => x ) {
    return new Class( func(this.r), func(this.g), func(this.b), func(this.a) );
  }


  /**
   * Color opreations
   * - invert 
   * 
   */

  /**
   * @returns {Color} the resulting color of the interpolation between this and endColor
   * @param {Color} endColor the color to interpolate with
   * @param {number} t [0;1] interpolate factor
   */
  interpolateWith( endColor, t ) {
    let newColor = [0,0,0];
    for( let i = 0; i < 3; i++ ) {
      newColor[i] = this.colors[i] + (endColor.colors[i] - this.colors[i]) * t;
    }
    return Color.fromArray( newColor );
  }

  /**
   * @returns {Color} a new Color, which values are inverted
   */
  invert() {
    return new Color( 255-this.r, 255-this.g, 255-this.b );
  }

  /**
   * Computes the average grayscale value (red+green+blue)/3
   * @returns {Color} the grayscale resulting color
   */
  grayscale() {
    let gray = (this.r+this.g+this.b)/3;
    return new Color( gray, gray, gray, this.a );
  }

  /**
   * Computes the grayscale value fo the color, using the grayscale luminance formula
   * grayscale = (Red * 0.2126 + Green * 0.7152 + Blue * 0.0722)
   * @returns {Color} the grayscale resulting color
   */
  grayscaleLuminance() {
    let gray = this.r * 0.2126 + this.g * 0.7152 + this.b * 0.0722;
    return new Color( gray, gray, gray, this.a );
  }

  /**
   * Green channel only is used to determine the grayscale value innacurate but fast,
   * can work with real images
   * @returns {Color} the grayscale resulting color
   */
  grayscaleFastest() {
    return new Color( this.g, this.g, this.g );
  }
}


export { Color };