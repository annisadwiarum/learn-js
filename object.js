// object itu bagian oaling besar di javascript. inti dari banyak hal yang bisa kita lakukan
// ia memilikii hal-hal yang dapat mereka lakukan dengan benar.
// contoh nyata dari sebuah objek adalah ponsel. ponsel adalah objek nyata dan memiliki properti
// properti tersebut bisa berupa warna, ukuran, dll.
// ponsel juga bisa memiliki hal-hal yang dapat di lakukan, seperti berdering, mengambil gambar, dll.

// object in javascript have properties & things they can do (method)
// ex : user (object) => has properties like email, username, gender, etc...
// and has methods like login, logout, etc...

// another ex : blog (object) => has properties like title, content, author, etc..
// and has methods like, publish, unpublish, delete, etc...

// object literal

let human = {
    name: 'anne',
    age: 25,
    phone: '081200200032',
    email: 'anne@gmail.com',
    gender: 'female',
    blogs: ['history of Palestine', 'best laptops in 2024'],
    login: function () {
        console.log('human was successfully logged in');
    },
    logout: function () {
        console.log('human was successfully logged out');
    },
    logBlogs: function () {
        console.log(this.blogs);
    }
};

human.login();
human.logout();
human.logBlogs();

// on the top object with name human, has properties like name, age, etc. except login & logout. login & logout is method of human


// console.log(human);
// console.log(human?.name);

// // human.age = 20;
// console.log(human.age)
// console.log(human['name'])

// human['name'] = 'arum';
// console.log(human['name']);

// console.log(typeof human);


