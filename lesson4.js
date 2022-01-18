class HashTable {
    constructor(size) {
        this.size = size;
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        this.data[this._hash(key)] = [key, value];
    };

    get(key) {
        return this.data[this._hash(key)]
    };

    keys() {
        const keysArray = [];

        for (let i = 0; i < this.data.length; i++) {
            this.data[i] ? keysArray.push(this.data[i][0]) : '';
        };
        return keysArray;
    };
};

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 1000);
myHashTable.set('apples', 53);
myHashTable.set('oranges', 13);
console.log(myHashTable);
console.log(myHashTable.get('grapes'));

console.log(myHashTable.keys());


function firstReccursionCharacter(arr) {
    const duplicateChar = arr.filter((el, index) => arr.indexOf(el) !== index);
    return duplicateChar[0];
};
console.log(firstReccursionCharacter([2,5,1,2,3,5,1,2,4]));
console.log(firstReccursionCharacter([2,1,1,2,3,5,1,2,4]));
console.log(firstReccursionCharacter([2,3,4,5]));