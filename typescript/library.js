"use strict";
exports.__esModule = true;
exports.Library = void 0;
var Library = /** @class */ (function () {
    function Library(books, address, manager) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    Library.prototype.getBooks = function () {
        return this.books;
    };
    Library.prototype.getAddress = function () {
        return this.address;
    };
    Library.prototype.getManager = function () {
        return this.manager;
    };
    Library.prototype.setBooks = function (_a) {
        this.books = [];
    };
    Library.prototype.setAddress = function (address) {
        this.address = address;
    };
    Library.prototype.setmanager = function (manager) {
        this.manager = manager;
    };
    Library.prototype.toString = function () {
        var contador = "";
        for (var i = 0; i < this.books.length; i++) {
            // console.log(this.books[i]);
            contador += 'Book' + (i + 1) + "\n" + this.books[i].toString() + "\n";
        }
        return contador;
    };
    Library.prototype.getNumberOfBooks = function () {
        return this.books.length;
    };
    Library.prototype.findByAuthor = function (author) {
        var autor = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].getAuthor() == author) {
                autor.push(this.books[i]);
            }
        }
        return autor;
    };
    return Library;
}());
exports.Library = Library;
