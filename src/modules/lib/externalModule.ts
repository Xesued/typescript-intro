
// alertMessage will not be exposed to the outside world.
function alertMessage(msg:string ){
	alert(msg);
}

// Use 'export' to allow this method to be used when imported
export function message (message:string) {
	alertMessage(message);
}
