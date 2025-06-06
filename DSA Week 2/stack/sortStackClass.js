
class Stack{
    constructor(){
        this.stack = []
        this.temp = []
    }
    push(data) {
        this.stack.push(data)
    }
    sort() {
        while(this.stack.length > 0) {
            let temp = this.stack.pop()
            
            while(this.temp.length > 0 && 
            this.temp[this.temp.length - 1] > temp) {
                this.stack.push(this.temp.pop())
            }
            this.temp.push(temp)
        }
        while(this.temp.length > 0) {
            // this.stack.push(this.temp.pop())
            this.stack.unshift(this.temp.pop()); // unshift puts element at the beginning

        }

    }
    
    print() {
        console.log([...this.stack])
    }
}
const sl = new Stack()

sl.push(11)
sl.push(22)
sl.push(1)
sl.push(999)
sl.push(15)
sl.print()
sl.sort()
sl.print()