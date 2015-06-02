class Car {
	
	make:string;
	model:string;
	
	private engine:any;
	
	constructor() {
		this.make = 'Mazda';
		this.model = '3';
	}

	startEngine():void{
		this.engine.start();
	}
}

let myCar:Car = new Car();

