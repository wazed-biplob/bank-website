document.getElementById('btn-withdraw').addEventListener('click', function () {
        // deposit amount
        const newWithdraw = document.getElementById('withdraw');
        const prevBalance = document.getElementById('balance');
        if (parseFloat(newWithdraw.value) > parseFloat(prevBalance.innerText)) {
            alert('Withdraw amount exceeds Total Balance');
            newWithdraw.value = '';
            return;
        }
        
        if (isNaN(parseFloat(newWithdraw.value))) {
            alert ('Only Numbers Acceptalbe');
            return;
        }
        const currWithdrw = document.getElementById('current-withdraw');

        currWithdrw.innerText = parseFloat(currWithdrw.innerText) + parseFloat(newWithdraw.value);

        



        prevBalance.innerText = parseFloat(prevBalance.innerText) - parseFloat(newWithdraw.value);

        newWithdraw.value = '';
})