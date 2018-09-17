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


class Color {
  /**
   * Creates a color given the 3 components, which values are in range [0;255],
   * and an optional alpha paramater in range [0;1]
   * 
   * @param {number} red red component 
   * @param {number} green green component
   * @param {number} blue blue component
   * @param {number} alpha the alpha component
   */
  constructor( red, green, blue, alpha = 1.0 ) {
    // is used to fasten operations
    this.colors = [ red, green, blue, alpha ];

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
  }

  get r() { return this.colors[0]; }
  get g() { return this.colors[1]; }
  get b() { return this.colors[2]; }
  get a() { return this.colors[3]; }
  set r( r ) { this.colors[0] = r; }
  set g( g ) { this.colors[1] = g; }
  set b( b ) { this.colors[2] = b; }
  set a( a ) { this.colors[3] = a; }
  set rgb( [r,g,b] ) { this.r = r; this.b = b; this.g = g; }
  set rgba( [r,g,b,a] ) { this.rgb = [r,g,b]; this.a = a; }

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
  get rgb() {
    return `rgb(${this.r}, ${this.g}, ${this.b})`;
  }

  /**
   * @returns {string} a css-valid rgba string
   */
  get rgba() {
    return `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
  }

  /**
   * @returns {string} a css-valid hexadecimal string 
   */
  get hex() {
    return `#${this.r.toString(16)}${this.g.toString(16)}${this.b.toString(16)}`;
  }

  /**
   * @returns {Color} color with rounded components
   */
  rounded() {
    return this.convert(Color, Math.round);
  }

  /**
   * Applies a function func to each of the components of the Color. If alpha is set
   * to true, the function will also be applied to the alpha channel 
   * 
   * @param {function} func the function to apply to each channel
   * @param {?boolean} alpha if the function will be applied to the alpha channel
   * @return {Color} the modified color object
   */
  apply( func, alpha = false ) {
    this.r = func(this.r);
    this.g = func(this.g);
    this.b = func(this.b);
    if( alpha ) this.a = func(this.a);

    return this;
  }

  /**
   * @template T
   * @param {T} Class a class with a 3 params constructor
   * @param {function(number)?} func a function which will be applied to all params
   * @return {T} 
   */
  convert( Class, func = x => x ) {
    return new Class( func(this.r), func(this.g), func(this.b), func(this.a) );
  }

  /**
   * @param {Color} endColor the color to interpolate with
   * @param {number} t [0;1] interpolate factor
   * @return {Color} the resulting color of the interpolation between this and endColor
   */
  interpolateWith( endColor, t ) {
    let newColor = [0,0,0];
    for( let i = 0; i < 3; i++ ) {
      newColor[i] = this.colors[i] + (endColor.colors[i] - this.colors[i]) * t;
    }
    this.rgb = newColor;

    return this;
  }

  /**
   * @return {Color} the modified Color, which values are inverted
   */
  invert() {
    this.r = 255-this.r;
    this.g = 255-this.g;
    this.b = 255-this.b;
    return this;
  }

  /**
   * Computes the average grayscale value (red+green+blue)/3
   * @return {Color} the grayscale resulting color
   */
  grayscale() {
    let gray = (this.r+this.g+this.b)/3;
    this.rgb = [gray, gray, gray];
    return this;
  }

  /**
   * Computes the grayscale value fo the color, using the grayscale luminance formula
   * grayscale = (Red * 0.2126 + Green * 0.7152 + Blue * 0.0722)
   * @returns {Color} the grayscale resulting color
   */
  grayscaleLuminance() {
    let gray = this.r * 0.2126 + this.g * 0.7152 + this.b * 0.0722;
    this.rgb = [gray, gray, gray];
    return this;
  }

  /**
   * Green channel only is used to determine the grayscale value innacurate but fast,
   * can work with real images
   * @returns {Color} the grayscale resulting color
   */
  grayscaleFastest() {
    this.rgb = [this.g, this.g, this.g];
    return this;
  }

  /**
   * Computes the relative luminance of the color
   * [https://www.w3.org/TR/WCAG20/#relativeluminancedef]
   * @returns {number} the relative luminance of the color
   */
  relativeLuminance() {
    let ret = [];
    for( let i = 0; i < 3; i++ ) {
      let component = this.colors[i];
      ret[i] = component <= 10.0164 ? component / 12.92 : Math.pow( (component+14.025)/268.025, 2.4 );
    }
    return ret;
  }

  /**
   * Computes the contrast with the other color
   * [https://www.w3.org/TR/WCAG20/#contrast-ratiodef]
   * @param {Color} color the other color 
   * @return {number} contrast between the 2 colors 
   */
  contrastWith( color ) {
    return (this.relativeLuminance()+0.05) / (color.relativeLuminance()+0.05);
  }
}


export default Color;