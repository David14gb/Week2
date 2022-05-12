export class Book{
    private title:string
    private nPages:number
    private isbn: string
    private author: string
    private editorial: string

    constructor(title:string, nPages:number, isbn:string, author:string, editorial:string){
        this.title = title
        this.nPages = nPages
        this.isbn = isbn
        this.author = author
        this.editorial = editorial
    }

    public getTitle():string{
        return this.title
    }
    public getNPages():number{
        return this.nPages
    }
    public getIsbn():string{
        return this.isbn
    }
    public getAuthor():string{
        return this.author
    }
    public getEditorial():string{
        return this.editorial
    }
    public setTitle(title:string){
        this.title = title;
    }
    public setNPages(nPages:number){
        this.nPages = nPages
    }
    public setIsbn(isbn:string){
        this.isbn = isbn;
    }
    public setAuthor(author:string){
        this.author = author;
    }
    public setEditorial(editorial:string){
        this.editorial = editorial;
    }


    public toString():string{
        return "Title - " + this.title + "\n" + "Number of Pages - " + this.nPages + "\n" + "ISBN - " + this.isbn + "\n" + "Author - " + this.author + "\n" + "Editorial - " + this.editorial;
    }
}

