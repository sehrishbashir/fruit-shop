let total = 0;
let pocketMoney = 0;

let noOfGlasses = 0;
let costOfStrawberryShake = 10;
let berryElem = document.querySelector("#noOfStrawMilkShake");
function plusMilkShake1(){
     pocketMoney = parseInt(document.querySelector('#wallet').value);
 if (pocketMoney < total + costOfStrawberryShake){
    alert("not enough money");
} else{
       noOfGlasses++;
       berryElem.value = noOfGlasses;
       total = total + costOfStrawberryShake;
       document.querySelector("#totalbill").innerHTML= total;
  } 
}
function minusMilkShake1(){
     pocketMoney = parseInt(document.querySelector('#wallet').value);
  if (noOfGlasses > 0) {
     noOfGlasses--;
     berryElem .value = noOfGlasses;
     total = total - costOfStrawberryShake;
     document.querySelector("#totalbill").innerHTML= total ;
  } 
}




let noOfCups = 0;
let costOfIceCream = 15;
let blossomElem = document.querySelector("#noOfBlossom");
function plusCream(){
    pocketMoney = parseInt(document.querySelector('#wallet').value); 
 if (pocketMoney < total + costOfIceCream){
    alert("not enough money");
  } 
else {
    noOfCups++;
    blossomElem .value = noOfCups;
    total = total + costOfIceCream;
    document.querySelector("#totalbill").innerHTML= total;
  } 
}
function minusCream(){
    pocketMoney = parseInt(document.querySelector('#wallet').value);  
 if (noOfCups > 0) {
    noOfCups--;
    blossomElem .value = noOfCups; 
    total=total-costOfIceCream;
    document.querySelector("#totalbill").innerHTML=total;
  }  
}



let noOfGlasses1 = 0;
let costOfNeemShake = 7;
let neemElem = document.querySelector("#noOfNeemShake");
function plusMilkShake2(){
    pocketMoney = parseInt(document.querySelector('#wallet').value);
 if (pocketMoney < total + costOfNeemShake){
    alert("not enough money");
  } 
  else {
    noOfGlasses1++;
      neemElem .value = noOfGlasses1;
      total=total+costOfNeemShake;
      document.querySelector("#totalbill").innerHTML= total;
  } 
}
function minusMilkShake2(){
    pocketMoney = parseInt(document.querySelector('#wallet').value);   
  if (noOfGlasses1 > 0) {
    noOfGlasses1--;
    neemElem .value = noOfGlasses1;
    total=total-costOfNeemShake;
    document.querySelector("#totalbill").innerHTML= total;
  }  
}
   
