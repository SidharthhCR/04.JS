class Library {
  // property
  bookDetails = {
    101: {
      bookId: 101,
      title: "JavaScript Basics",
      author: "John Doe",
      availableCopies: 3,
    },
    102: {
      bookId: 102,
      title: "Learn React",
      author: "Jane Smith",
      availableCopies: 5,
    },
    103: {
      bookId: 103,
      title: "Mastering Node.js",
      author: "David Wilson",
      availableCopies: 2,
    },
    104: {
      bookId: 104,
      title: "Angular for Beginners",
      author: "Sophia Lee",
      availableCopies: 4,
    },
  };

  // methods to implement:
  // 1. validateBook(bookId)  → check if book exists
validateBook(bookId){
    if(bookId in this.bookDetails){
        return true;
    }
    else{
        return false;
    }
}
  // 2. borrowBook(bookId) → decrease availableCopies by 1 (if available)
  borrowBook(bookId){
    if (this.validateBook(bookId)){
    this.bookDetails[bookId].availableCopies--;
    }else{
        console.log("invalid")
    }
  }

  // 3. returnBook(bookId) → increase availableCopies by 1
  returnBook(bookId){
    if(this.validateBook(bookId)){
        this.bookDetails[bookId].availableCopies++;
    }else{
        console.log("invalid")
    }
    }
  


  // 4. checkAvailability(bookId) → display available copies
  check(bookId){
    if(this.validateBook(bookId)){
        console.log(this.bookDetails[bookId].availableCopies);
    }
    else{
        console.log("invalid")
    }
  }
}
let books=new Library();
let res=books.validateBook(101);
res ? console.log("Book is valid"):console.log("Book is invalid");
books.borrowBook(101);
books.returnBook(102);
books.check(101);