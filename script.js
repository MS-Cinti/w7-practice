
//Object Contruction a Date szócska (tervrajz alapján megépít valamit)
//nagybetűvel kezdődnek mindig 
//mindig ugyanazzal a sémával hozzuk létre az objectumokat
//ezzel gyorsabban lehet létrehozni őket
//metódusokat is lehet létrehozni az Object Contruction-on belül

const currentDate = new Date() 

console.log(currentDate);

function Book(title, author, year, genre) {
    this.title = title;         //a this mindig egy objectumra mutat vissza
    this.author = author;
    this.year = year;
    this.genre = genre;
    this.age = function(){
        const d = new Date() //string nélkül a mai dátumot nézi
        const currentYear = d.getFullYear() //getFullYear-rel kinyerem csak az évet 
        return currentYear - this.year
    }
}

const myFavouriteBook = new Book("Háború és béke", "Tolsztoj", 1867, "historical novel")

console.log(myFavouriteBook.title);

const mySecondFavouriteBook = new Book("Az algebra alapjai", "Joe Algebra", 1992, "drama")

console.log(mySecondFavouriteBook.age());


