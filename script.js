let Day=document.getElementById("enterDay");
let Month=document.getElementById("enterMonth");
let Year=document.getElementById("enterYear");

var form= document.getElementById("submit");
document.getElementById("btn").addEventListener('click', e => {    
    let CC = enterYear.value.substring(0,2);
    let YY = enterYear.value.substring(2);
    let MM = enterMonth.value;
    let DD = enterDay.value;
    d = Math.floor ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7;

    console.log(d);
 
})  

