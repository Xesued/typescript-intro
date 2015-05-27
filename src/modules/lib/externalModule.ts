
// Notice that for "external" modules, we don't need to wrap the file in a 
// 'module'.  Externals are treated simular to commonjs requires where they are 
// execulted within their own context (closure???).
export function message () {
	alert('Hello World');
}

export let defaultMessage = 'Blah';


// This is the perfered method for everything we will be doing, tooling supports
// this method much better (Webpack loaders)