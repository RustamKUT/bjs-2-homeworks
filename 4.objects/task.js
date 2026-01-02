function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	this.marks ? this.marks.push(...marksToAdd) : null;
}

Student.prototype.getAverage = function() {
	return !this.marks || !this.marks.length ? 0 : this.marks.reduce((acc, cur) => acc + cur, 0) / this.marks.length;
};


Student.prototype.exclude = function(reason) {
	this.subject = undefined;
	delete this.marks;
	this.excluded = reason;
}