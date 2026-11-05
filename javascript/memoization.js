function memoize(fr){
    const cache = {};
    return function(x,y){
        const key = `${x},${y}`;
        if (key in cache) {
            console.log('from cache');
            return cache[key];
        }
        const result = fr(x, y);
        cache[key] = result;
        return result;3
    };
}
const add =  memoize(function(x, y) {
    return x + y;
});
console.log(add(1, 2));
