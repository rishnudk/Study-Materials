

class LinearProbing{
    constructor(size = 10) {
        this.size = size
        this.table = new Array(size).fill(null)
    }

    hash(key) {
        let hash = 0
        for(let i=0;i<key.lenght;i++){
            hash = hash + key.charCodeAt(i)
        }
        return hash % this.size
    }

    set(key, value) {
        let index = this.hash(key)
        let start = index

        while(this.table[index] !== null && this.table[index].key !== key) {
            index = (index +1) % this.size
            if(index === start) {
                console.log('hashtable is full')
                return
            }
        }
        this.table[index] = {key, value}

        
    }
    print() {
        for(let i=0;i<this.size;i++) {
            if(this.table[i]) {
                console.log( i , this.table[i])
            }
        }
    }
}

const sl = new LinearProbing(5)
sl.set('name', 'rishnu')
sl.set('nawwme', 'rishnu')
sl.set('namdde', 'rishnu')
sl.set('namdde', 'rishnu')
sl.set('nameee', 'rishnu')
sl.set('nameee', 'rishnu')
sl.print()