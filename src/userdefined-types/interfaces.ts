

interface Shape {
	area: number;
}

class Circle implements Shape {
	area:number;
	radius:number;
}

// A Circle object fits the Shape intface since
// it implements it.
var circle:Shape = new Circle();


// Even though this object does not implement Shape, it
// meets the requirements of a shape, thus this is allowed.
var square:Shape = {area: 4};
var circle2:Circle = {area: 4, radius: 3};


// TODO: Create new shapes, try assigning them to each other.  Create interfaces with methods.