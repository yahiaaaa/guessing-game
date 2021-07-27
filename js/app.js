'use strict';
/* let varName = prompt("what is your name ?");
alert("willcome "+varName);
console.log("his name is " + varName);

/*let userAge = prompt('Please enter your age');
 if(userAge <= "18") {
   alert('You are not  allowed to be here');
 } else {
   alert('Welcome');
 }

       let varMail = prompt("your are mail ?").toLocaleUpperCase();
switch (varMail){
case "YAS" :
    alert ("willcome");
    console.log(varName + "is mail");
    break ;
   case "Y" :
        alert ("willcome");
        console.log(varName + "is mail");  
        break ;
        default :
        alert ("sorry this game for mail only") ;
        break ;
       }

       let varCant = prompt("your are From asia ?").toLocaleUpperCase();
switch (varCant){
case "YAS" :
    alert ("willcome");
    console.log(varName + "is from asia");
    break ;
   case "Y" :
        alert ("willcome");
        console.log(varName + "is from asia");  
        break ;
        default :
        alert ("sorry this game for asia only") ;
        break ;
}
*/

let question = prompt('you are love gaming ?');
while(question !== 'yes' && question !== 'y' && question !== 'no' && question !== 'n') {
    question = prompt('Please enter yes or no');
  }
  if(question === 'yes' || question === 'y') {
   
    alert('willcome');
}
 
    else{
   
    alert("continue" );
  }
 