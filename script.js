let display = document.querySelector('#inputDisplay');
let keyValues = document.querySelectorAll('.keyValue');
let offBtn = document.querySelector('#off');
let onBtn = document.querySelector('#on');
let acBtn = document.querySelector('#ac');
let add = document.querySelector('#operationAdd');
let sub = document.querySelector('#operationSub');
let mul = document.querySelector('#operationMul');
let div = document.querySelector('#operationDiv');
let equal = document.querySelector('#operationEqual');
let operationTitle = document.querySelector(".operationTitle");
let answer = 0;
let operation = null;

offBtn.addEventListener('click', ()=>{
    display.value = "";
    display.placeholder = "OFF";
    keyValues.forEach(element => {
    element.disabled = true;
    });
    offBtn.disabled = true;
    acBtn.disabled = true;
    sub.disabled = true;
    add.disabled = true;
    mul.disabled = true;
    div.disabled = true;
    reset();
});

onBtn.addEventListener('click', () =>{
    display.value = "";
    display.placeholder = "ON";
    keyValues.forEach(element => {
    element.disabled = false;
    });
    offBtn.disabled = false;
    acBtn.disabled = false;
    sub.disabled = false;
    add.disabled = false;
    mul.disabled = false;
    div.disabled = false;
    reset();
});

acBtn.addEventListener('click', ()=> {
    display.value = "";
    display.placeholder = "";
    keyValues.forEach(element => {
    element.disabled = false;
    });
    offBtn.disabled = false;
    acBtn.disabled = false;
    sub.disabled = false;
    add.disabled = false;
    mul.disabled = false;
    div.disabled = false;
    reset();
});

keyValues.forEach(element => {
    element.addEventListener('click', ()=>{
        display.value += element.textContent;
    });
});

add.addEventListener('click', ()=>{
    let val = parseFloat(display.value);
    operation = '+';
    if(isNaN(val)){
        val = 0;
    }
    answer+= val;
    display.value = '';
    operationTitle.textContent = `${answer}[+]`;

});
sub.addEventListener('click', ()=> {
    let val = parseFloat(display.value);
    operation = '-';
    if(isNaN(val)){
        val = 0;
    }
    if(answer == 0){
        answer = val;
    }
    else{
        answer -= val;
    }
    display.value = '';
    operationTitle.textContent = `${answer}[-]`;
});

mul.addEventListener('click', ()=>{
    let val = parseFloat(display.value);
    if (isNaN(val)) val = 0;
    if (answer === 0) {
        answer = val;
    } else {
        answer *= val; // or /= val;
    }
    operation = '*';
    display.value = '';
    operationTitle.textContent = `${answer}[*]`;
});

div.addEventListener('click', ()=>{
    let val = parseFloat(display.value);
    if(val == 0)
    {
        alert("Can't divide by Zero");
    }
    if(answer == 0){
        answer = val;
    }
    else{
        answer = answer/val;
    }
    operation = '/';
    display.value = '';
    operationTitle.textContent = `${answer}[/]`;
});
equal.addEventListener('click', ()=>{
    let val = parseFloat(display.value);
    if (isNaN(val)) val = 0;
    if(operation ==='+'){
        answer = answer+val;
    }
    else if(operation === '-'){
        answer = answer - val;
    }
    else if(operation === '*'){
        answer = answer * val;
    }
    else if(operation === '/'){
        answer = answer / val;
    }
    operationTitle.textContent = "[Ans=]";
    display.value = answer;
});
function reset()
{
    operationTitle.textContent = "Operation-Mode";
    answer = 0;
    operation = null;
}
document.addEventListener('keydown', (event)=>{
    const key = event.key;
    if(display.placeholder === "off") return;
    if(!isNaN(key))
        display.value += key;
    else if(key ==='+'){
        const val = parseFloat(display.value);
        if(isNaN(val))
            return;
        if(operation === null || operationTitle.textContent === "Operation-Mode"){
            answer = val;
            operation = key;
            display.value = '';
            operationTitle.textContent = `${answer}[${operation}]`;
        }
        else 
        {
            answer = answer + val;
            operation = key;
            display.value = '';
            operationTitle.textContent = `${answer}[${operation}]`;
        }
    }
    else if(key ==='-'){
        const val = parseFloat(display.value);
        if(isNaN(val))
            return;
        if(operation === null || operationTitle.textContent === "Operation-Mode"){
            answer = val;
            operation = key;
            display.value = '';
            operationTitle.textContent = `${answer}[${operation}]`;
        }
        else 
        {
            answer = answer - val;
            operation = key;
            display.value = '';
            operationTitle.textContent = `${answer}[${operation}]`;
        }
    }
    else if(key ==='*'){
        const val = parseFloat(display.value);
        if(isNaN(val))
            return;
        if(operation === null || operationTitle.textContent === "Operation-Mode"){
            answer = val;
            operation = key;
            display.value = '';
            operationTitle.textContent = `${answer}[${operation}]`;
        }
        else 
        {
            answer = answer * val;
            operation = key;
            display.value = '';
            operationTitle.textContent = `${answer}[${operation}]`;
        }
    }
    else if(key ==='/'){
        const val = parseFloat(display.value);
        if(isNaN(val))
            return;
        if(operation === null || operationTitle.textContent === "Operation-Mode"){
            answer = val;
            operation = key;
            display.value = '';
            operationTitle.textContent = `${answer}[${operation}]`;
        }
        else 
        {
            answer = answer / val;
            operation = key;
            display.value = '';
            operationTitle.textContent = `${answer}[${operation}]`;
        }
    }

    else if (key === 'Enter' || key === '=') {
        const val = parseFloat(display.value);
        if (isNaN(val)) return;
        if(operation ==='+'){
        answer = answer+val;
        }
        else if(operation === '-'){
            answer = answer - val;
        }
        else if(operation === '*'){
            answer = answer * val;
        }
        else if(operation === '/'){
            answer = answer / val;
        }
        operationTitle.textContent = "[Ans=]";
        display.value = answer;
    }

    else if (key === 'Backspace') {
        display.value = display.value.slice(0, -1);
    }
});