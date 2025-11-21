//sepereate chaining

class HashTable {
    constructor(size = 10) {
        this.size = size
        this.table = Array.from({length:size} , () => [])
    }

    _hash(key) {
        let hash = 0;
        for(let i=0;i<key.length;i++){
            hash += key.charCodeAt(i)
        }
        return hash % this.size
    }

    set(key, value) {
        const index = this._hash(key)
        const bucket = this.table[index]

        for(let i=0; i<bucket.length;i++) {
            if(bucket[i][0] === key) {
                bucket[i][1] = value
                return
            }
        }
            bucket.push([key, value])

    }
    get(key) {
        const index = this._hash(key)
        const bucket = this.table[index]

        for(let i=0;i<bucket.length;i++) {
            if(bucket[i][0] === key){
                return bucket[i][1]
            }
        }
        return undefined
    }
    remove(key) {
        const index = this._hash(key)
        const bucket = this.table[index]

        for(let i=0; i<bucket.length;i++) {
            if(bucket[i][0] === key){
                bucket.splice(i, 1)
                return true
            }
        }
        return false
    }
    display() {
        
        for(let i=0;i<this.table.length;i++) {
            if(this.table[i]) {
                console.log(i, this.table[i])
            }
        }
    }
}

const ht = new HashTable(5)
ht.set('grape', 10)
ht.set('apple',20)
ht.set('banana',30)
ht.set('lemon',40)
ht.set('melon',50)
ht.display()

console.log(ht.get('lemon'))
ht.remove('banana')
ht.display()