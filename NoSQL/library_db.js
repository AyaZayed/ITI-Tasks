// ****** Task 2

// Lab - task2 : Add new books
db.books.insertMany([
        {
                title: "Introduction to Algorithms",
                author: "Dr. Mohamed Ahmed",
                isbn: "978-111222333",
                price: 85,
                publishYear: 2023,
                categories: ["algorithms", "computer science"],
                language: "Arabic",
                pages: 450,
                inStock: true
        },
        {
                title: "Computer Networks",
                author: "Dr. Sara Mahmoud",
                isbn: "978-444555666",
                price: 70,
                publishYear: 2022,
                categories: ["networks", "technology"],
                language: "Arabic",
                pages: 380,
                inStock: false
        },
        {
                title: "Information Security",
                author: "Dr. Khaled Abdullah",
                isbn: "978-777888999",
                price: 95,
                publishYear: 2023,
                categories: ["security", "technology"],
                language: "Arabic",
                pages: 520,
                inStock: true
        }
])

// Lab - task2 : Display all books
db.books.find().pretty()

// Lab - task2 : Count available books
db.books.countDocuments({ inStock: true })

// ****** Task 3

// Lab - task3 : Find books by Dr. Mohamed Ahmed
db.books.find({ author: "Dr. Mohamed Ahmed" })

// Lab - task3 : Find only available books
db.books.find({ inStock: true })

// Lab - task3 : Find books priced more than 80
db.books.find({ price: { $gt: 80 } })

// Lab - task3 : Find books in "technology" category
db.books.find({ categories: "technology" })

// Lab - task3 : Show only title and author for books published in 2023
db.books.find({ publishYear: 2023 }, { title: 1, author: 1 })

// Lab - task3 : Find books with more than 400 pages
db.books.find({ pages: { $gt: 400 } })

// Lab - task3 : Find books published between 2022 and 2023
db.books.find({ publishYear: { $gt: 2021, $lt: 2024 } })

// Lab - task3 : Count books by each author
db.books.aggregate([
        {
                $group: {
                        _id: "$author",
                        count: { $sum: 1 }
                }
        }
])

// ****** Task 4

// Lab - task4 : Increase all book prices by 10%
db.books.updateMany({}, { $mul: { price: 1.1 } })

// Lab - task4 : Update "Computer Networks" book status to available
db.books.updateOne({ title: "Computer Networks" }, { $set: { inStock: true } })

// Lab - task4 : Add "discount" field with value true for books priced over 90
db.books.updateMany({ price: { $gt: 90 } }, { $set: { discount: true } })

// Lab - task4 : Add "reference" category to "Introduction to Algorithms"
db.books.updateMany({ title: "Introduction to Algorithms" }, { $set: { categories: { $push: "reference" } } })

// Lab - task4 : Remove "networks" category from all books that have it
db.books.updateMany({ categories: "networks" }, { $set: { categories: { $pull: "networks" } } })

// Lab - task4 : Update the page count of "Information Security" to 550
db.books.updateMany({ title: "Information Security" }, { $set: { pages: 550 } })

// ****** Task 5

// Lab - task5 : Add new members
db.members.insertMany([
        {
                name: "Ahmed Mohamed Ali",
                email: "ahmed.ali@student.iti.gov.eg",
                membershipType: "student",
                joinDate: new Date("2023-09-01"),
                borrowedBooks: [],
                maxBooksAllowed: 3,
                isActive: true
        },
        {
                name: "Fatma Hassan Mahmoud",
                email: "fatma.hassan@teacher.iti.gov.eg",
                membershipType: "teacher",
                joinDate: new Date("2022-01-15"),
                borrowedBooks: ["978-111222333"],
                maxBooksAllowed: 5,
                isActive: true
        },
        {
                name: "Omar Khaled Salem",
                email: "omar.salem@student.iti.gov.eg",
                membershipType: "student",
                joinDate: new Date("2023-03-10"),
                borrowedBooks: ["978-444555666", "978-777888999"],
                maxBooksAllowed: 3,
                isActive: false
        }
])

// Lab - task5 : Find all active students
db.members.find({ membershipType: "student", isActive: true })

// Lab - task5 : Find members with borrowed books
db.members.find({
        borrowedBooks: { $exists: true }
})

// Lab - task5 : Find teachers who can borrow more than 3 books
db.members.find({ membershipType: "teacher", maxBooksAllowed: { $gt: 3 } })

// Lab - task5 : Update Omar's status to active
db.members.updateOne({ name: "Omar Khaled Salem" }, { $set: { isActive: true } })

// Lab - task5 : Add a new borrowed book to Ahmed's record
db.members.updateOne({ name: "Ahmed Mohamed Ali" }, { $set: { borrowedBooks: { $push: "978-777888999" } } })

// ****** Task 6

// Lab - task6 : Find books with titles starting with "Computer"
db.books.find({
        title: { $regex: /^Computer/ }
})

// Lab - task6 : Find all members with email ending in "student.iti.gov.eg"
db.members.find({
        email: { $regex: /student\.iti\.gov\.eg$/ }
})

// Lab - task6 : Find books in both "technology" and "security" categories
db.books.find({
        categories: { $all: ["technology", "security"] }
})

// Lab - task6 : Find members who joined in 2023
db.members.find({
        joinDate: { $gte: new Date("2023-01-01"), $lt: new Date("2024-01-01") }
})

// Lab - task6 : Find books that are either expensive (>90) OR out of stock
db.books.find({
        $or: [{ price: { $gt: 90 } }, { inStock: false }]
})

// Lab - task6 : Find books that are NOT in "algorithms" category
db.books.find({
        categories: { $nin: "algorithms" }
})