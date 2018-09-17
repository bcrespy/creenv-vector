import Color from '../lib/index';


/**
 * Colors used for tests 
 * 
 * 1
 * r: 245, g: 51 , b: 111
 * #f5336f
 */

let expected1 = {
  r: 245, g: 51, b: 111, a: 1.0
};


test( "color instantiation using different inputs", () => {
  expect( new Color(245,51,111).toObject() ).toEqual( expected1 );
  expect( new Color("#f5336f").toObject() ).toEqual( expected1 );
  expect( Color.fromHex("#f5336f").toObject() ).toEqual( expected1 );
  expect( Color.fromArray([245,51,111]).toObject() ).toEqual( expected1 );
});

test( "color getters", () => {
  let color = new Color(245,51,111);
  expect( color.rgb() ).toEqual( "rgb(245, 51, 111)" );
  expect( color.rgba() ).toEqual( "rgba(245, 51, 111, 1)" );
  expect( color.toArray() ).toEqual( [ 245, 51, 111, 1.0 ] );
  expect( color.hex() ).toEqual( "#f5336f" );
  expect( new Color( 135.1, 140.5, 120 ).rounded().toObject() ).toEqual({ r: 135, g: 141, b: 120, a: 1 });
});

test( "class convertion", () => {
  let testClass = (r,g,b) => [r,g,b],
      testFunc = x => x*2;
  expect( new Color(20,25,30).convert(testClass,testFunc) ).toEqual( [40,50,60] );
});

test( "color operations", () => {
  let color1 = new Color(0,50,100),
      color2 = new Color(255,100,0),
      color3 = new Color(245,51,111);
  
});