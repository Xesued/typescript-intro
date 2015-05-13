module SampleDecorators {
	// There are several types, or levels, of decorators.
	//Each level of decorators have a different method
	// signature.
	export function Logstuff(value: string):ClassDecorator {
	  return function decorator(ctor) {
	      console.log('decorating');
	      ctor.stuff = function(){
	        console.log('stuff');
	      }
	  };
	}
}