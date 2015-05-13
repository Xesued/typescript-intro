
var TITLES : {mytitle:number};
TITLES.mytitle = 123;

interface ErrorProps { msg: string; error: boolean; }

class IHaveErrors {
	name: string;
	title: string;
	element: Element;
	props: ErrorProps;
	
	constructor(name:string, title:string, props:ErrorProps) {
		this.name = name;
		this.title = title;
		this.props = props;
	}
	
	consoleName () {
		console.log(this.name + ' ' + this.tilte.length);
		console.log(this.props.length);
	}
	
	displayName () {
		document.querySelector('#name').addEventListener('click', function(el) {
			el.innerHTML = this.name;
		});
	}
	
	isHigherThan (pos:number) {
		if(pos > this.element.getAttribute('height')) {
			return false;
		}
		return true;
	}
	
	static alertName () {
		alert(this.name);
	}
}


let errors = new IHaveErrors('blah', TITLES.mytitle,{msg:'Hmmm', error:true});