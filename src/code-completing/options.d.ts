interface PersonOptions {
	title?:string;
	name:string;
	age:number;
	interests?: Array<string>
}
		
interface Person_Static {
    new(options: PersonOptions): Person_Instance;
}

interface Person_Instance {
    title: string;
	name:string;
	age:number;
	interests: Array<string>
}



declare var Person: Person_Static;