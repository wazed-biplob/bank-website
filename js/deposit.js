document.getElementById('btn-deposit').addEventListener('click', function (){
    // deposit amount
    const newDeposit = document.getElementById('new-deposit');
    if (isNaN(parseFloat(newDeposit.value))) {
        alert ('Only Numbers Acceptalbe');
        return;
    }
    // get prev deposit
    const prevDepositTotal = document.getElementById('current-deposit');
    // add two
    const totalDeposit = parseFloat(prevDepositTotal.innerText) + parseFloat(newDeposit.value) ;
    // show total
    prevDepositTotal.innerText = totalDeposit;
    // add into balance
    const totalBalance = document.getElementById('balance');
    // get new deposit amount
    const newBalance = parseFloat(totalBalance.innerText) + parseFloat(newDeposit.value);
    // show total balance
    totalBalance.innerText = newBalance;
    // clear deposit input
    newDeposit.value = '';

})


