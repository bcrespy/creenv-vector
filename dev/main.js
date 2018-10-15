import Vector from '../lib/index';
import Vector2 from '../lib/vector2';
import Vector3 from '../lib/vector3';
import Vector4 from '../lib/vector4';


let vec = new Vector(10,20,30),
    vec2 = new Vector(10,11);

console.log(vec.equals(vec2));

let vec_ = new Vector(10,20,30),
    vec2_ = new Vector(10,20,31);

console.log(vec_.equals(vec2_));

let vec__ = new Vector(10,20,30),
    vec2__ = new Vector(10,20,30);

console.log(vec__.equals(vec2__));