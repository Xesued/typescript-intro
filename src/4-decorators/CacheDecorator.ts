// There are several types, or levels, of decorators.
// Each level of decorators have a different method signature.

	
// METHOD DECORATOR
export function cache(time:number){
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        let originalFunction:Function = descriptor.value;
        let lastUpdated:number = 0;
        let currentResults:any = null;
        
        function cacheResults (...args:any[]) {
            let currentTime:number = new Date().getTime();
            if(lastUpdated + time < currentTime){
                currentResults = originalFunction.apply(this, args);
                lastUpdated = currentTime;
            } else {
                console.log('Using Cached version');
            }
            return currentResults;
        }
        
        descriptor.value = cacheResults;
        return descriptor;
    };
}



export function throttle(time:number){
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        let originalFunction:Function = descriptor.value;
        let lastUpdated:number = 0;
        
        function throttleResults (...args:any[]) {
            let currentTime:number = new Date().getTime();
            if(lastUpdated + time < currentTime){
                console.log('Calling Function:');
                lastUpdated = currentTime;
                return originalFunction.apply(this, args);
            }
        }
        
        descriptor.value = throttleResults;
        return descriptor;
    };
}

