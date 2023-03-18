'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // call function with input event if something is changed
    document.getElementById('tip-calculator').oninput = function () {
        // convert bill value to a number
        const bill = Number(document.getElementById('billTotal').value);
        // check if bill value is number or not
        if (!isNaN(bill)) {
            // get tip element value
            const tip = document.getElementById('tipInput').value;
            // set element innetHTML to a tip value
            document.getElementById('tipOutput').innerHTML = `${tip}%`;
            // calculate final bill value 
            const tipValue = bill * (tip / 100);
            const finalBill = bill + tipValue;
            // set final values and round the string to 2 decimals
            document.getElementById('tipAmount').value = tipValue.toFixed(2);
            document.getElementById('billTotalWithTip').value = finalBill.toFixed(2);
            // setting for range input background
            document.getElementById('tipInput').style.background = `linear-gradient(to right, #59daa4 0%, #59daa4 ${tip}%, #e4f9f0 ${tip}%, #e4f9f0 100%)`;
        } else {
            alert("Please, insert valid data!")
        }
    };
});
