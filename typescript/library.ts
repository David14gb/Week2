import { Book } from "./book"

export class Library{
    private books:Book[]
    private address:string
    private manager:string

    constructor(books:Book[], address:string, manager:string){
        this.books = books
        this.address = address
        this.manager = manager
    }
    public getBooks():Book[]{
        return this.books
    }
    public getAddress():string{
        return this.address
    }
    public getManager():string{
        return this.manager
    }
    public setBooks([]){
        this.books = [];
    }
    public setAddress(address:string){
        this.address = address;
    }
    public setmanager(manager:string){
        this.manager = manager;
    }

    public toString():string{
        let contador:string="";
        for(let i = 0; i<this.books.length;i++){
            // console.log(this.books[i]);
            
            contador += 'Book' + (i+1) + "\n" + this.books[i].toString() + "\n"
        }
    
        return contador
    }

    public getNumberOfBooks():number{
        return this.books.length
    }

    public findByAuthor(author:string):Book[]{
        let autor:Book[]= [];
        for(let i = 0; i<this.books.length;i++){
            if(this.books[i].getAuthor() == author){
                autor.push(this.books[i])
            }
        }
        return autor
    }
}


