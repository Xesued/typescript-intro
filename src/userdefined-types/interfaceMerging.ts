interface Shape {
	area: number;
}

// This interface is "merged" with the other.
interface Shape {
	color: string;
}

interface BetterShape extends Shape{
	color: string;
}


// Circle now has to implement all of the parts of the merged
// Shape interface.
class Circle implements Shape {
	area:number;
	color:string;	// MUST implement
}

// This is a very basic example, there are more details here:
// http://www.typescriptlang.org/Handbook#declaration-merging