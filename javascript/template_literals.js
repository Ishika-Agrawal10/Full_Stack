let op="Good"
let a=`gla university is ${op}`;
console.log(a);

let b=`gla university is ${op} and it is located in ${"Mathura"}`;
console.log(b);

let img="https://picsum.photos/id/237/200/300";
let title="Dog Image";
let des="Description of the image";

let c=`<img src="${img}"> 
<h3>${title}</h3> 
<p>${des}</p>`
;
document.getElementById("demo").innerHTML=c;