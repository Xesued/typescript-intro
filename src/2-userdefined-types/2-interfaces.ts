//-----------------
// Shapes
//-----------------
interface Shape {
	area: number;
}

class Circle  {
	area:number;
	radius:number;
}

// A Circle object fits the Shape intface since
// it implements it.
var shape:Shape = new Circle();

// Even though this object does not implement Shape, it
// meets the requirements of a shape, thus this is allowed.
var square:Shape = {area: 4};
var circle:Circle = {area: 4, radius: 3};




//------------------
// Animals
//------------------
interface Animal {
	eat (food:string):string;
	walk (distance:number):number;
}

class Snake implements Animal{
	name:string;
	eat (f:string) {					
		return name;
	}
	walk (d:number):number {
		return d / 2;
	}
} 