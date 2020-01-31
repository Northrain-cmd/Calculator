let operator;
let a;
function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b===0){return "Infinity"}
    else{
    return a/b;
}}
function power(a,b){
    return  a**b;
}
function factorial(a){
    let b=a;
    if(a===0 || a===1){ return 1;}
    else if(a<0){return "ERROR";}
    else{
        while(a>1){
            b= b*(a-1);
            a--;
       }
       return b;
    }
}
function root(a){
    if(a<0){
        return  "ERROR";
    }
    return Math.sqrt(a);
}
function operate(operator,a,b){
    let res;
    switch(operator){
        
        case    'plus':
            res=add(a,b);
            break;
        case    'minus':
            res=subtract(a,b);
            break;
        case    'mult':
            res=multiply(a,b);
            break;
        case    'div':
            res=divide(a,b);
            break;
        case    'pow':
            res=power(a,b);
            break;
        case    'fact':
            res=factorial(a);
            break;
        case    'sqrt':
            res=root(a);
            break;
            default:
                console.log("ERROR");
    }
    return res;
}
const display=document.getElementById("calcDisp"); //Calculator Screen
display.value="";                   
let numbers=document.querySelectorAll(".number").forEach(item =>{ /*Create event listeners for                                                               all digits*/
    item.addEventListener('click',()=>{                             
        display.value+=Number(item.textContent);
        
    })
    
})
const operators=document.querySelectorAll(".operator");
operators.forEach(item=>{
    if(item.getAttribute("data-name")==="square"||item.getAttribute("data-name")==="fact"){
        item.addEventListener('click',()=>{
            item.style.backgroundColor="#85203b";
            a=display.value;
            operator=item.getAttribute("data-value");
            display.value=operate(operator,Number(a),0).toFixed(6);
            display.setAttribute("placeholder",'');
            operator=item.getAttribute("data-value");
        })
    }
    else if(item.getAttribute("data-name")==="min"){
        item.addEventListener('click',()=>{
            if(display.getAttribute("placeholder")==0 && display.value==""){
                display.value+="-";
                display.setAttribute("placeholder",'');
            }
            else{
                a=display.value;
                display.value="";
                display.setAttribute("placeholder",'');
                operator=item.getAttribute("data-value");
            }})
    }
    else{
    item.addEventListener('click',()=>{
        a=display.value;
        display.value="";
        display.setAttribute("placeholder",'');
        operator=item.getAttribute("data-value");
    })}
})
const equal=document.getElementById("equals");
let b;
equal.addEventListener('click',function(){
    if(!operator){
        display.value==a.toFixed(3);
    }
    else{
     b=display.value;
    console.log(a);
    console.log(b);
    console.log(operator);
        if(operate(operator,Number(a),Number(b))==0){
            display.value='';
            display.setAttribute("placeholder",'0');
        }
        else{
    display.value=Number(operate(operator,Number(a),Number(b)).toFixed(4));}}
})
const dot=document.getElementById("comma");
comma.addEventListener('click',()=>{
                display.value+=".";
})
document.addEventListener('keyup',function(e){
    e.preventDefault();
  // and this will stop it from bubbling back down
  e.stopPropagation();
    console.log(e.key);
                if(e.key==1|| e.key==2|| e.key==3|| e.key==4|| e.key==5||e.key==6||e.key==7||e.key==8||e.key==9||e.key==0){
                display.getAttribute('placeholder','');
                display.value+=`${e.key}`;
                display.getAttribute('placeholder','')}
                    else if(e.key== '+'){
                        a=display.value;
                        display.value="";
                        display.setAttribute("placeholder",'');
                        operator='plus';
                        document.getElementById("plus").style.backgroundColor="#85203b"

                    }
                    else if(e.key== '-'){
                        if(display.getAttribute("placeholder")==0 && display.value==""){
                            display.value+="-";
                            display.setAttribute("placeholder",'');
                        }
                        else{
                            a=display.value;
                            display.value="";
                            display.setAttribute("placeholder",'');
                            operator='minus';
                            document.getElementById("minus").style.backgroundColor="#85203b"
                        }
                    }
                    else if(e.key== '*'){
                        a=display.value;
                        display.value="";
                        display.setAttribute("placeholder",'');
                        operator='mult';
                        document.getElementById("mult").style.backgroundColor="#85203b"}
                        else if(e.key== '/'){
                            a=display.value;
                            display.value="";
                            display.setAttribute("placeholder",'');
                            operator='div';
                            document.getElementById("division").style.backgroundColor="#85203b";
                        }
                        else if(e.key== 'Enter'){
                            b=display.value;
                            console.log(a);
                            console.log(b);
                            console.log(operator);
                            display.value=Number(operate(operator,Number(a),Number(b)).toFixed(4));
                        }
                        else if(e.key== 'Backspace'){
                            display.value="";
                            operator='';
                            a=0;
                            b=0;
                            display.setAttribute("placeholder",'0');
                        }

})
const clear=document.getElementById("clear");
clear.addEventListener('click',(e)=>{
    e.stopPropagation();
    e.preventDefault();
    display.value="";
    operator='';
    a=0;
    b=0;
    display.setAttribute("placeholder",'0');
})