// 1
class PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this._state = 100;
		this.type = null;
	}

	fix() {
		this.state = this.state * 1.5;
	}

	set state(number) {
		if (number <= 0) {
			this._state = 0;
		} else if (number > 100) {
			this._state = 100;
		} else {
			this._state = number;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "novel";
	}
}

class FantasticBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book {
	constructor(author, name, releaseDate, pagesCount) {
		super(author, name, releaseDate, pagesCount);
		this.type = "detective";
	}
}

// 2
class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

addBook(book) {
    if (book.state > 30)
        this.books.push(book);
}

findBookBy(type, value) {
    return this.books.find(book => book[type] === value) || null;
}

giveBookByName(bookName) {
    const index = this.books.findIndex(book => book.name === bookName);
    if (index !== -1) {
        return this.books.splice(index, 1)[0];
    }   
    return null;    
}
}

const library = new Library("Библиотека имени Ленина");

library.addBook(
	new DetectiveBook(
		"Артур Конан Дойл",
		"Полное собрание повестей и рассказов о Шерлоке Холмсе в одном томе",
		2019,
		1008
	)
);
library.addBook(
	new FantasticBook(
		"Аркадий и Борис Стругацкие",
		"Пикник на обочине",
		1972,
		168
	)
)

// 3 
class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subject) {
        if (mark < 2 || mark > 5) {
            console.log(`Оценка ${mark} не добавлена. Допустимый диапазон: 2-5`);
            return;
        }

        if (!this.marks.hasOwnProperty(subject)) {
            this.marks[subject] = [];
        }

        this.marks[subject].push(mark);
    }

    getAverageBySubject(subject) {
        if (!this.marks.hasOwnProperty(subject) || this.marks[subject].length === 0) {
            return 0;
        }

        const sum = this.marks[subject].reduce((acc, mark) => acc + mark, 0);
        return sum / this.marks[subject].length;
    }

    getAverage() {
        const subjects = Object.keys(this.marks);
        
        if (subjects.length === 0) {
            return 0;
        }

        const totalSum = subjects.reduce((sum, subject) => {
            return sum + this.getAverageBySubject(subject);
        }, 0);

        return totalSum / subjects.length;
    }
}
