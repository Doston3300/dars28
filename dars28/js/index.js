// one

// let son = +prompt('son kiriting')
// if (son > 0) {
//     alert(son + 1)
// } else {
//     alert(son)
// }



//   two
// let son = +prompt('son kiriting')
// if (son > 0) {
//     alert(son + 1)
// } else {
//     alert(son - 2)
// }



//  three
// let son = +prompt('son kiriting')
// if (son > 0) {
//     alert(son + 1)
// } else if (son === 0) {
//     alert(10)
// } else {
//     alert(son - 2)
// }



//four
// counter = 0;
// let son1 = +prompt('1 chi sonni kiriting')
// if (son1 > 0) {
//     counter++
// }

// let son2 = +prompt('2 chi sonni kiriting')
// if (son2 > 0) {
//     counter++
// }
// let son3 = +prompt('3 chi sonni kiriting')
// if (son3 > 0) {
//     counter++
// }
// alert(counter);


//five 

// counter = 0;
// let son1 = +prompt('1 chi sonni kiriting')
// if (son1 < 0) {
//     counter++
// }

// let son2 = +prompt('2 chi sonni kiriting')
// if (son2 < 0) {
//     counter++
// }
// let son3 = +prompt('3 chi sonni kiriting')
// if (son3 < 0) {
//     counter++
// }
// alert(counter);



//six

//   let son1 = +prompt('1 chi sonni kiriting');
//   let son2 = +prompt('2 chi sonni kiriting');
//   if (son1 > son2) {
//       console.log(' 1 chi  son katta ')
//   } else if (son1 < son2) {
//       console.log(' 2 chi son katta ')
//   }



//   seven
//   let son1 = +prompt('1 chi sonni kiriting');
//   let son2 = +prompt('2 chi sonni kiriting');
//   if (son1 < son2) {
//       console.log(' 1 chi  son  kichik ')
//   } else {
//       console.log(' 2 chi son kichik ')
//   }



//  nine
//  let A = +prompt('1 chi sonni kiriting');
//   let B = +prompt('2 chi sonni kiriting');
//   if (A < B) {
//       console.log(' A  son  kichik  B son katta')
//   } else if (A === B) {
//       console.log(' A son teng   B songa')
//   } else {
//       console.log(' A son katta B son kichik')
//   } 



// ten

// let A = +prompt('1 chi sonni kiriting');
// let B = +prompt('2 chi sonni kiriting');
// if (A + B) {
//     console.log(A + B)
// } else if (A == B) {
//     console.log(0)
// }



// vazifa 1

// const JhonBMI = +prompt('sonni kiriting');
// const BobBMI = +prompt('sonni kiriting');
// if (JhonBMI > BobBMI) {
//     console.log('JhonBMI katta')
// } else {
//     console.log('BobBMI katta')
// }



// vazifa 2

// const Son = +prompt('Yoshingizni kirirting');

// if (Son < 18) {
//     console.log('Siz uqishingiz kerak');
// } else if (Son > 18 && Son < 60) {
//     console.log('Siz ishlashingiz kerak');

// } else {
//     console.log('siz nafaqaga chiqishingiz kerak');
// }




// const number = Number(prompt('son kiriting'));
// switch (number) {
//     case 1:
//         console.log('dushanba')
//         break;

//     case 2:
//         console.log('seshanba')
//         break;

//         case 3:
//         console.log('chorshanba')
//         break;

//         case 4:
//         console.log('payshanba')
//         break;

//         case 5:
//         console.log('juma')
//         break;

//         case 6:
//         console.log('shanba')
//         break;

//         case 7:
//         console.log('yakshanba')
//         break;

//     default:
//         console.log('raqam kiriting')
//         break;
// }

// const son = 34.33;


// son > 34.33 ? 'uzbekiston aholisi urtachadan yuqori' : 'uzbekiston aholisi urtachadan pas'







// function number(son) {
//     if (son % 2 === 0) {
//         return true
//     } else {
//         return false
//     }
// }
// console.log(number(20))



// function number(son1, son2, son3) {
//     if (son1, son2, son3) {
//         return (son1 + son2 + son3) / 3
//     }
// }
// console.log(number(30, 20, 10))







// kubini chiqarish

// let num = +prompt('son kiriting')

// function powerA3(a) {
//     return Math.pow(a, 3)
// }
// alert(powerA3(num))



// uzini darajasini chiqarish
// function main(a, b, c) {
//     return `son1  ${Math.pow(a,a)}    son2  ${Math.pow(b,b)}    son3  ${Math.pow(c,c)}`
// }
// alert(main(1, 2, 3))


//  vazifa _1
// let group1_1 = +prompt('1 sonni kiriting');
// let group1_2 = +prompt('2 sonni kiriting');
// let group1_3 = +prompt('3 sonni kiriting');
// let group2_1 = +prompt('4 sonni kiriting');
// let group2_2 = +prompt('5 sonni kiriting');
// let group2_3 = +prompt('6 sonni kiriting');
// // let result1 = (group1_1 + group1_2 + group1_3);
// // let result2 = (group2_1 + group2_2 + group2_3);

// let calcAvg1 = (group1_1 + group1_2 + group1_3);
// console.log(calcAvg1);
// let calcAvg2 = (group2_1 + group2_2 + group2_3);
// console.log(calcAvg2);
// // let result1 = (calcAvg1);
// // let result2 = (calcAvg1);


// if (calcAvg1 > calcAvg2) {
//     console.log('birinchi kamanda yutdi')
// } else if (calcAvg1 === calcAvg2) {
//     console.log('teng')
// } else {
//     console.log('ikkinchi kamanda yutdi')
// }

//  vazifa_2
let a = +prompt('sonni kiriting');

function Studentsnumber(student) {
    let child = 2500;
    return student / child * 100;
}

console.log(Studentsnumber(a), '%')