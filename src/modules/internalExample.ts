
// This is an "internal" module native to Typescript.  This file will have a 
// module defined in it and then made availible on the page.  Typescript will
// put the module on the global namespace. (Thus the reason for using the 'modules').

/// <reference path="./lib/internalModule" />


// Using Messages from out internal modules.
Messages.message('hi there');
