//---------------------
// ENUMS
//---------------------
// By default, enums are 0 indexed
enum LETTER_GRADES {A, B, C, D, F};
let myGrade:LETTER_GRADES = LETTER_GRADES.A; // = 0


// Or, you can set the startin value
enum YEARS {FIRST = 2011, SECOND, THIRD};
let myYear:YEARS = YEARS.SECOND;  // = 2012;

// Or, you can set any number of them.
enum BOX_SIZES {SMALL = 3, MEDIUM = 5, LARGE, XLARGE = 8};
let boxSize:BOX_SIZES = BOX_SIZES.LARGE; // = 6?


// We can even go backwards.
let whatYear:string = YEARS[2012]; // = 'SECOND'


// TODO: Create some ENUMS, play with default and custom values