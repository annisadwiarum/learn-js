// function declaration

function books() {
    // console.log('function 1st');
}

// function expression

const animes = function () {
    // console.log('One Piece!!');
}

// books();
// books();
// books();

animes();
animes();
animes();


// jadi javascript itu memiliki yg namanya hoisting. di mana itu adalah kelonggaran dalam posisi file function dan ekspressionnya.
// yaitu ketika posisi function berada di bawah expression, function tersbut masih bisa terdefinisi.
// hoiting hanya berlaku untuk funtion declaration. tidak untuk function expression.
// function expression harus di inisialisasi sebelum di run. sedang function declaration tidak harus.
// javascript doesn't hoist function expression. only function declaration.
// i think, i prefer to using function expression, 'cause in the future, 99.9% of the time and probably going to create them like this.


// arguments & parameters

// const novels = function (name, time) {
//     // name adalah local variable yang di sebut function parameters
//     console.log(`Katastrofa Cinta is one of my fav novel!!, ${name} at ${time}`);
// }

// novels('anne', 'tonight');
// // passing the value. 'anne' adalah value dari parameter name. dst. di kenal sebagai argument juga.

// //cth lain
// const comics = function (title = 'Xaxiver', times = 'tonight') {
//     // make default values in parameters when u are not passing anything in
//     console.log(`i read comic ${title} at ${times}`);
// }

// comics();
//tidak pass value apapun di sini saat membuat default value di parameters.


// returning value

const calculation = function (radius) {
    let area = 3.14 * radius ** 2;
    return area;
};

//regular function

const calcArea = function (radius) {
    return 3.14 * radius ** 2;
};

//arrow function

const calcuArea = radius => {
    //jika hanya menggunakan 1 parameter, bisa tidak menggunakan tanda kurung (). 
    //jika ada lebih dari satu parameter, atau tidak menggunakan parameter, tanda kurung () wajib di pakai.
    return 3.14 * radius ** 2;
}

//bisa di buat satu baris saja, 
const exCalcuArea = radius => 3.14 * radius ** 2;

const b = exCalcuArea(5);
// console.log('area is :', b);


// practise arrow functions

// const greet = function () {
//     return "Assalamu'alaikum";
// };

// const greetTwo = () => "Assalamu'alaikum ya habibi";
// const result = greetTwo();
// console.log(result);

// const bill = function (product, tax) {
//     let total = 0;
//     for (let i = 0; i < product.length; i++) {
//         total += product[i] + product[i] * tax;
//     }
//     return total;
// }

const bill = (product, tax) => {
       let total = 0;
    for (let i = 0; i < product.length; i++) {
        total += product[i] + product[i] * tax;
    }
    return total;
}

console.log(bill([10], 0.2));


const name = 'anne';

// function
const greet = () => 'merhaba';

let resultOne = greet();
console.log(resultOne);

// method
let resultTwo = name.toUpperCase();
console.log(resultTwo)

// callback & foreach

const myFunc = (callBackFunc) => {
    // do something
    let value = 25;
    callBackFunc(value);
}

// myFunc(function (value) {
//     // do something
//     console.log(value);
// });

// bentuk arrow func
myFunc(value => {
    // do something
    console.log(value);
});

let people = ['anne', 'mark', 'mitha'];

// people.forEach(function (person) {
//     console.log(person);
// })

// with arrow func

// people.forEach((person, index) => {
    //     console.log(index, person);
    // });
    
    const logPerson = (person, index) => {
        console.log(`${index} - hallo ${[person]}`);
    }
    
people.forEach(logPerson);


// get a reference to the 'ul'

const ul = document.querySelector('.people');

let html = ``;

people.forEach(function (person) {
    // create html template
    html += `<li style="color: green">${person}</li>`;
});

console.log(html);
ul.innerHTML = html;