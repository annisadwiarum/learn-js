// for loops

// for (let i = 0; i < 5; i++) {
//     console.log('in loop:', i);
// }

// console.log('loop is finished');

// const names = ['Theo', 'Dhery', 'Mark'];

// for (let i = 0; i < names.length; i++) {
//     // console.log(names[i]);
//     let html = `
//     <div>${names[i]}</div>
//     `;
//     console.log(html)
// }


// while loops

// let i = 0;
// while (i < 5) {
//     console.log('in loop:', i);
//     i++;
// }


// do while loops

// let i = 5;
// do {
//     console.log('value of i is:', i);
//     i++;
// } while (i < 5)


// if statements

// const age = 21;

// if (age > 20) {
//     console.log('you are over 20 years old');
// }

// let team = ['joy', 'thur', 'zero']

// if (team.length > 2) {
//     console.log('hooo yeaaa, that is a lot of team')
// }


// esle if statements

// const password = 'password12345';

// if (password.length >= 12) {
//     console.log('that password is mighty strong');
// } else if (password.length >= 8) {
//     console.log('the password is long enough!');
// } else {
//     console.log('the password is not long enough!');
// }


// logical operators - OR || and AND &&

// const password = 'p@sss';

// if (password.length >= 12 && password.includes('@')) {
//     console.log('that password is mighty strong');
// } else if (password.length >= 8 || password.includes('@') && password.length >= 5) {
//     console.log('the password is strong enough!');
// } else {
//     console.log('the password is not strong enough!');
// }


// logical NOT (!)

// let user = false

// if (!user) {
// // console.log('u must be logged in to continue')
// }


//break and continue

const scores = ['60', '25', '0', '50', '100', '40', '30'];

for (let i = 0; i < scores.length; i++) {

    if (scores[i] == 0) {
        continue;
    }

    // kalo dari tutor, beliau bisa pake strict comparison ===. tapi di sini kalo pakai itu gak jalan kondisi if nya. saat pakai loose comparison ==, baru bisa berjalan if nya.

    // console.log('your score:', scores[i]);

    if(scores[i] == 100) {
        // console.log('congrats! you got the top score!!!');
        break;
    }
}


// switch statements
// switch ini menggunakan strict equality === untuk melakukan check. tidak ada kelonggaran value. bukan hanya value, namun strict untuk type data juga.
// break; di akhir case itu perlu agar value next case tidak ikut terender.

const grade = 'A';

// switch (grade) {
//     case 'A':
//         console.log('you got A!');
//         break;
//     case 'B':
//         console.log('you got B!');
//         break;
//     case 'C':
//         console.log('you got C!');
//         break;
//     case 'D':
//         console.log('you got D!');
//         break;
//     case 'E':
//         console.log('you got E!');
//         break;
//     default:
//         console.log('undifined');
// }


// variable & block scope

// const age = 25;

// if (true) {
//     // age = 20;
//     const age = 30;
//     const name = 'anne';
//     console.log('inside 1st code block', age, name);
// }
// if (true) {
//     const age = 50;
//     console.log('inside 2nd code block', age);
//     // var test = 'yeayy'
// }

// console.log('outside code block', age, test);
