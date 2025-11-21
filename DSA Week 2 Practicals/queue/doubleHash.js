class DoubleHashingHashTable {
    constructor(size) {
        this.table = new Array(size);
        this.size = size;
    }

    // First hash function
    h1(key) {
        return key % this.size;
    }

    // Second hash function (must not return 0!)
    h2(key) {
        return 1 + (key % (this.size - 1));
    }

    insert(key) {
        let index = this.h1(key);
        let step = this.h2(key);
        let i = 0;

        while (this.table[(index + i * step) % this.size] !== undefined) {
            i++;
        }

        let finalIndex = (index + i * step) % this.size;
        this.table[finalIndex] = key;
    }

    display() {
        console.log(this.table);
    }
}


let ht = new DoubleHashingHashTable(7);
ht.insert(10);  // h1 = 3
ht.insert(20);  // h1 = 6
ht.insert(5);   // h1 = 5
ht.insert(15);  // h1 = 1 (collision → uses h2 to resolve)
ht.display();
