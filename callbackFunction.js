function myDisplay(params) {
    console.log(params);
}

function myCalculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}
// to lower case
console.log('APP DOCUMENTATION MOCKUP PHASE BUILD TASK PLAN SKETCH DESIGN'.toLowerCase());

myCalculator(15, 10, myDisplay);