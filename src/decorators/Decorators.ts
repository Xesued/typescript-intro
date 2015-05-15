module SampleDecorators {
	// There are several types, or levels, of decorators.
	// Each level of decorators have a different method signature.
	
	// CLASS DECORATOR
	export function Logstuff(value: string): ClassDecorator {
	  return function decorator(ctor:any) {
	      console.log('decorating');
	      ctor.stuff = function(){
	        console.log('stuff');
	      }
	  };
	}
	
	
	// METHOD DECORATOR TODO!!!!!!
	export function TimeMe(target:Object, propertyKey:string): MethodDecorator {
		return;
	} 
	
}