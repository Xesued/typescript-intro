
/// <reference path="./Decorators.ts" />

interface Stuff_Static {
  new() : Stuff_Instance;
  stuff: Function;
}

interface Stuff_Instance {
  run: Function;
}

@SampleDecorators.Logstuff('dude')
class Sample {
  
  constructor() {
    console.log('Construct');
  }
  
  run () {
    console.log('running');
  }
  
  static stuff: Function; 
}



let s:Sample = new Sample();
s.run();

Sample.stuff();