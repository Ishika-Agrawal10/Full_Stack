function managecounter(){
    let count=0;
    function increment(){
        count++;
        console.log(count);
    }
    function decrement(){
        count--;
        console.log(count);
    }
    return {increment, decrement};
}
    let counter=managecounter();
    counter.increment();
    counter.decrement();

