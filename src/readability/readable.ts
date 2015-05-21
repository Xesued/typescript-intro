interface User {save:Function};
interface Promise {};

class TSTypeAhead {
	
	element: HTMLElement;
	header: string;
	items: Array<User>;
	
	constructor (element:HTMLElement, header:string, items: Array<User>) {
		this.element = element;
		this.header = header;
		this.items = items;
	}
	
	save (item:User) : Promise {
		return item.save();
	}
}