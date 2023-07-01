// Build a Library System
class Library {
  constructor(name, books) {
    this.name = name,
    this.books = []
  }

  addBook(book) {
    this.books.push(book);
  }

  getBooks() {
    const names = [];
    for (const book of this.books) {
      names.push(book.name);
    }
    return names;
  }

  getBooksByCategory(category) {
    const filteredBooks = this.books.filter( (book) => book.category.toLowerCase() === category.toLowerCase());
    const names = [];
    for (const book of filteredBooks) {
      names.push(book.name);
    }
    return names;
  }
}

class Book {
  constructor(name, author, category) {
    this.name = name,
    this.author = author,
    this.category = category
  }
}

const alphaLibray = new Library("Alpha Libray", []);
const bookA = new Book('Book A', 'Mr. A', 'Sci-Fi')
const bookB = new Book('Book B', 'Mr. A', 'Sci-Fi')
const bookC = new Book('Book C', 'Mr. B', 'Horror')
alphaLibray.addBook(bookA)
alphaLibray.addBook(bookB)
alphaLibray.addBook(bookC)

const allBooks = alphaLibray.getBooks()
const horrorBooks = alphaLibray.getBooksByCategory('Horror')

console.log(allBooks) // ['Book A', 'Book B', 'Book C']
console.log(horrorBooks) // ['Book C']