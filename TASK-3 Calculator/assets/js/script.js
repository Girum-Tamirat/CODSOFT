document.addEventListener('DOMContentLoaded', ()=>{
    const display=document.getElementById('inandout');
    const numbers=document.querySelectorAll('.numbers');
    const operators=document.querySelectorAll('.operators');
    const decimal=document.getElementById('decimal');
    const equal=document.getElementById('equal');
    const backspace=document.getElementById('backspace');
    const clearAll=document.getElementById('clearAll');

    let currentInput='';

    numbers.forEach(button=>{
        button.addEventListener('click', ()=>{
            if(currentInput.length<15){
                currentInput+=button.textContent;
                display.value=currentInput;
            }
        });
    });

    function isOperator(char){
        return ['+','-','*','/'].includes(char);
    }

    operators.forEach(button=>{
        button.addEventListener('click', ()=>{
            if(currentInput && !isOperator(currentInput.slice(-1))){
                currentInput+=button.textContent;
                display.value=currentInput;
            }
        });
    });

    decimal.addEventListener('click', ()=>{
        const lastPart = currentInput.split(/[\+\-\*\/]/).pop();
        if(!lastPart.includes('.')){
            currentInput+='.';
            display.value=currentInput;
        }
    });

    equal.addEventListener('click', ()=>{
        try{if(currentInput&&!isOperator(currentInput.slice(-1))){
         display.value=eval(currentInput);
         currentInput=display.value;   
        }}catch(e){
            display.value='ERROR';
            currentInput='';
        }
    });

    backspace.addEventListener('click', ()=>{
        currentInput=currentInput.slice(0,-1);
        display.value=currentInput||'0';
    });

    clearAll.addEventListener('click', ()=>{
        currentInput='';
        display.value='';
    });

});