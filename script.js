const enterButton = document.querySelector(".submit-area button");
const loginArea = document.getElementById("login-area");
// login button event handler
enterButton.addEventListener("click", function () {
    loginArea.style.display = "none";
    document.body.style.backgroundPosition = "bottom left";
    var transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
    var activitySec = document.getElementById("activitySec");
    activitySec.style.display = "block";
});

// activity event handler
var presentWithdraw = document.getElementById("present-withdraw").innerText;
const depositBtn = document.querySelector(".depositInput > button");
const withdrawBtn = document.querySelector(".withdrawInput > button");
/*
    1. add the deposited input to the deposit and balance money, add the withdrawn input to the withdraw money
    2. subtract the withdrawn money from the balance
    * so we are going to create two functions to do these stuffs
*/
// the adder
function addTo(here, amount) {
    var currentValue = document.getElementById(here).innerText;
    var total = parseFloat(currentValue) + amount;
    document.getElementById(here).innerText = total;
}
function subtractFrom(here, amount) {
    var currentValue = document.getElementById(here).innerText;
    var subtracted = parseFloat(currentValue) - amount;
    document.getElementById(here).innerText = subtracted;
}
function clearInput(thisBox) {
    document.getElementById(thisBox).value = "";
}
function invalidSubmit(here){
    alert("please add a valid amount!");
}
function getAmount(fromThis) {
    var amount = document.getElementById(fromThis).value;
    if(amount.length != 0){
        return parseFloat(amount);
    }
    else{
        invalidSubmit(fromThis);
        return 0;
    }
}
// event handler for deposit button
depositBtn.addEventListener('click', function () {
    // Now we should pass a thing by which we can capture the node
    // it will be easy if we pass the same characteristic like id or class as the arguments....for easy method we are going to pass ids.
    var depositAmount = getAmount("depositAmount");
    addTo("present-deposit", depositAmount);
    addTo("present-balance", depositAmount);
    clearInput("depositAmount");
});

// event handler for withdraw button
withdrawBtn.addEventListener('click', function () {
    var withdrawnAmount = getAmount("withdrawnAmount");
    addTo("present-withdraw", withdrawnAmount);
    subtractFrom("present-balance", withdrawnAmount);
    clearInput("withdrawnAmount");
})