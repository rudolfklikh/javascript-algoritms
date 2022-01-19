class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    };

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return index;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
       delete this.data[this.length - 1];
       this.length--; 
    }
};

const newArray = new MyArray();
newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.delete(0);



function reverse(str) {
    return str.split('').reverse().join(' ');
};



function mergeSortedArrays(arr1, arr2) {
    return [...arr1, ...arr2].sort((el1, el2) => el1 - el2);
};


function moveZeroes(arr) {
    const zeroesArr = arr.filter(el => el === 0); // O(n)
    const nonZeroesArr = arr.filter(el => el !== 0); // O(n)l

    return [...nonZeroesArr, ...zeroesArr];
}
// console.log(moveZeroes([12,4,6,7,0,1,5,7,0,0,5,13,56,7,8])); // O(n + n) === O(n);


function containsDuplicate(arr) {
    const duplicateArr = arr.filter((el, index) => arr.indexOf(el) !== index);
    return duplicateArr.length > 0 ? true : false;
}
// console.log(containsDuplicate( [1,1,1,3,3,4,3,2,4,2]));


function rotate(arr, k) {
    let firstTwoNums = [];
    for (let i = 0; i < k; i++) { // O(n)
        firstTwoNums.push(arr.splice(arr.length - 1, 1)[0]); // 
        firstTwoNums.push(arr.splice(0, 1)[0]);
        arr = [...firstTwoNums, ...arr];
        firstTwoNums = [];
    };
}

rotate( [1,2,3,4,5,6,7], 3);