class library{
    constructor(){
        this.booksArr = []
    }
    addBooks(books){
      this.booksArr.push(...books);
    }

    ListAllBooks(){
         this.booksArr.forEach(function(book,index){
         console.log(` ${index +1} ) Book Name is ${BookInfo.Bname} and this Author is ${BookInfo.author}`);
         })
    }
}
class BookInfo{
  constructor(Bname,author,pages,price,uid){
    this.Bname = Bname;
    this.author = author;
    this.pages = pages;
    this.price = price;
    this.Buid = uid;
    this.status = false
  }


  isstatus(){
    this.status = !this.status ;
  }


}


let Booklibrary  = new library();

let book1 = new BookInfo("Health is wealth","Kanka Yadav","250","200Rupee","mnbt67890ygbn");
let book2 = new BookInfo("Health is wealth","Kanka Yadav","250","200Rupee","mnbt67890ygbn");
let book3 = new BookInfo("Health is wealth","Kanka Yadav","250","200Rupee","mnbt67890ygbn");


Booklibrary.addBooks([book1,book2,book3]);