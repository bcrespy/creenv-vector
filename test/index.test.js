import Vector from '../lib/vector';



let vect = new Vector(12,14,-4);

test("vector instanciation", () => {
  let v = new Vector(50,60,80,40,90);
  expect(v.components).toEqual([50,60,80,40,90]);
  expect(v.dimensions).toBe(5);

  let copy = Vector.fromVector(v);
  copy.components[2] = 100;
  expect(copy.components).toEqual([50,60,100,40,90]);
  expect(v.components).toEqual([50,60,80,40,90]);
});

test("addition", () => {
  let u = new Vector(30,80),
      v = new Vector(20,-5);
  
  u.add(10,20);
  expect(u.components).toEqual([40,100]);

  u.addVector(v);
  expect(u.components).toEqual([60,95]);

  u.addScalar(80);
  expect(u.components).toEqual([140,175]);
});

test("substraction", () => {
  let u = new Vector(30,80),
      v = new Vector(20,-5);
  
  u.substract(10,20);
  expect(u.components).toEqual([20,60]);

  u.substractVector(v);
  expect(u.components).toEqual([0,65]);

  v.substractScalar(12);
  expect(v.components).toEqual([8,-17]);
});

test("multiplication", () => {
  let u = new Vector(30,80),
      v = new Vector(2,-4);
  
  u.multiply(2,4);
  expect(u.components).toEqual([60,320]);

  u.multiplyVector(v);
  expect(u.components).toEqual([120,-1280]);

  u.multiplyScalar(10);
  expect(u.components).toEqual([1200, -12800]);
});

test("divison", () => {
  let u = new Vector(100, 120),
      v = new Vector(2,6);
  
  u.divide(10,2);
  expect(u.components).toEqual([10,60]);

  u.divideVector(v);
  expect(u.components).toEqual([5,10]);

  u.divideScalar(5);
  expect(u.components).toEqual([1,2])
});

test("dot product", () => {
  let u = new Vector(12,5,8),
      v = new Vector(-1,0,4);
  expect(u.dot(v)).toBe(20);
});

test("cross product", () => {
  let u = new Vector(4,3,-2),
      v = new Vector(12,7,0);

  let w = u.cross(v);
  expect(w.components).toEqual([14,-24,-8]);
});

test("length", () => {
  expect(vect.length).toBe(18.867962264113206);
})

test("normalization", () => {
  let u = new Vector(10,5,-2);
  expect(u.normalize().components[0]).toBeCloseTo(0.8805, 4);
})