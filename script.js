const add = function(a,b){
    console.log(a + b);
    return a + b;
}

const subtract = function(a,b){
    console.log(a - b);
    return a - b;
}

const multiply = function(a,b){
    console.log(a * b);
    return a * b;
}

const divide = function(a,b){
    console.log(a / b);
    return a / b;
}

let num1;
let operator;
let num2;

const operate = function(num1,num2,operator){
    switch(operator){
        case '+':
            add(num1,num2);
            break;
        case'-':
            subtract(num1,num2);
            break;
        case'x':
            multiply(num1,num2);
            break;
        case'/':
            divide(num1,num2);
    }
}

operate(22,2,'/');

