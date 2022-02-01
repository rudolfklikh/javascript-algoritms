const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let highestNum = arr[0];
//     for (let j = 0; j < arr.length; j++) {
//       if (j === arr.length - 1) {
//         break;
//       } else {
//         if (highestNum > arr[j + 1]) {
//           let temp = arr[j + 1];
//           arr[j] = temp;
//           arr[j + 1] = highestNum;
//         } else if (highestNum < arr[j + 1]) {
//           highestNum = arr[j + 1];
//         }
//       }
//     }
//   }
//   return arr;
// }

// console.log(bubbleSort(numbers));

// function selectionSort(array) {

//   for (let i = 0; i < array.length; i++) {
//     let smallestNumber = i;
//     let temp = array[i];
    
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] < array[smallestNumber]) {
//         smallestNumber = j;
//       }
//     }
//     array[i] = array[smallestNumber];
//     array[smallestNumber] = temp;
//   }
//   return array;
// }

// console.log(selectionSort(numbers), "Selection Sort");
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// 1 2 6 44 99 
// function insertionSort(arr) {
//     const length = arr.length;
//     for (let i = 0; i < length; i++) {
//         if (arr[i] < arr[0]) {
//             arr.unshift(arr.splice(i,1)[0]);
//         } else {
//             for (let j = 1; j < i; j++) {
//                 if(arr[i] > arr[j - 1] && arr[i] < arr[j]) {
//                     arr.splice(j, 0, arr.splice(i,1)[0]);
//                 }
//             }
//         }
//     }
//     return arr;
// }
// console.log(insertionSort(numbers), 'Insertions Sort');
// function mergeSort(arr) {

//     if (arr.length === 1) {
//         return arr;
//     }
//     const length = arr.length;
//     const middle = Math.floor(length / 2);
//     const left = arr.slice(0, middle);
//     const right = arr.slice(middle);

//     return merge(
//         mergeSort(left),
//         mergeSort(right),
//     );
// };

// function merge(left, right) {
//     const result = [];
//     let leftIndex = 0;
//     let rightIndex = 0;
//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             result.push(right[rightIndex]);
//             rightIndex++;
//         };
//     };

//     return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
// };

// const answer = mergeSort(numbers);
// console.log(answer);