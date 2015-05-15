/// <reference path="options.d.ts" />



// We have an object impmenting a prototype.
let typedOptions:PersonOptions = {
	age: 12,
	name: 'afe'
};

let you = new Person(typedOptions);


// Notice that this is okay to.  Though we are not
// implementing a prototype, but we are matching the 
// "shape" of the required object.
let options = {
	age: 31,
	name: 'Nathan'
};

let me = new Person(options);
