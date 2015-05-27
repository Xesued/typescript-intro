
// Creating a user defined type is as simple as creating a class. 
// ES6 style!
class Car {
	
	make:string;
	model:string;
	
	// Privates are typescript only. If we build .js that is consumed
	// by .js, you could access this proerty since Javascript doesn't
	// have a notion of private.
	private engine:any;
	
	constructor() {
		this.make = 'Mazda';
		this.model = '3';
		this.engine = '2.5l';
	}
}

let myCar:Car = new Car();

myCar.make = '3';
myCar.model = 'Mazda';

// myCar.engine = 4;

