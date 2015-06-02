
import {cache, throttle} from './CacheDecorator';

class UserInfo {
  
  constructor() {
    this.getInfo();
  }
  
  @cache(5000)
  getInfo () {
    console.log('...returning Info');
    return {id: 5, firstName:'nathan', lastName:'norton'};
  }
  
  getSomething(){
    // Long running action
  }
}

var myUser = new UserInfo();
setInterval( () => {
  console.log('-----------------');
  myUser.getInfo();
  
}, 1000);