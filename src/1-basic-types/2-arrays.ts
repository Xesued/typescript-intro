//---------------------
// ARRAY
//---------------------
let grades:number[] = [1,2,3,4];
let ages:Array<number> = [1,2,3,44];
let mixedGrades:Array<number|string> = ['A', 4.0, 'B-', 3.23];

// With arrays, you get a cool bonus of the methods being typed for you:
ages.push(3);
ages.push('3');				// Throws error because ages can only have numbers.
ages.concat(mixedGrades);