console.log('****** Loops Practice *******');


// 1. 'for' loop
console.log('---- 1. For loops ----');
// Example: a for loop to console.log numbers from 0 to 3
console.log('count from 0 to 3');
// start i at 0, while i is < 4 do code between {}, afterwards add 1 to i (i++)
for (let i=0; i<4; i++) {
  console.log(i);
}

// 1.a. TODO: Write a for loop to console.log the numbers from 0 to 5
//   - Which part of the example loop do you need to change to do this?
//   -You change i4 to i<6
console.log('count from 0 to 5');
for (let i=0; i<6; i++) {
  console.log(i);
}


// 1.b. TODO: Write a for loop to console.log the numbers from 3 to 5
//   - Which part of the example loop do you need to change to do this?
//   - You change the index value of i=0 to i=3
console.log('count from 3 to 5');
for (let i=3; i<6; i++) {
  console.log(i);
}


// 1.c. TODO: Write a for loop to console.log EVEN numbers from 2 to 10
//   - Which part of the example loop do you need to change to do this?
//   - changed to show that index values are the even evennumbers
//   - changed console log to show a for loop instead of a value
console.log('count even numbers from 2 to 10 (2, 4, 6, 8, 10):');
let evennumbers = [ '2', '4', '6', '8', '10' ];
for (let i=0; i<evennumbers.length; i++) {
  console.log('for loop', evennumbers[ i ]);
}

// 1.d. (STRETCH) TODO: Write a for loop to do a counddown from 5 to 0
console.log('STRETCH: countdown from 5 to 0');
console.log('count from 5 to 0');
for (let i=0; i<6; i++) {
  console.log(i);
}

// 2. For of loops
console.log('---- 2. For Of loop ----');
let stars = ['Polaris', 'Gacrux', 'Formalhaut', 'Rigel', 'Deneb'];

// 2.a. TODO: Write a for of loop to console.log each star in the 'stars' array
console.log('Some stars:');
for (let i=0; i<5; i++) {
  console.log('for loop', stars[ i ]);
}

// 3. While loops
console.log('---- 3. While loop ----');

// 3.a. TODO: Write a while loop to console.log each star in the 'stars' array
console.log('Some stars using while:');
let i = index;
const max = 5;
while( i<stars) {
  console.log( 'while loop stars:', stars[ i ]);
  index=i++;
}



// 3.b. TODO: Write a while loop to console.log the numbers from 0 to 5
console.log('count from 0 to 5');

// 3.c. TODO: Write a while loop to console.log the numbers from 10 to 5
console.log('count backwards from 10 to 5');
