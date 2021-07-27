'use strict';

/* let varName = prompt("what is your name ?");
alert("willcome "+varName);
console.log("his name is " + varName); */
/*
let userAge = prompt('Please enter your age');
 if(parseInt (userAge) <= 18) {
   alert('You are not  allowed to be here');
   correct++;
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
        correct++;
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
        correct++;
        default :
        alert ("sorry this game for asia only") ;
        break ;
}


let question = prompt('you are love gaming ?');
while(question !== 'yes' && question !== 'y' && question !== 'no' && question !== 'n') {
    question = prompt('Please enter yes or no');
  }
  if(question === 'yes' || question === 'y') {
   
    alert('hope to you engoy');
    correct++;
}
 
    else{
   
    alert("not your intrest ");
  }

*/
/*

  let varcop = prompt('how many hr play in day ?');
  let y = Number(varcop);
  let answer = 4;
  for (var i = 0; i < 4; i++) {

 if(answer === y) {
   alert('the correct answer ');
   correct++; 
   break;
 }
  else if (y < answer)   {
    y = parseInt(prompt('Too Low, try again'));
 }

 else  {
    y = parseInt(prompt(' too high, try again')); 
  }
  alert('The correct answer was 4');
}

*/
let multiValues = ["11" , "12" , "1" , "2" , "3" ];
for (let z = 0; z < 6; z++) {
    let ocloc = prompt ("the fav time to play gaming") ;
    if (multiValues.includes(ocloc)) {
        alert("you are correct" ) ;
        correct++;
        break ;
    }  
        else {
            alert("try agin")
        }}
        alert('score = ' + correct + '/7');
 

