// We can use standard ES6 imports
import {message} from './lib/externalModule';
message('Hi there ES6');


// Or, Typescript has it's own method of importing...
import messages = require('./lib/externalModule');
messages.message('Hi there Typescript');
