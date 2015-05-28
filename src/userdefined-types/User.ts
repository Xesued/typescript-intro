
// Creating a user defined type is as simple as creating a class. 
// ES6 style!
class Car {
	
	make:string;
	model:string;
	
	private engine:any;
	
	constructor() {
		this.make = 'Mazda';
		this.model = '3';
		this.engine = '2.5l';
	}
	
	// TODO: Create methods!
}

let myCar:Car = new Car();

// TODO: Set attributes, try both public and private.  Add new 
// properties, or a new class

