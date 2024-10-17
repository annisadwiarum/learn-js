const greet = document.querySelector('div.error');
// console.log(greet)

const greets = document.querySelectorAll('p');
// greets.forEach(greet => {
//     console.log(greet)
// })
// console.log(greets)

// const errors = document.querySelectorAll('.error');
// console.log(errors)


// get an element by ID
// const title = document.getElementById('title');
// console.log(title)

// get elements by their class name
// const errors = document.getElementsByClassName('error');
// console.log(errors)
// console.log(errors[0])
// errors.forEach(error => {
//     console.log(errors)
// });


// get elements by their tag name
// const params = document.getElementsByTagName('p');
// console.log(params);
// console.log(params[1]);

const param = document.querySelector('p');
// console.log(params.innerText)

// params.innerText = 'hello everyone';

const params = document.querySelectorAll('p');

params.forEach(para => {
    console.log(para.innerText);
    para.innerText += ' new text';
})

const content = document.querySelector(".content");
console.log(content.innerHTML)