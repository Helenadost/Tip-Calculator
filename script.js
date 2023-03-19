'use strict';

document.addEventListener('DOMContentLoaded', () => {

    // call function with input event if something is changed
    document.getElementById('tip-calculator').oninput = function () {
        const tipInput = document.getElementById('tipInput').value;
        const tipOutput = document.getElementById('tipOutput');
        const invalidData = document.getElementById('invalidData');
        const tipAmount = document.getElementById('tipAmount');
        const billTotalWithTip = document.getElementById('billTotalWithTip');
        const perPerson = document.getElementById('perPerson');
        // convert bill and split value to a number
        const bill = Number(document.getElementById('billTotal').value);
        const split = Number(document.getElementById('split').value);

        // check if bill and split values are number or not
        if (!isNaN(bill) || !isNaN(split)) {

            // set element innetHTML to a tip value
            tipOutput.innerHTML = `${tipInput}%`;

            // calculate final bill value 
            const tipValue = bill * (tipInput / 100);
            const finalBill = bill + tipValue;
            const perPersonCalc = finalBill / split;

            // check if perPersonCalc value is valid
            if (perPersonCalc <= 0 || isNaN(perPersonCalc) || !isFinite(perPersonCalc)) {
                // display invalid data notification
                invalidData.style.display = 'block';
                tipAmount.value = '';
                billTotalWithTip.value = '';
                perPerson.value = '';
            } else {
                // set final values and round the string to 2 decimals
                tipAmount.value = tipValue.toFixed(2);
                billTotalWithTip.value = finalBill.toFixed(2);
                perPerson.value = perPersonCalc.toFixed(2);
                invalidData.style.display = 'none';
            }

            // setting for range input background
            document.getElementById('tipInput').style.background = `linear-gradient(to right, #59daa4 0%, #59daa4 ${tipInput}%, #e4f9f0 ${tipInput}%, #e4f9f0 100%)`;
        } else {
            invalidData.style.display = 'block';
        }
    };
});
