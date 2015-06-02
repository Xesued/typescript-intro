var TITLES = {mytitles:123};
class IHaveErrors{
	name;
	title;
	props;
	element;
	constructor (name, title, props) {
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
	isHigherThan (pos) {
		if(pos > this.element.getAttribute('height')) {
			return false;
		}
		return true;
	}
	static  alertName () {
		alert(this.name);
	}
}

var errors = new IHaveErrors('blah', TITLES.mytitles, {msg:'Hmmm', error:true});