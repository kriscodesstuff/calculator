const screen = document.querySelector('#screen');
const calculatorItems = document.querySelectorAll('.calculator-item');



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



let num1 = '';
let operator;
let num2 = '';

const operate = function(num1,num2,operator){
    num1 = Number.parseInt(num1);
    num2 = Number.parseInt(num2);

    switch(operator){
        case 'add-btn':
            return add(num1,num2);
        case'subtract-btn':
            return subtract(num1,num2);
        case'multiply-btn':
            return  multiply(num1,num2);
        case'divide-btn':
            return divide(num1,num2);
    }
}



const getResults = function(e){

    if(operator){

        if(e.target.id == '1' || e.target.id == '2' || e.target.id == '3' || e.target.id == '4'
        || e.target.id == '5' || e.target.id == '6' || e.target.id == '7' || e.target.id == '8'
        ||e.target.id == '9'){
            num2 += e.target.id;
            screen.innerText = num2;
        }else if(e.target.id == 'equal-btn'){
            screen.innerText = operate(num1,num2,operator);
            num1 = '';
            num2 = '';
            operator = undefined;
            
        }
    }

    if(!operator){

        if(e.target.id == '1' || e.target.id == '2' || e.target.id == '3' || e.target.id == '4'
        || e.target.id == '5' || e.target.id == '6' || e.target.id == '7' || e.target.id == '8'
        ||e.target.id == '9'){
            num1 += e.target.id;
            screen.innerText = num1;
        }else if(e.target.id == 'add-btn' || e.target.id == 'subtract-btn' ||
        e.target.id == 'multiply-btn' || e.target.id == 'divide-btn'){
            operator = e.target.id;
        }
    }

    
    

  
}

calculatorItems.forEach(item =>{
    item.addEventListener('click', getResults)
})




