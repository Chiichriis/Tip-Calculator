const tips = document.querySelectorAll(".btn");
const bill = document.getElementById("input1");
const customInput =document.getElementById("custom");
const numberOfPerson = document.getElementById("input2");
const noBill = document.querySelector(".errorMessage")
const noPerson = document.querySelector(".errorMessage2")
const tipAmount = document.getElementById("display1");
const total = document.getElementById("display2");
const resetBtn = document.getElementById("reset")

//I used temp as a variable name to store the input value used to calculate the functions

//This is for each of the rates (buttons)
tips.forEach(tip => tip.addEventListener("click", (e) => {
    let temp = e.target.innerText;
    tips.forEach(tip => tip.classList.remove('active'));
    tip.classList.add('active');
    mainFunc(temp)


}))

//This is for the custom Input incase where the value does not appear as a button
customInput.addEventListener("keyup", (e) => {
    if (e.keyCode === 13){
        let temp = customInput.value
        if(temp.length != 0){
            mainFunc(temp)
        }
    }
})

//This is for the Reset button
resetBtn.addEventListener("click", (e) => {
    resetBtn.classList.add('active');
    bill.value = "";
    numberOfPerson.value = "";
    customInput.value = "";
    noBill.innerText = "";
    noPerson.innerText = "";
    tipAmount.innerText = "$0.00";
    total.innerText = "$0.00";
    tips.forEach(tip => tip.classList.remove('active'));
    setTimeout(removeActive, 1000);

})
//This is a simple function to help us remove the active class from the reset btn after 1second
function removeActive(){
    resetBtn.classList.remove('active');
}


//This is the main function that performs both the value-check and computations
function mainFunc(temp){
    if(bill.value.length == 0 && numberOfPerson.value.length==0){
        noBill.innerText = "Can't be Empty";
        noPerson.innerText = "Can't be Empty";
    }else if(bill.value.length != 0 && numberOfPerson.value.length==0){
        noBill.innerText = "";
        noPerson.innerText = "Can't be Empty";
    }else if(bill.value.length == 0 && numberOfPerson.value.length!=0){
        noBill.innerText = "Can't be Empty";
        noPerson.innerText = "";
    }else{
        noBill.innerText = ""
        noPerson.innerText = ""
        if(temp == '50%'){
            let num = 50/100;
            let tipPerPerson = (num * bill.value)/numberOfPerson.value;
            let totalBillPerPerson = (bill.value/numberOfPerson.value)+tipPerPerson;
            tipAmount.innerText = `$${tipPerPerson}`;
            total.innerText = `$${totalBillPerPerson}`;
        }else if(temp == '25%'){
            let num = 25/100;
            let tipPerPerson = (num * bill.value)/numberOfPerson.value;
            let totalBillPerPerson = (bill.value/numberOfPerson.value)+tipPerPerson;
            tipAmount.innerText = `$${tipPerPerson}`;
            total.innerText = `$${totalBillPerPerson}`;
        }else if(temp == '15%'){
            let num = 15/100;
            let tipPerPerson = (num * bill.value)/numberOfPerson.value;
            let totalBillPerPerson = (bill.value/numberOfPerson.value)+tipPerPerson;
            tipAmount.innerText = `$${tipPerPerson}`;
            total.innerText = `$${totalBillPerPerson}`;
        }else if(temp == '10%'){
            let num = 10/100;
            let tipPerPerson = (num * bill.value)/numberOfPerson.value;
            let totalBillPerPerson = (bill.value/numberOfPerson.value)+tipPerPerson;
            tipAmount.innerText = `$${tipPerPerson}`;
            total.innerText = `$${totalBillPerPerson}`;
        }else if(temp == '5%'){
            let num = 5/100;
            let tipPerPerson = (num * bill.value)/numberOfPerson.value;
            let totalBillPerPerson = (bill.value/numberOfPerson.value)+tipPerPerson;
            tipAmount.innerText = `$${tipPerPerson}`;
            total.innerText = `$${totalBillPerPerson}`;
        }else{
            let num = customInput.value/100;
            let tipPerPerson = (num * bill.value)/numberOfPerson.value;
            let totalBillPerPerson = (bill.value/numberOfPerson.value)+tipPerPerson;
            tipAmount.innerText = `$${tipPerPerson}`;
            total.innerText = `$${totalBillPerPerson}`;
        }
    }
}