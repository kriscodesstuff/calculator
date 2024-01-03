const screen = document.querySelector('#screen');
const calculatorItems = document.querySelectorAll('.calculator-item');



const add = function(a,b){
    return a + b;
}

const subtract = function(a,b){
    return a - b;
}

const multiply = function(a,b){
    return a * b;
}

const divide = function(a,b){
    const result = a / b;
    return  Math.round(result * 100) / 100;
}



let num1 = '';
let operator;
let num2 = '';

const operate = function(num1,num2,operator){
    num1 = Number.parseInt(num1);
    num2 = Number.parseInt(num2);

    switch(operator){
        case '+':
            return add(num1,num2);
        case'-':
            return subtract(num1,num2);
        case'x':
            return  multiply(num1,num2);
        case'/':
        if(num1 == 0 || num2 == 0){
            return "Can't divide by 0"
        }else{
            return divide(num1,num2);
        }
            
    }
}



const getResults = function(e){

    if(operator){

        if(e.target.classList.contains('number')){
            num2 += e.target.id;
            screen.innerText = `${num2}`;

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
        }else if(e.target.classList.contains('operator') && num1){
            operator = e.target.id;
            screen.innerText = `${num1}`

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




