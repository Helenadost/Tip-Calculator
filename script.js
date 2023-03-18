'use strict';

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('tip-calculator').oninput = function () {
        const bill = Number(document.getElementById('billTotal').value);
        if (!isNaN(bill)) {
            const tip = document.getElementById('tipInput').value;
            document.getElementById('tipOutput').innerHTML = `${tip}%`;
            const tipValue = bill * (tip / 100);
            const finalBill = bill + tipValue;
            document.getElementById('tipAmount').value = tipValue.toFixed(2);
            document.getElementById('billTotalWithTip').value = finalBill.toFixed(2);
            document.getElementById('tipInput').style.background = `linear-gradient(to right, #59daa4 0%, #59daa4 ${tip}%, #e4f9f0 ${tip}%, #e4f9f0 100%)`;
        } else {
            alert("Please, insert valid data!")
        }
    };
});
