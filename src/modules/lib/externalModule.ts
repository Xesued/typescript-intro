// This is a small ES6 style method of exporting (exposing) modules.

// alertMessage will not be exposted to the outside world.
function alertMessage(msg:string ){
	alert(msg);
}

// Use 'export' to allow this method to be used when imported
export function message (message:string) {
	alertMessage(message);
}
