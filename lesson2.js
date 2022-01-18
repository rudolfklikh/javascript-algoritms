// function findCommonItem(array1, array2) {
// Second Solution. would be :
//   const findCommonArr = [...array1 ,...array2].filter((item, index) => [...array1 ,...array2].indexOf(item) !== index); // O(n);
//   return findCommonArr.length > 0 ? true : false;

//   // First Solution , would be :
//   for (let i = 0; i < array1.length; i++) { // O(n)
//     if (array2.includes(array1[i])) { // O(n)
//       return true;
//     }
//   };
//   return false; // O(n^2);
// }

// console.log(findCommonItem(["a", "b", "c", "x"], ["z", "y", "i"]));
// console.log(findCommonItem(["a", "b", "c", "x"], ["z", "y", "x"]));

// function hasPairWithSum2(arr, sum) {
//     const mySet = new Set();

//     for (let i = 0; i < arr.length; i++) {
//         console.log(mySet, 'SET');
//         if (mySet.has(arr[i])) {
//             return true;
//         }
//         mySet.add(sum - arr[i]);
//     };
//     return false;
// }
// console.log(hasPairWithSum2([6,4,3,2,1,7], 9));

// const food = ['apple', 'strawberry', 'pineapple',  'strawberry', 'pineapple', 'lemon', 'orange'];

// const objMap = food.reduce((acc, food) => {
//     acc.push(food);
//     return acc;
// }, []);

// console.log(objMap);
