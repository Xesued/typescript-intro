
// This is the syntax for external modules.  This is the perfered method (outside of es6 modules)
import {message} from './lib/externalModule';
message();


// The Typescript method (non ES6)
import messages = require('./lib/externalModule');
messages.message();
