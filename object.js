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

// object di dalam array
// let blogs = [
//     { title: 'history of Palestine', likes: 190 },
//     { title: 'best laptops in 2024', likes: 70 },
// ];
// console.log(blogs)

let human = {
    name: 'anne',
    age: 25,
    phone: '081200200032',
    email: 'anne@gmail.com',
    gender: 'female',
    blogs: [
        { title: 'history of Palestine', likes: 190 },
        { title: 'best laptops in 2024', likes: 70 },
    ],
    login() {
        console.log('human was successfully logged in');
    },
    logout: () => {
        console.log('human was successfully logged out');
    },
    logBlogs: function () {
        // console.log(this.blogs);
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => {
            console.log(blog);
        })
    }
};

human.login();
human.logout();
human.logBlogs();
console.log('this:', this)

// on the top object with name human, has properties like name, age, etc. except login & logout. login & logout is method of human


// console.log(human);
// console.log(human?.name);

// // human.age = 20;
// console.log(human.age)
// console.log(human['name'])

// human['name'] = 'arum';
// console.log(human['name']);

// console.log(typeof human);


// Math Object

console.log(Math)
console.log(Math.PI)
console.log(Math.E)
console.log(Math.LN2)

const area = 3.0;
console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));
console.log(Math.trunc(area));

// Math number

const random = Math.random();

console.log(random);
console.log(Math.round(random * 100));


// primitive values

let scoreOne = 40;
let scoreTwo = scoreOne;

console.log(`score one : ${scoreOne}`, `and`, `score two : ${scoreTwo}`);

scoreOne = 20;
console.log(`score one : ${scoreOne}`, `and`, `score two : ${scoreTwo}`);


// reference values

const userOne = { name: "anne", age: 25 };
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 22;
console.log(userOne, userTwo);

