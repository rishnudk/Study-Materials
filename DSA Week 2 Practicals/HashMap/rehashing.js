class HashTable {
    constructor(size = 4) {
    this.size = size
    this.count = 0
    this.loadFactor = 0.7
    this.table = Array.from({length:size} , () => [])

}
hash(key) {
    let hash = 0
    for(let i=0;i<key.length;i++) {
        hash = hash + key.charCodeAt(i)
    }
    return hash % this.size
}
set( key, value) {
    const index = this.hash(key)
    const bucket = this.table[index]

    for(let i=0;i<bucket.length;i++) {
        if(bucket[i][0] === key) {
            bucket[i][1] = value
            return
        }
    }
    bucket.push([key, value])
    this.count++
    
    const currLoad = this.count / this.size
    if( currLoad > this.loadFactor) {
        this.rehash()
    }
}

get(key) {
    const index = this.hash(key)
    const bucket = this.table[index]

    for(let i=0;i<bucket.length;i++) {
        if(bucket[i][0] === key) {
            return bucket[i][1]
        }
    }
    return undefined
}
rehash() {
    const oldTable = this.table
    this.size *= 2
    this.count = 0
    this.table = Array.from({length: this.size} , () => [])
    
    for(let bucket of oldTable) {
        for(let [key, value] of bucket) {
            this.set(key , value)
        }
    }
}
print() {
    for(let i=0;i<this.table.length;i++) {
        if(this.table[i]) {
            console.log(i, this.table[i])
        }
    }
}
 }

 const sl = new HashTable(2)

 sl.set('name' ,  'rishnu')
 sl.set('age', 22)
 sl.set('from' , 'knr')
 sl.set('lang' , 'java')
 sl.print()