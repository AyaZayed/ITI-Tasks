// ! No Solid

class DB {
        connectToDB() {
                console.log('connect to DB');
        }

        getUsers() {
                console.log('get users');
        }

        getPosts() {
                console.log('get posts');
        }
}

// * Solid Single Responsibility

class DB {
        connectToDB() {
                console.log('connect to DB');
        }
}

class User {
        constructor(db) {
                this.db = db
        }
        getUsers() {
                console.log('get users');
        }
}

class Post {
        getPosts() {
                console.log('get posts');
        }
}

const db = new DB()
const user = new User()
const post = new Post()

db.connectToDB()
user.getUsers()
post.getPosts()