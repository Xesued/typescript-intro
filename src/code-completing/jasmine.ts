/// <reference path="../../typings/jasmine/jasmine.d.ts" />

describe('test 1', function () {
	it('should do stuff', function () {
		expect('string').toBe('string');
	});
	
	let myObj = {name:"test object", fun:function(){}};
	it('should have properties', function() {
		// TODO: Write some expect statements to test the properies on myObj.
	});
	
});