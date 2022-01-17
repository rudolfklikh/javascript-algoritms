// const nemo = ['nemo'];
// const large = new Array(1000).fill('nemo');

// function findNemo(array) {

//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === 'nemo') {
//             // console.log('Found NEMO!', `${i} ITERATION`);
//         };
//     };
// };

// findNemo(large); // O(n) -> linear time  


// function compressFirstBox(boxes) { // O(1) -> Constant Time
//     console.log(boxes[0]);
// };


// function funChallenge(input) { // [2,3]
//     let a = 10;
//     a = 50 + 3;
  
//     for (let i = 0; i < input.length; i++) {
//       anotherFunction();
//       let stranger = true;
//       a++;
//     }
//     return a;
//   } // Should be a O(n)


//   function anotherFunChallenge(input) {
//     let a = 5; // O(1)
//     let b = 10; // O(1)
//     let c = 50; // O(1)

//     for (let i = 0; i < input; i++) {
//       let x = i + 1; // O(n)
//       let y = i + 2; // O(n)
//       let z = i + 3; // O(n)
//     }

//     for (let j = 0; j < input; j++) {
//       let p = j * 2; // O(n)
//       let q = j * 2; // O(n)
//     }
//     let whoAmI = "I don't know"; // O(1)
//   }
//   // 4 + 5n = BIG O(4 + 5n) = O(n) 


//   function compressBoxesTwice(boxes, boxes2) { // Diferent terms for inputs
//       boxes.forEach(boxes => {
//         console.log(boxes);
//       });

//       boxes2.forEach(boxes => {
//         console.log(boxes);
//       });
//   }; // BIG O(n + m), because different terms for inputs , we can not combine them !



//   function logAllPairsOfArray(array) { // [1,2]
//       for (let i = 0; i < array.length; i++) {
//           for (let j = 0; j < array.length; j++) {
//                 console.log([array[i], array[j]]);
//           }
//       }
//   }

// logAllPairsOfArray([1,2,3,4,5]) // BIG O  --> should be O(n^2) 