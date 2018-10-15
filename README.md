# @creenv/vector 

The Creative Environment vector implements a generic n-dimensional Vector class which can handle any number of components. *@creenv/vector* also implements 3 children of such a class, **Vector2**, **Vector3** and **Vector4**.

## How to use 

```js
import Vector from '@creenv/vector';

// 2 components vector
let vec2 = new Vector(10.5, 0.7);

// 5 components vector 
let vec5 = new Vector(10, 20, -4, 10.5, 78);
```

It is also possible to use children classes **Vector2**, **Vector3** and **Vector4** to have access to x, y, z, w components:

```js
import Vector2 from '@creenv/vector/vector2';
import Vector4 from '@creenv/vector/vector4';

// 2 components vector
let vec2 = new Vector2(10.5, 0.7);

// we can now access the components like so 
let x = vec2.x;
let y = vec2.y;

// 4 components vector 
let vec4 = new Vector3(12, -3, 5, 7);

// we can now access the components like so 
let x = vec4.x;
let y = vec4.y;
let z = vec4.z;
let w = vec4.w;
```

## Chaining operations

Most of the methods returns this, which means it is possible to chain operations:

```js
let vec = new Vector(10,10,10);
vec.add(5,5,5).substract(3,3,3).multiplyScalar(2);

console.log(vec.components); // expected output: [24, 24, 24]
```

## Full doc 

Following is a full list of availaible methods via the **Vector** class.

___

### constructor (...components)

The number of arguments sent to the constructor will determine the dimesions of the vector. 4 arguments will result in a 4-dimentional vector.

___

### *static* Vector.fromVector (*vector*: **Vector**)

Because we want the vector class to be as fast as possible, its constructor needs to perform as less actions as possible. In order to achieve such an effect, a "copy constructor" cannot be used because it would require some more tests and computations within the constructor. Therefore such a copy is possible through this static method 

| Name | Type | Def |
|---|---|---|
*vector* | **Vector** | The Vector to copy from |

**@Return** a new vector, which has the same components as *vector*.

___

### *getter* .length 

Returns the length of the vector, computed as Math.sqrt(x*x + y*y + z*z +...)

```js 
// example 
let vec = new Vector2(10,20);

console.log(vec.length); // expected output 22,36067977...

vec.x = 2;
vec.y = 4;

console.log(vec.length); // expected output 4,472135954...
```

___

### .set(x,y,z,...)

Updates the value of the vector's components. Same behavious than constructor. If one of the components is set to **null** or **undefined**, it won't be updated.

| Name | Type | Def |
|---|---|---|
|*...component* | **...number** | The new components of the vector |

```js
// example 
let vec = new Vector(12,11,5);

// updating all the components 
vec.set(-2,4,7);
console.log(vec.components); // expected: [-2, 4, 7]

// updating only Y 
vec.set(null,18);
console.log(vec.components); // expected [-2, 18, 7]
```

___ 

### .copy()

Returns a copy a this vector. Required if modifying the Vector has to be avoided.

___

### .apply(*func*: **Function**)

Applies a function *func* to all the components of this vector.

| Name | Type | Def |
|---|---|---|
|*func* | **Function** | The function that will be applied to this vector. Does sending arguments to that function is not possible |

```js
// example 
let vec = new Vector(10,50);
vec.apply(x => x/10);
console.log(vec.components); // expected ouput [1; 5]
```

*@Return* **Vector**: this vector, can be used to chain operations

___

### .add(...*components*: ...**number**) 

Adds the components in parameter to the components of the vector 

| Name | Type | Def |
|---|---|---|
|*...components* | **...number** | The components that will be added to their corresponding component |

```js
// example 
let vec = new Vector(12,11,10);
vec.add(4,0,2);

console.log(vec.components); // expected output [16, 11, 12]
```

*@Return* **Vector**: this vector, can be used to chain operations

___

### .addVector(*vector*: **Vector**)

Adds the @param *vector* to this vector. 

| Name | Type | Def |
|---|---|---|
|*vector* | **Vector** | vector to be added to this vector, needs to have at least the same number of dimensions |

```js
// example 
let vec = new Vector(12,11,10),
    vec2 = new Vector2(4,0,2);
vec.addVector(vec2);

console.log(vec.components); // expected output [16, 11, 12]
```

*@Return* **Vector**: this vector, can be used to chain operations

___

### .addScalar(*scalar*: **number**)

Adds the @param *scalar* number to all the components of this vector.

| Name | Type | Def |
|---|---|---|
|*scalar* | **number** | the scalar number that will be added to all the components |

```js
// example 
let vec = new Vector(10,11,12);
vec.addScalar(5);

console.log(vec.components); // expected output: [15, 16, 17]
```

*@Return* **Vector**: this vector, can be used to chain operations

___

### .substract(...*components*: ...**number**) 

Substracts the components in parameter to the components of the vector 

| Name | Type | Def |
|---|---|---|
|*...components* | **...number** | the components that will be substracted to the corresponding components of this vector |

```js
// example 
let vec = new Vector(12,11,10);
vec.substract(4,0,2);

console.log(vec.components); // expected output [8, 11, 8]
```

*@Return* **Vector**: this vector, can be used to chain operations

___

### .substractVector(*vector*: **Vector**)

Substract the @param *vector* to this vector. 

| Name | Type | Def |
|---|---|---|
|*vector* | **Vector** | vector to be substracted to this vector, needs to have at least the same number of dimensions |

```js
// example 
let vec = new Vector(12,11,10),
    vec2 = new Vector2(4,0,2);
vec.substractVector(vec2);

console.log(vec.components); // expected output [8, 11, 8]
```

*@Return* **Vector**: this vector, can be used to chain operations

___

### .substractScalar(*scalar*: **number**)

Substracts the @param *scalar* number to all the components of this vector.

| Name | Type | Def |
|---|---|---|
|*scalar* | **number** | the scalar number that will be substracted to all the components |

```js
// example 
let vec = new Vector(10,11,12);
vec.substractScalar(5);

console.log(vec.components); // expected output: [5, 6, 7]
```

*@Return* **Vector**: this vector, can be used to chain operations

___

### .multiply(...*components*: ...**number**) 

Multiplies the components in parameter to the components of the vector 

| Name | Type | Def |
|---|---|---|
|*...components* | **...number** | the components that will be multiplied with the corresponding components of this vector |

```js
// example 
let vec = new Vector(12,11,10);
vec.multiply(4,0,2);

console.log(vec.components); // expected output [48, 0, 20]
```

*@Return* **Vector**: this vector, can be used to chain operations

___

### .multiplyVector(*vector*: **Vector**)

Multiplies the components of @param *vector* with the components of this vector, 1 to 1. 

| Name | Type | Def |
|---|---|---|
|*vector* | **Vector** | vector to be multiplied with this vector, needs to have at least the same number of dimensions |

```js
// example 
let vec = new Vector(12,11,10),
    vec2 = new Vector2(4,0,2);
vec.multiplyVector(vec2);

console.log(vec.components); // expected output [48, 0, 20]
```

*@Return* **Vector**: this vector, can be used to chain operations

___

### .multiplyScalar(*scalar*: **number**)

Mutiplies the components of this vector with the @param *scalar* number.

| Name | Type | Def |
|---|---|---|
|*scalar* | **number** | the scalar number that will be multiplied with all the components |

```js
// example 
let vec = new Vector(10,11,12);
vec.multiplyScalar(5);

console.log(vec.components); // expected output: [50, 55, 60]
```

*@Return* **Vector**: this vector, can be used to chain operations

___

### .divide(...*components*: ...**number**) 

Divides the components of this vector by the components in argument

| Name | Type | Def |
|---|---|---|
|*...components* | **...number** | the components that will be divided to the corresponding components of this vector |

```js
// example 
let vec = new Vector(12,11,10);
vec.divide(4,1,2);

console.log(vec.components); // expected output [3, 11, 2]
```

*@Return* **Vector**: this vector, can be used to chain operations

___

### .divideVector(*vector*: **Vector**)

Divides the components of this vector by the corresponding components of @param *vector* 

| Name | Type | Def |
|---|---|---|
|*vector* | **Vector** | vector to be divided to this vector, needs to have at least the same number of dimensions |

```js
// example 
let vec = new Vector(12,11,10),
    vec2 = new Vector2(4,1,2);
vec.divideVector(vec2);

console.log(vec.components); // expected output [3, 11, 2]
```

*@Return* **Vector**: this vector, can be used to chain operations

___

### .divideScalar(*scalar*: **number**)

Divides the components of this vector by the @param *scalar* number.

| Name | Type | Def |
|---|---|---|
|*scalar* | **number** | the scalar number that will be divided to all the components |

```js
// example 
let vec = new Vector(10,11,12);
vec.divideScalar(2);

console.log(vec.components); // expected output: [5, 5.5, 6]
```

*@Return* **Vector**: this vector, can be used to chain operations

___

### .dot(*vector*: **Vector**)

Returns the dot product between this vector and the @param *vector*.

| Name | Type | Def |
|---|---|---|
|*vector* | **number** | the vector to compute dot product with |

```js
// example 
let u = new Vector(12,5,8),
    v = new Vector(-1,0,4),
    dotProd = u.dot(v); // expected value: 20
```

*@Return* **number**

___ 

### .cross(*vector*: **Vector**)

Returns the cross product between this vector and the @param *vector*.

| Name | Type | Def |
|---|---|---|
|*vector* | **number** | the vector to compute cross product with. Needs to have the same number of dimensions that this vector |

```js
// example 
let u = new Vector(4,3,-2),
    v = new Vector(12,7,0);

let w = u.cross(v);
  
console.log(w.components); // expected value: [14; -24; -8]
```

*@Return* **Vector**: a new Vector, cross product of *this* and *vector*

___

### .normalize()

Normalize the components of the vector so its length is equal to 1

```js
// example 
let vec3 = new Vector3(10,20,30);
console.log(vec3.length); // expected ouput: [10, 20, 30] 37.416573867739416

vec3.normalize();
console.log(vec3.components, vec3.length); // [0.2672612419124244, 0.5345224838248488, 0.8017837257372731] 0.9999999999999999
```

___

### .equals(*vector*: **Vector**)

Tests if this vector and @param *vector* have the same number of dimensions and equal components.

| Name | Type | Def |
|---|---|---|
|*vector* | **number** | the vector to to test this with|

```js
// example
let vec = new Vector(10,20,30),
    vec2 = new Vector(10,11);
console.log(vec.equals(vec2)); // expected output: false

let vec_ = new Vector(10,20,30),
    vec2_ = new Vector(10,20,31);
console.log(vec_.equals(vec2_)); // expected output: false

let vec__ = new Vector(10,20,30),
    vec2__ = new Vector(10,20,30);
console.log(vec__.equals(vec2__)); // expected ouput: true 

