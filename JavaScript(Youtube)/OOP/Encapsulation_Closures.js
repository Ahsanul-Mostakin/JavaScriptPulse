function createCounter(){
    let count = 0;


    return{ //object
        increment: function (){
            count++
        },
        decrement: function (){
            count--
        },
        getCount:function (){
            return count;
        }
    }
}

const counter=createCounter();
counter.increment();//1
counter.increment();//2
counter.increment();//3
counter.decrement();//2

console.log(counter.getCount());