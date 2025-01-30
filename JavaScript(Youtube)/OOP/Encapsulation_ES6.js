class createCounter {
    #count = 0;  // private field

    increment() {
        this.#count++;
    }

    decrement() {
        this.#count--;
    }

    getCount() {
        return this.#count;
    }
}

let counter = new createCounter()
counter.increment()//1
counter.increment()//2
counter.increment()//3
counter.decrement()//2

console.log(counter.getCount())