var mesg =alert ("Welcome,is the first release of the calculator that only has a samulation features sum ,multi,subtract, division,moduls");

var result;

function calc (x , y , z){
       switch(op) {
       case "+":
          result = x + z;
          alert(x + y + z +"=" + result);
           break;
       case "-":
            result = x - z;
            alert(x + y + z +"=" + result);
            break;
        case "*":
           result = x * z;
           alert(x + y + z +"=" + result);
            break;
        case "/":
            result = x / z;
            alert(x + y + z +"=" + result);
           break;
    
           case "%":
            result = x % z;
            alert(x + y + z +"=" + result);
           break;      
        
    }}

var fNum = Number(prompt("Enter the first number"));
var op = prompt("Enter the operator");
var lNum = Number(prompt("Enter the second number "));

calc(fNum,op,lNum);
myLoop:
while(1){
var config = prompt('Do you need to do another calculation with the result ' + result +'?' + '(yes/no)')

    
    if (config== "yes"){
    var op = prompt("Enter the operator");
    var lNum = Number(prompt("Enter the second number "));
    
    var calc2 = calc(result,op,lNum);
    }

    else {alert("thank you");
     break }

    
}

/*
   if(isNaN(x) == true || isNaN(z)== true ){
        alert("Invalid number ,Try again")
        return false;
    }
    
    if ( op != "+" && op != "-" &&op !="%" && op != "*" &&op != "/" ){
        alert("Invalid operator , try again ")
        return false;
    }
*/
