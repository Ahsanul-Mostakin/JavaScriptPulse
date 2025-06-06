class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}; 
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    ShiftItems(index) {
       
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1]; 
        this.length--;
    }

    delete(item) {
        
        for (let i = 0; i < this.length; i++) {
            if (this.data[i] === item) {
                this.ShiftItems(i);
                break;
            }
        }
    }
}

const newArray = new MyArray();

newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.delete('hi');  
newArray.push('are');
newArray.push('nice');

console.log(newArray);  
console.log(newArray.data);  
console.log(newArray.length);  
