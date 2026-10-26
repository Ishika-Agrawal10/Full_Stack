let arr = [1,2 ,3,4,5];
let newarr= arr.map((n)=>{return n*n;});
console.log(newarr);

newarr = arr.filter( n => n>3);
console.log(newarr);

let elem =arr.find(n => n>3);
console.log(newarr);

elem =arr.reduce ((sum,n) => sum+=n,0);
console.log(elem);



