//WAP to create a timer for 15 minutes using set interval and set time out.Display the passing time.

let time = 0;

let timer = setInterval(() => {
    time++;
    console.log("Time passed: " + time + " seconds");
}, 1000);

setTimeout(() => {
    clearInterval(timer);
    console.log("15 minutes completed!");
}, 15 * 60 * 1000);