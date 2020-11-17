function validNumeric(obj) {
    var val = obj.value;
    if (isNaN(val))
        obj.value = "0.00";
}

function enterSubmit() {
    var key = window.event.key;
    if (key == "Enter") {
        calculateTip();
    }
}

function minus(id) {
    var obj = document.getElementById(id);
    var tipAmount = obj.value;
    if (tipAmount == "")
        tipAmount = 0;

    obj.value = parseInt(tipAmount) - 1;

    if (tipAmount <= 1) {
        tipAmount = 1;
        obj.value = tipAmount;
    }

    calculateTip();
}

function plus(id) {
    var obj = document.getElementById(id);
    var tipAmount = obj.value;
    if (tipAmount == "")
        tipAmount = 0;

    obj.value = parseInt(tipAmount) + 1;

    if (obj.value > 100)
        obj.value = 100;

    calculateTip();

}

function calculateTip() {
    var billAmt = document.getElementById("billamt").value;
    var tipAmount = document.getElementById("tipAmount").value;
    var numOfPeople = document.getElementById("people").value;
    var final = 0;
    if (billAmt == "" || tipAmount == 0) {
        alert("Please enter values");
        return;
    }
    billAmt = parseInt(billAmt);

    var totalTip = (billAmt * tipAmount / 100);
    var total = totalTip / numOfPeople;

    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);

    final = (billAmt + totalTip) / numOfPeople;
    final = Math.round(final * 100) / 100;
    final = final.toFixed(2);
    document.getElementById("tip").innerHTML = total;
    document.getElementById("final").innerHTML = final;
}
