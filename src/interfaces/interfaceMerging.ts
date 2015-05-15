interface Shape {
	area: number;
}

// This interface is "merged" with the other.
interface Shape {
	color: string;
}



// Circle now has to implement all of the parts of the merged
// Shape interface.
class Circle implements Shape {
	area:number;
	color:string;	// MUST implement
}

