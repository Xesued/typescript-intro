// To use within something like Webpack, that wraps all files in a closure, we ned to 
// treat internals like externals. Adding a line like below in addition to the 
// referance path above. 
//
// (CON: typescript doesn't like this, doesn't know we are using aditional tooling)
import messages = require('./lib/externalModule');

messages.message();