
import {cache, throttle} from './CacheDecorator';

class UserInfo {
  
  constructor() {
    this.getInfo();
  }
  
  getInfo () {
    return {id: 5, firstName:'nathan', lastName:'norton'};
  }
  
  getName () {
    return 'Nathan'
  }
  
  getSomething(){
    // Long running action
  }
}

var myUser = new UserInfo();
setInterval( () => {
  // TODO: Call methods on myUser
  
}, 2000);