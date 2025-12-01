// **problem 

// class Book {
//     constructor(title , auther){
//         this.title = title;
//         this.auther = auther
//     }

//     saveToDatabase(){
//         console.log('save book to database');
        
//     }

//     generateInvoice(){
//         console.log('generate invoice ');
        
//     }

// }


// **solution 

class CreateBook {
      constructor(title , auther){
        this.title = title;
        this.auther = auther
    }
}

class SaveToDatabase {
    save (book){
        console.log(`save ${book.title}  to database `);
        
    }
}

class GenerateInvoice{
    generate(book){
            console.log(`generate invoice for ${book.title}`);
            
    }
}

const hepta = new CreateBook('hepta','ahmed')

const saveToDatabase = new SaveToDatabase()

const generateInvoice = new GenerateInvoice()

saveToDatabase.save(hepta)

generateInvoice.generate(hepta)