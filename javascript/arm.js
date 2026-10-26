function checkArmstrong(num) {
let sum=0;
let x=num;
let digits=num.toString().length;
while(x!=0){
    let p=1;
    let tem=x%10;
    for(let i=0;i<digits;i++){
        p*=tem;
    }
    sum+=p;
    x=Math.floor(x/10);
}
if(sum==num){
    document.getElementById("result").innerHTML = num + " is an Armstrong number";
}
else{
    document.getElementById("result").innerHTML = num + " is not an Armstrong number";
}
document.getElementByTagName("body")[0].append(para);
}