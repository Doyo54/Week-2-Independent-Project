let form = document.getElementById("btn");
form.addEventListener("click" , function(event){
event.preventDefault();
getAkanName();

});
function getAkanName() {
let Day=document.getElementById("enterDay");
let Month=document.getElementById("enterMonth");
let Year=document.getElementById("enterYear");
let genders= document.getElementsByName("gender");


function getGender () {
    for (let gender of genders){
      if (gender.checked){
        return gender.value;
      }
    }
  }
myGenderValue=getGender();

function monthValidator () {
    if (Month < 1 || Month > 12) {
      return false;
    } else {
      return true;
    }
  }

  function dayValidator () {
    if (Month === 2 && Number(Year)%4 === 0) {
      if (Day > 28 || Day < 1) {
        return false;
      } else if (Month === 2 && Day > 29) {
        return false;
      } else if (Month=== 2 && Day < 1) {
        return false;
      } else {
        return true;
      }
    } else if (Day < 1 || Day > 31){
      return false;
    } else {
      return true;
    }
  }

  
  let monthValid = monthValidator();
  let dayValid = dayValidator();


  let CC = enterYear.value.substring(0,2);
  let YY = enterYear.value.substring(2);
  let MM = enterMonth.value;
  let DD = enterDay.value;
  let dayOfWeekNumber = Math.floor ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )% 7;
  

  let femaleNames =[
    "Akosua",
    "Adwoa",
    "Abenaa",
    "Akua",
    "Yaa",
    "Afua",
     "Ama",
];

let maleNames=[
    "Kwasi",
    "Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
];  

if (myGenderValue == "male" && monthValid && dayValid){
   switch (dayOfWeekNumber){
      case 1: 
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + maleNames[0];
        document.getElementById('display').textContent = "" ;
        return false;
        break;
      case 2:
        document.getElementById('result').textContent = "You were born on a Monday: your Akan name is " + maleNames[1];
        document.getElementById('display').textContent = "";
        return false;
        break;
      case 3:
        document.getElementById('result').textContent = "You were born on a Tuesday: your Akan name is " + maleNames[2];
        document.getElementById('display').textContent = "";
        return false;
        break;
      case 4:
        document.getElementById('result').textContent = "You were born on a Wednesday: your Akan name is " + maleNames[3];
        document.getElementById('display').textContent = "";
        break;
      case 5:
        document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + maleNames[4];
        document.getElementById('display').textContent = "";
        return false;
        break;
      case 6:
        document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + maleNames[5];
        document.getElementById('display').textContent = "";
        return false;
        break;
      case 7:
        document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + maleNames[6];
        document.getElementById('display').textContent = "";
        return false;
        break;
      case 0:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + maleNames[0];
        document.getElementById('display').textContent = "";
        return false;
        break;
      default:
        alert("no Akan name, enter different date");

    }
  } else if(myGenderValue == "female" && monthValid && dayValid) {
    switch (dayOfWeekNumber){
      case 1:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + femaleNames[0];
        document.getElementById('display').textContent = "";
        return false;
        break;
      case 2:
        document.getElementById('result').textContent = "You were born on a Monday: your Akan name is " + femaleNames[1];
        document.getElementById('display').textContent = "";
        return false;
        alert("Kwadwo");
        break;
      case 3:
        document.getElementById('result').textContent = "You were born on a Tuesday: your Akan name is " + femaleNames[2];
        document.getElementById('display').textContent = "";
        return false;
        break;
      case 4:
        document.getElementById('result').textContent = "You were born on a Wednesday: your Akan name is " + femaleNames[3];
        document.getElementById('display').textContent = "";
        return false;
        break;
      case 5:
        document.getElementById('result').textContent = "You were born on a Thursday: your Akan name is " + femaleNames[4];
        document.getElementById('display').textContent = "";
        return false;
        break;
      case 6:
        document.getElementById('result').textContent = "You were born on a Friday: your Akan name is " + femaleNames[5];
        document.getElementById('display').textContent = "";
        return false;
        break;
      case 7:
        document.getElementById('result').textContent = "You were born on a Saturday: your Akan name is " + femaleNames[6];
        document.getElementById('display').textContent = "";
        return false;
        break;
      case 0:
        document.getElementById('result').textContent = "You were born on a Sunday: your Akan name is " + femalesNames[0];
        document.getElementById('display').textContent = "";
        return false;
        break;
      default:
        alert("no Akan name, enter different date");
      }
    } else{
      alert("You entered invalid month or day");
  }
}
