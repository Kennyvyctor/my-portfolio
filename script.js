function compute_one() {
// Declare Input Variables
    var capital_balanceOne = document.getElementById("capitalOne").value;
    var risk_numberOne = document.getElementById("riskOne").value;
    var percentage_stopOne = document.getElementById("percentstopOne").value;

// Missing Input Validation
    if (capital_balanceOne === '' || risk_numberOne === '' || percentage_stopOne === '') {
        alert('Please enter your values.');
        return;
        }

// Number Validation        
    capital_balanceOne = parseFloat(capital_balanceOne);
    risk_numberOne = parseFloat(risk_numberOne);
    percentage_stopOne = parseFloat(percentage_stopOne);

    if (isNaN(capital_balanceOne) || isNaN(risk_numberOne) || isNaN(percentage_stopOne)) {
        alert('Please enter valid numbers.');
        return;
    }    

    var risk_percentOne = risk_numberOne /100;

    if (percentage_stopOne === '0') {
        alert('Percentage stop cannot be 0.');
        return;
    }

// Calculate Position Size 
    var distance_to_stoplossOne = percentage_stopOne /100;

    var risk_amountOne = capital_balanceOne * risk_percentOne;

    var position_sizeOne = risk_amountOne / distance_to_stoplossOne;

// Replace the Content of Position Size with Result
    var new_positionOne = document.getElementById("position-sizeOne");

    new_positionOne.innerHTML = position_sizeOne.toFixed(4);

// Clear inputs
    capitalOne.value = " ";
    riskOne.value = " ";
    percentstopOne.value = " ";
}



function compute_two() {
// Declare Input Variables
    var capital_balanceTwo = document.getElementById("capitalTwo").value;
    var risk_numberTwo = document.getElementById("riskTwo").value;
    var risk_percentTwo = risk_numberTwo /100;

    var entry_priceTwo = document.getElementById("entryTwo").value;
    var exit_priceTwo = document.getElementById("exitTwo").value;

// Missing Input Validation
    if (capital_balanceTwo === '' || risk_numberTwo === '' || entry_priceTwo === '' || exit_priceTwo === '') {
        alert('Please enter your values.');
        return;
    }

// Number Valdation
    capital_balanceTwo = parseFloat(capital_balanceTwo);
    risk_numberTwo = parseFloat(risk_numberTwo);
    entry_priceTwo = parseFloat(entry_priceTwo);
    exit_priceTwo = parseFloat(exit_priceTwo);

    if (isNaN(capital_balanceTwo) || isNaN(risk_numberTwo) || isNaN(entry_priceTwo) || isNaN(exit_priceTwo)) {
        alert('Please enter valid numbers.');
        return;
    }

    var percentage_stopTwo = ((entry_priceTwo - exit_priceTwo)/entry_priceTwo) *100;

    if (percentage_stopTwo === 0) {
        alert("Entry price and exit price cannot be the same.");
        return;
    }

// Calculate Position Size
    var distance_to_stoplossTwo = percentage_stopTwo /100;

    var risk_amountTwo = capital_balanceTwo * risk_percentTwo;

    var position_sizeTwo = risk_amountTwo / distance_to_stoplossTwo;

// Replace the Content in Position Size with Result
    var new_positionTwo = document.getElementById("position-sizeTwo");

    new_positionTwo.innerHTML = position_sizeTwo.toFixed(4);

// Clear Inputs
    capitalTwo.value = " ";
    riskTwo.value = " ";
    entryTwo.value = " ";
    exitTwo.value = " ";
}



