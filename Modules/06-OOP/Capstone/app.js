class Library {
    // your code
    constructor(name){
        this.name = name
        this.books = []
    }

    addBook(book){
        this.books.push(book)
    }

    getBooks(){
        const Name = this.books.map(books => books.name)
        return Name
    }

    getBooksByCategory(category){
        const bookID = this.books.findIndex(books => books.category === category)
        const desired__book = this.books[bookID].name
        return desired__book
    }
  }
  
  class Book {
    // your code
    constructor(name, author, category){
        this.name = name
        this.author = author
        this.category = category
    }
  }
  
  const library = new Library('ABC')
  
  const bookA = new Book('Book A', 'Mr. A', 'Sci-Fi')
  const bookB = new Book('Book B', 'Mr. A', 'Sci-Fi')
  const bookC = new Book('Book C', 'Mr. B', 'Horror')
  library.addBook(bookA)
  library.addBook(bookB)
  library.addBook(bookC)
  
  const allBooks = library.getBooks()
  const horrorBooks = library.getBooksByCategory('Horror')
  
  console.log(allBooks) // ['Book A', 'Book B', 'Book C']
  console.log(horrorBooks) // ['Book C']

