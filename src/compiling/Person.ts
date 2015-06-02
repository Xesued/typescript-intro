import {LETTER_GRADES} from './Grades';

export class Person {
	
	firstName:string;
	lastName:string;
	age:number;
	grades: Array<LETTER_GRADES>;
	
	constructor(fn:string, ln:string, a:number) {
		this.firstName = fn;
		this.lastName = ln;
		this.age = a;
		this.grades = [];
	}
	
	/**
	 * Gets the full name of the user.
	 */
	getFullName():string {
		return this.firstName + ' ' + this.lastName;
	}
	
	addGrade(grade:LETTER_GRADES):void {
		this.grades.push(grade);
	}
	
	getGradeAverage():number {
		let total:number = 0;

		this.grades.forEach((letterGrade) => {
			total += letterGrade;			
		});
		
		return total / this.grades.length;
	}
}