
const inputDay = document.getElementById("input-day");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-year");
const btn = document.getElementById("btn");
const outputDay = document.getElementById("output-day");
const outputMonth = document.getElementById("output-month");
const outputYear = document.getElementById("output-year");

btn.addEventListener("click", ()=>{
    const Day = Number(inputDay.value);
    const Month = Number(inputMonth.value);
    const Year = Number(inputYear.value);
    checkSpace(Day, Month, Year);
    const input = inputYear.value +"-"+ inputMonth.value +"-"+ inputDay.value;
    const output = getAge(input);  
    if( checkSpace(Day, Month, Year) ){
        if(!checkMonth(Month)){
            errMonth.innerText = "Must be a valid month";
        }
        if(!checkYear(Year)){
            errYear.innerText = "Must be in the past";
        }
        if(!checkDay(Day, Month, Year)){
            errDay.innerText = "Must be a valid day";
        }
        if( (checkDay(Day, Month, Year)) && (checkMonth(Month)) && (checkYear(Year)) ){
            outputYear.innerText = output[0];
            outputMonth.innerText = output[1];
            outputDay.innerText = output[2];
            grey();
        }else{
            outputYear.innerText = "--";
            outputMonth.innerText = "--";
            outputDay.innerText = "--";
            red();
        }
    }
    
});

function getAge(birthDate) {
    const ageMS = Date.parse(Date()) - Date.parse(birthDate);
    const age = new Date();
    age.setTime(ageMS);
    const ageYear = age.getFullYear() - 1970;
    const ageMonth = age.getMonth(); 
    const ageDay = age.getDate();
    return [ageYear, ageMonth, ageDay];  
        
  }

function checkDay(day, month, year){
    let valid = true;
    if( day < 1 || day > 31 ){
        valid = false;
    }
    if( (month === 2) && day > 29 ){
        valid = false;
    }
    if( ((month === 4) || (month === 6)|| (month === 9)|| (month === 11)) && day > 30 ){
        valid = false;
    }
    if( (year % 4 !== 0) && (month === 2) && (day > 28)){
        valid =false;
    }
    return valid;
}

function checkMonth(month){
    let valid = true;
    if(  (month < 1) || (month > 12) ){
        valid = false;
        errMonth.innerText = "Must be a valid month";
    }
    return valid;
}

function checkYear(year){
    let valid = true;
    if( year > 2024 ){
        valid = false;
        errYear.innerText = "Must be in the past";
    }
    return valid;
}

const errDay = document.getElementById("err-day");
const errMonth = document.getElementById("err-month");
const errYear = document.getElementById("err-year");

function checkSpace(Day, Month, Year){
    let valid =true;
    if(!Day){
        errDay.innerText = "This field is required";
        valid = false;
    }else{
        errDay.innerText = "";
    }
    
    if(!Month){
        errMonth.innerText = "This field is required";
        valid = false;
    }else{
        errMonth.innerText = "";
    }
    
    if(!Year){
        errYear.innerText = "This field is required";
        valid = false;
    }else{
        errYear.innerText = "";
    }
    errDay.style.visibility = "visible";
    errMonth.style.visibility = "visible";
    errYear.style.visibility = "visible";
    if(!valid){
        red();
    }
    return valid;
}

const label =document.getElementsByClassName("input-label");

function red(){
    inputDay.style.setProperty("border", "1px solid var(--clr-Light-red)");
    inputMonth.style.setProperty("border", "1px solid var(--clr-Light-red)");
    inputYear.style.setProperty("border", "1px solid var(--clr-Light-red)");
    for (const item of label){
        item.style.setProperty("color", "var(--clr-Light-red)");
    }
}

function grey(){
    inputDay.style.setProperty("border", "1px solid var(--clr-Light-grey)");
    inputMonth.style.setProperty("border", "1px solid var(--clr-Light-grey)");
    inputYear.style.setProperty("border", "1px solid var(--clr-Light-grey)");
    for (const item of label){
        item.style.setProperty("color", "var(--clr-Smokey-grey)");
    }
}

