interface Item {save:Function};
interface Promise {};

class TSTypeAhead {
	
	element: HTMLElement;
	header: string;
	users: Array<Item>;
	
	constructor (element:HTMLElement, header:string, users: Array<Item>) {
		this.element = element;
		this.header = header;
		this.users = users;
	}
	
	save (item:Item) : Promise {
		return item.save();
	}
}