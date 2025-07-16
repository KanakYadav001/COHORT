class library{

    constructor(){
        this.books = [];
    }
    addBook(book){
        this.books.push(book);
    }
    ShowBook(){
        this.books.forEach(function(book,index){
          console.log(` ${index+1} )  ${book.name} , ${book.author}`);
        })

    }
}

class book{
    constructor(name,Bno,author,TotalPage){
           this.name = name;
           this.Bno = Bno;
           this.author = author;
           this.TotalPage = TotalPage;
    }
}

let delhi  = new library();
let book1 = new book("Health is Wealth","ijhy789oij","Kanak",270);
let book2 = new book("69","bt6789ih","Vaibhav",69);
delhi.addBook(book1);
delhi.addBook(book2);
delhi.ShowBook();