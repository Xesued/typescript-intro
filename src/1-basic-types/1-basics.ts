//
// FIRST, A NOTE ABOUT INFERANCE
//
// Inferance is where typescript will guess the object type based on
// the first assignment.
//
// Notice that for isGreat, it is just a normal JS like syntax.  If you hover
// over isGreat, you will notice typescript. 
let isGreat = false;

// Then if you try to assign a non-boolean, you get an error:
isGreat = 'YES';

// This is self explanatory for simple types.  I encourage you to look into
// and experiment with more complex types like Arrays.



//---------------------
// BOOLEAN
//---------------------
let isItTrue:boolean = true;
let isItFalse = false; 


//---------------------
// NUMBER
//---------------------
let age:number = 123;
let infinity:number = Number.POSITIVE_INFINITY;
let myTrueAge = 32;


//---------------------
// STRING
//---------------------
let myName:string = 'Jimmy';
let yourName = 'Frank';


//---------------------
// Mixed
//---------------------
let myGrade:number|string|boolean = 'A';
myGrade = 3.23;
myGrade = false;


//---------------------
// Any
//---------------------
let myWhatever: any = 1;
myWhatever = 't';
myWhatever = [];