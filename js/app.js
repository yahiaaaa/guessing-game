'use strict';
let conter = 0;

/*
 let varName = prompt("what is your name ?");
alert("willcome "+varName);
console.log("his name is " + varName); 
function ageInput(){
let userAge = prompt('Please enter your age');
 if(parseInt (userAge) <= 18) {
   alert('You are not  allowed to be here');
   conter++;
 } else {
   alert('Welcome');
 }
}
ageInput();
function mailInput(){
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
        conter++;
        default :
        alert ("sorry this game for mail only") ;
        break ;
       }
      }
      mailInput();

function cuntInput(){
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
        conter++;
        default :
        alert ("sorry this game for asia only") ;
        break ;
}
}
cuntInput();

function loveInput(){
let question = prompt('you are love gaming ?');
while(question !== 'yes' && question !== 'y' && question !== 'no' && question !== 'n') {
    question = prompt('Please enter yes or no');
  }
  if(question === 'yes' || question === 'y') {
   
    alert('hope to you engoy');
    conter++;
}
 
    else{
   
    alert("not your intrest ");
  }
}
loveInput();

function hrInput(){
let attempt = 4;
let answer = 4;
  for (let i = 0; i < attempt ; i++) {
  let varcop = Number(prompt('how many hr play in day ?'));
  
 if( varcop === answer) {
   alert('the correct  answer ');
   conter++; 
   break;
 }
  else if (varcop < answer)   {
    alert('Too Low, try again');
 }

 else  {
  alert(' too high, try again'); 
  }
}
alert('The correct answer was 4');
}
hrInput();

*/
function timeInput() {
  let multiValues = ["night"];
  let ocloc = prompt("the fav time to play gaming");
 outerloop : for (let z = 0; z < 5; z++) {
    for (let i = 0; i < multiValues.length; i++) {

     if (ocloc == multiValues[i]) {
        alert("you are correct");
        conter++;
        break outerloop ;
      }
      else {
        alert("try agin");
        ocloc = prompt("the fav time to play gaming");
      }
      
    }
  }
}
timeInput();
alert('score = ' + conter + '/7');

let ocloc = prompt("willcome to wib site");
