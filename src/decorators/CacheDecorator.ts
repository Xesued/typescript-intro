// There are several types, or levels, of decorators.
// Each level of decorators have a different method signature.

	
// METHOD DECORATOR
export function cache(time:number){
    return (target: Object, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) => {
        let originalFunction:Function = descriptor.value;
        let lastUpdated:number = 0;
        let currentResults:any = null;
        
        function cacheResults (...args:any[]) {
            console.log('--------CACHE--------');
            let currentTime:number = new Date().getTime();
            if(lastUpdated + time < currentTime){
                console.log('Using Cached version:');
                currentResults = originalFunction.apply(this, args);
                lastUpdated = currentTime;
            }
            console.log('Returned: ');
            console.log(currentResults);
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
            console.log('-------THROTTLE--------');
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

