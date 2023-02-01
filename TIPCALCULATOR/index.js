
// IN THIS EXAMPLE THE NAMES OF THE VALUES ARE BEING USED EFFICIENTLY 
const billAmount = document.getElementById("bill-input");
const numberOfPeople = document.querySelector(".people-input");
const customTipPercentage = document.getElementById("tipcustom");
const billTipAmount = document.getElementById("tipamount");
const BillPerPerson = document.getElementById("totalamount");
const resetButton = document.querySelector(".reset");
const tiper = document.querySelectorAll(".tips");
const error = document.querySelector(".error");



tiper.forEach((tips) => {
    tips.addEventListener("click", (e) => {
        let tipvalue = e.target.innerText;
        tipvalue = tipvalue.substr(0, tipvalue.length -1 );

        if(billAmount.value === "") 
        return;
        if(numberOfPeople.value === "")

         numberOfPeople.value = 1;

        //  if(numberOfPeople.value = 0)
        //  error.Label.style.color = "red";


        calculateTip(
            parseFloat(billAmount.value),
            parseInt(tipvalue),
            parseInt(numberOfPeople.value)
    )
    })
 
})


customTipPercentage.addEventListener("blur", (e) =>{
    if(billAmount.value === ""){
        resetEverything();
        return;
    }

    if(numberOfPeople.value === "") numberOfPeople.value = 1;
    calculateTip(
         parseFloat(billAmount.value),
            parseFloat(e.target.value),
            parseInt(numberOfPeople.value)
    );
})


// THIS FUNCTION TAKES ALL THE INPUT NUMBERS FROM THE INPUT TAGS 
function calculateTip(billAmount, tipPercentage,numberOfPeople){
    let tipamount = (billAmount * (tipPercentage/100))/ numberOfPeople;
    let tip = Math.floor(tipamount * 100)/100;
    tip = tip.toFixed(2);

    let totalAmount = (tipamount * numberOfPeople + billAmount) / numberOfPeople;
    totalAmount = totalAmount.toFixed(2);

    billTipAmount.innerHTML = `$${tip}`;
    BillPerPerson.innerHTML = `$${totalAmount}`;
}


// WHENEVER YOU CLICK THE RESET BUTTON YOU PERFORM THE "RESETEVERYTHING FUNCTION", WHICH SETS ALL THE VALUES BACK TO ZERO
resetButton.addEventListener("click", resetEverything);

function resetEverything(){
    billTipAmount.innerHTML = "$0.0";
    BillPerPerson.innerHTML = "$0.0";
    // THESE VARIABLES ARE GIVEN VALUE DUE TO THE FACT THAT THEY ARE INPUT FIELDS
    billAmount.value = "";
    numberOfPeople.value = "";
    customTipPercentage.value = "";



}


// addevent listeners to check for problems