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

        if(e.target.classList.contains('number')){
            num2 += e.target.id;
            screen.innerText = num2;

        }else if(e.target.classList.contains('operator')){
            screen.innerText = operate(num1,num2,operator);
            num1 = operate(num1,num2,operator);
            num2 = '';
            operator = e.target.id;
        }else if(e.target.id == 'equal-btn'){
            screen.innerText = operate(num1,num2,operator);
            num1 = '';
            num2 = '';
            operator = '';
            
        }
    }

    if(!operator){

        if(e.target.classList.contains('number')){
            num1 += e.target.id;
            screen.innerText = num1;
        }else if(e.target.classList.contains('operator')){
            operator = e.target.id;
        }
    }

    if(e.target.id == 'clear-btn'){
        num1 = '';
        num2 = '';
        operator = '';
        screen.innerText = 0;
    }

    
    

  
}

calculatorItems.forEach(item =>{
    item.addEventListener('click', getResults)
})




