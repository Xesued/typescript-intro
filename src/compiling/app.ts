import {Person} from './Person';
import {LETTER_GRADES} from './Grades';


let myself:Person = new Person('Nathan', 'Norton', 32);
myself.addGrade(LETTER_GRADES.B);
myself.addGrade(LETTER_GRADES.C);
myself.addGrade(LETTER_GRADES.B);
myself.addGrade(LETTER_GRADES.A);
myself.addGrade(LETTER_GRADES.A);

console.log(myself.getFullName() + ' Grades: ' + myself.getGradeAverage());

