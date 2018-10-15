import Vector from '../lib/vector';
import Vector2 from '../lib/vector2';


let v = new Vector2(10,20,30);

let copy = Vector2.fromVector(v);
console.log(copy);