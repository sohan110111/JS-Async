function myDisplay(params) {
    console.log(params);
}

function myCalculator(num1, num2, callback) {
    let sum = num1 + num2;
    callback(sum);
}

myCalculator(15, 10, myDisplay);