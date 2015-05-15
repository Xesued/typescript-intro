
// The module sytanx here is required for an internal module to be referances.
module Messages {	

	// This function will not be avaliable outside of the module since it 
	// is not exported
	function alertTheThing(msg:string) {
		alert(msg);
	}

	// The 'export' keyword allows this function to be used on the Messages
	// namespace created by the module.
	export function message (message:string) {
		alertTheThing(message);
	}
}