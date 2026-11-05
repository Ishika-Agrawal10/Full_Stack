function memoize(fn) {
    const cache = {};
    return function(n) {
        if (n in cache) {
            console.log("from cache");
            return cache[n];
        }
        const result = fn(n);
        cache[n] = result;
        return result;
    };
}

let fib;

fib = memoize(function(n) {
    if (n <= 1) {
        return n;
    }

    return fib(n - 1) + fib(n - 2);
});

console.log(fib(5));