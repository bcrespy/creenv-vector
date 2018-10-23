# @creenv/vector

The Creative Environment vector implements a generic n-dimensional Vector class which can handle any number of components. _@creenv/vector_ also implements 3 children of such a class, **Vector2**, **Vector3** and **Vector4**.

## How to use

```javascript
import Vector from '@creenv/vector';

// 2 components vector
let vec2 = new Vector(10.5, 0.7);

// 5 components vector 
let vec5 = new Vector(10, 20, -4, 10.5, 78);
```

It is also possible to use children classes **Vector2**, **Vector3** and **Vector4** to have access to x, y, z, w components:

```javascript
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

```javascript
let vec = new Vector(10,10,10);
vec.add(5,5,5).substract(3,3,3).multiplyScalar(2);

console.log(vec.components); // expected output: [24, 24, 24]
```

## Full doc

Following is a full list of availaible methods via the **Vector** class.

### constructor \(...components\)

The number of arguments sent to the constructor will determine the dimesions of the vector. 4 arguments will result in a 4-dimentional vector.

### _static_ Vector.fromVector \(_vector_: **Vector**\)

Because we want the vector class to be as fast as possible, its constructor needs to perform as less actions as possible. In order to achieve such an effect, a "copy constructor" cannot be used because it would require some more tests and computations within the constructor. Therefore such a copy is possible through this static method

| Name | Type | Def |
| :--- | :--- | :--- |


_vector_ \| **Vector** \| The Vector to copy from \|

**@Return** a new vector, which has the same components as _vector_.

### _getter_ .length

Returns the length of the vector, computed as Math.sqrt\(x_x + y_y + z\*z +...\)

```javascript
// example 
let vec = new Vector2(10,20);

console.log(vec.length); // expected output 22,36067977...

vec.x = 2;
vec.y = 4;

console.log(vec.length); // expected output 4,472135954...
```

### .set\(x,y,z,...\)

Updates the value of the vector's components. Same behavious than constructor. If one of the components is set to **null** or **undefined**, it won't be updated.

| Name | Type | Def |
| :--- | :--- | :--- |
| _...component_ | **...number** | The new components of the vector |

```javascript
// example 
let vec = new Vector(12,11,5);

// updating all the components 
vec.set(-2,4,7);
console.log(vec.components); // expected: [-2, 4, 7]

// updating only Y 
vec.set(null,18);
console.log(vec.components); // expected [-2, 18, 7]
```

### .copy\(\)

Returns a copy a this vector. Required if modifying the Vector has to be avoided.

### .apply\(_func_: **Function**\)

Applies a function _func_ to all the components of this vector.

| Name | Type | Def |
| :--- | :--- | :--- |
| _func_ | **Function** | The function that will be applied to this vector. Does sending arguments to that function is not possible |

```javascript
// example 
let vec = new Vector(10,50);
vec.apply(x => x/10);
console.log(vec.components); // expected ouput [1; 5]
```

_@Return_ **Vector**: this vector, can be used to chain operations

### .add\(..._components_: ...**number**\)

Adds the components in parameter to the components of the vector

| Name | Type | Def |
| :--- | :--- | :--- |
| _...components_ | **...number** | The components that will be added to their corresponding component |

```javascript
// example 
let vec = new Vector(12,11,10);
vec.add(4,0,2);

console.log(vec.components); // expected output [16, 11, 12]
```

_@Return_ **Vector**: this vector, can be used to chain operations

### .addVector\(_vector_: **Vector**\)

Adds the @param _vector_ to this vector.

| Name | Type | Def |
| :--- | :--- | :--- |
| _vector_ | **Vector** | vector to be added to this vector, needs to have at least the same number of dimensions |

```javascript
// example 
let vec = new Vector(12,11,10),
    vec2 = new Vector2(4,0,2);
vec.addVector(vec2);

console.log(vec.components); // expected output [16, 11, 12]
```

_@Return_ **Vector**: this vector, can be used to chain operations

### .addScalar\(_scalar_: **number**\)

Adds the @param _scalar_ number to all the components of this vector.

| Name | Type | Def |
| :--- | :--- | :--- |
| _scalar_ | **number** | the scalar number that will be added to all the components |

```javascript
// example 
let vec = new Vector(10,11,12);
vec.addScalar(5);

console.log(vec.components); // expected output: [15, 16, 17]
```

_@Return_ **Vector**: this vector, can be used to chain operations

### .substract\(..._components_: ...**number**\)

Substracts the components in parameter to the components of the vector

| Name | Type | Def |
| :--- | :--- | :--- |
| _...components_ | **...number** | the components that will be substracted to the corresponding components of this vector |

```javascript
// example 
let vec = new Vector(12,11,10);
vec.substract(4,0,2);

console.log(vec.components); // expected output [8, 11, 8]
```

_@Return_ **Vector**: this vector, can be used to chain operations

### .substractVector\(_vector_: **Vector**\)

Substract the @param _vector_ to this vector.

| Name | Type | Def |
| :--- | :--- | :--- |
| _vector_ | **Vector** | vector to be substracted to this vector, needs to have at least the same number of dimensions |

```javascript
// example 
let vec = new Vector(12,11,10),
    vec2 = new Vector2(4,0,2);
vec.substractVector(vec2);

console.log(vec.components); // expected output [8, 11, 8]
```

_@Return_ **Vector**: this vector, can be used to chain operations

### .substractScalar\(_scalar_: **number**\)

Substracts the @param _scalar_ number to all the components of this vector.

| Name | Type | Def |
| :--- | :--- | :--- |
| _scalar_ | **number** | the scalar number that will be substracted to all the components |

```javascript
// example 
let vec = new Vector(10,11,12);
vec.substractScalar(5);

console.log(vec.components); // expected output: [5, 6, 7]
```

_@Return_ **Vector**: this vector, can be used to chain operations

### .multiply\(..._components_: ...**number**\)

Multiplies the components in parameter to the components of the vector

| Name | Type | Def |
| :--- | :--- | :--- |
| _...components_ | **...number** | the components that will be multiplied with the corresponding components of this vector |

```javascript
// example 
let vec = new Vector(12,11,10);
vec.multiply(4,0,2);

console.log(vec.components); // expected output [48, 0, 20]
```

_@Return_ **Vector**: this vector, can be used to chain operations

### .multiplyVector\(_vector_: **Vector**\)

Multiplies the components of @param _vector_ with the components of this vector, 1 to 1.

| Name | Type | Def |
| :--- | :--- | :--- |
| _vector_ | **Vector** | vector to be multiplied with this vector, needs to have at least the same number of dimensions |

```javascript
// example 
let vec = new Vector(12,11,10),
    vec2 = new Vector2(4,0,2);
vec.multiplyVector(vec2);

console.log(vec.components); // expected output [48, 0, 20]
```

_@Return_ **Vector**: this vector, can be used to chain operations

### .multiplyScalar\(_scalar_: **number**\)

Mutiplies the components of this vector with the @param _scalar_ number.

| Name | Type | Def |
| :--- | :--- | :--- |
| _scalar_ | **number** | the scalar number that will be multiplied with all the components |

```javascript
// example 
let vec = new Vector(10,11,12);
vec.multiplyScalar(5);

console.log(vec.components); // expected output: [50, 55, 60]
```

_@Return_ **Vector**: this vector, can be used to chain operations

### .divide\(..._components_: ...**number**\)

Divides the components of this vector by the components in argument

| Name | Type | Def |
| :--- | :--- | :--- |
| _...components_ | **...number** | the components that will be divided to the corresponding components of this vector |

```javascript
// example 
let vec = new Vector(12,11,10);
vec.divide(4,1,2);

console.log(vec.components); // expected output [3, 11, 2]
```

_@Return_ **Vector**: this vector, can be used to chain operations

### .divideVector\(_vector_: **Vector**\)

Divides the components of this vector by the corresponding components of @param _vector_

| Name | Type | Def |
| :--- | :--- | :--- |
| _vector_ | **Vector** | vector to be divided to this vector, needs to have at least the same number of dimensions |

```javascript
// example 
let vec = new Vector(12,11,10),
    vec2 = new Vector2(4,1,2);
vec.divideVector(vec2);

console.log(vec.components); // expected output [3, 11, 2]
```

_@Return_ **Vector**: this vector, can be used to chain operations

### .divideScalar\(_scalar_: **number**\)

Divides the components of this vector by the @param _scalar_ number.

| Name | Type | Def |
| :--- | :--- | :--- |
| _scalar_ | **number** | the scalar number that will be divided to all the components |

```javascript
// example 
let vec = new Vector(10,11,12);
vec.divideScalar(2);

console.log(vec.components); // expected output: [5, 5.5, 6]
```

_@Return_ **Vector**: this vector, can be used to chain operations

### .dot\(_vector_: **Vector**\)

Returns the dot product between this vector and the @param _vector_.

| Name | Type | Def |
| :--- | :--- | :--- |
| _vector_ | **number** | the vector to compute dot product with |

```javascript
// example 
let u = new Vector(12,5,8),
    v = new Vector(-1,0,4),
    dotProd = u.dot(v); // expected value: 20
```

_@Return_ **number**

### .cross\(_vector_: **Vector**\)

Returns the cross product between this vector and the @param _vector_.

| Name | Type | Def |
| :--- | :--- | :--- |
| _vector_ | **number** | the vector to compute cross product with. Needs to have the same number of dimensions that this vector |

```javascript
// example 
let u = new Vector(4,3,-2),
    v = new Vector(12,7,0);

let w = u.cross(v);

console.log(w.components); // expected value: [14; -24; -8]
```

_@Return_ **Vector**: a new Vector, cross product of _this_ and _vector_

### .normalize\(\)

Normalize the components of the vector so its length is equal to 1

```javascript
// example 
let vec3 = new Vector3(10,20,30);
console.log(vec3.length); // expected ouput: [10, 20, 30] 37.416573867739416

vec3.normalize();
console.log(vec3.components, vec3.length); // [0.2672612419124244, 0.5345224838248488, 0.8017837257372731] 0.9999999999999999
```

### .equals\(_vector_: **Vector**\)

Tests if this vector and @param _vector_ have the same number of dimensions and equal components.

| Name | Type | Def |
| :--- | :--- | :--- |
| _vector_ | **number** | the vector to to test this with |

\`\`\`js // example let vec = new Vector\(10,20,30\), vec2 = new Vector\(10,11\); console.log\(vec.equals\(vec2\)\); // expected output: false

let vec _= new Vector\(10,20,30\), vec2_ = new Vector\(10,20,31\); console.log\(vec_.equals\(vec2_\)\); // expected output: false

let vec **= new Vector\(10,20,30\), vec2** = new Vector\(10,20,30\); console.log\(vec**.equals\(vec2**\)\); // expected ouput: true

