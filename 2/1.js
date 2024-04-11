"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books, которое должно хранить 
книги, переданные при создании объекта.
2. Реализуйте геттер-функцию allBooks, которая возвращает текущий список книг.
3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    #books = [];
    constructor(books) {
        const booksSet = new Set(books);
        if (books.length > booksSet.size) {
            throw new Error('Дубликаты в списке');
        }
        this.#books = books;
    }

    allBooks() {
        return this.#books;
    }
    addBook(title) {
        if (this.#books.includes(title)) {
            throw new Error('Книга с таким названием уже существует');
        }
        this.#books.push(title);
    }
    removeBook(title) {
        if (!this.#books.includes(title)) {
            throw new Error('Книга с таким названием не существует');
        }
        this.#books = this.#books.filter(item => item !== title);
    }
    hasBook(title) {
        return this.#books.includes(title);
    }

}

const library = new Library(["Книга1", "Книга2", "Книга3", "Книга4"]);
// library.addBook("Книга4");
library.addBook("Книга5");
console.log(library.allBooks());
// library.removeBook("Книга10");
library.removeBook("Книга5");
console.log(library.allBooks());
console.log(library.hasBook("Книга5"));
