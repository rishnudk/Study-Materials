

class HashTable {
    constructor(size = 10) {
        this.size = size
        this.count = 0
        this.loadFactor = 0.7
        this.table = new Array(size).fill(null)
    }

    hash1(key) {
        let hash = 0
        for(let i=0;i<key.length;i++) {
            hash = hash + key.charCodeAt(i)
        }
        return hash % this.size
    }
    hash2(key) {
        let hash = 0
        for(let i=0;i<key.length;i++) {
            hash = hash + key.charCodeAt(i)
        }
        return 7 - (hash % 7)
    }

    set (key, value) {
        if(this.count / this.size > this.loadFactor) {
            this.rehash()
        }
        let index = this.hash1(key)
        let step = this.hash2(key)
        let i = 0

        while(this.table[index] !== null && this.table[index].key !== key) {
            i++
            index = (this.hash1(key) + i * step) % this.size
        }
        if(this.table[index] === null) {
            this.count++
        }
        this.table[index] = {key, value}
    }
 
    rehash() {
        const oldTable = this.table
        this.size *= 2
        this.count = 0
        this.table = new Array(this.size).fill(null)

        for(let item of oldTable) {
            if(item !== null) {
                this.set(item.key, item.value)
            }
        }
    }

    print() {
        for(let i=0;i<this.table.length;i++) {
            if(this.table[i]) {
                console.log(i , this.table[i])
            }
        }
    }
}

const sl = new HashTable(9)
sl.set('namaze', 'rishnu')
sl.set('naacaame', 'rishnu')
sl.set('naddme', 'rishnu')
sl.print()
