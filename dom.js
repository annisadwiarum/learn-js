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
    // console.log(para.innerText);
    para.innerText += ' new text';
})

const content = document.querySelector(".content");
// console.log(content.innerHTML)
// content.innerHTML += '<h2> anatakara </h2>';
// console.log(content)

const people = ['anne', 'mitha', 'rudi'];

people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});
// console.log(content)


// get attributes

const link = document.querySelector('a');
// console.log(link.getAttribute('href'));


// set attributes (change attributes)

link.setAttribute('href', 'https://www.instagram.com/annisadwiarum/');
link.innerText = 'my instagram';
console.log(link.getAttribute('href'));

const message = document.querySelector('p');
console.log(message.getAttribute('class'));
//change name attribute
message.setAttribute('class', 'success');
message.setAttribute('style', 'color: red;');

const title = document.querySelector('h1');
// title.setAttribute('style', 'margin: 50px;');
// to see properties of the style
console.log(title.style);
// to get properties of style
console.log(title.style.color)
// add/change style by calling the property name
title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '20px';
title.style.margin = '';
