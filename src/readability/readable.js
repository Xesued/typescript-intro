class TypeAhead {
	
	element;
	header;
	users;
	
	constructor (element, header, items){
		this.element = element;
		this.header = header;
		this.items = items;
	}
	
	save (item) {
		return item.save();
	}
}