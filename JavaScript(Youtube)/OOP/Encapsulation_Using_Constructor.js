function CreateCounter(){
    let count = 0


    this.increment=()=>{
        count++
    }

    this.decrement=()=>{
        count--
    }

    this.getCount=()=>{
        return count;
    }
}

const counter = new CreateCounter();

counter.increment();
counter.increment();
counter.increment();
counter.decrement();

console.log(counter.getCount());