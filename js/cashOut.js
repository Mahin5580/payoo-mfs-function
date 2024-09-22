document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    const cashOut=getInputFieldValueById('input-cash-out-money');
    const pinNumber=getInputFieldValueById('input-cash-out-pin-number');
    // console.log('inside click handler',cashOut,pinNumber);

    if(isNaN(cashOut)){
        alert("failed to Cash Out");
        return;
    }

    if(pinNumber===1234){
        const balance=getTextFieldValueById('account-total-balance');
        if(cashOut>balance){
            alert('you do not have enough money');
            return;
        };
        const newBalance=balance-cashOut;
        document.getElementById('account-total-balance').innerText=newBalance;

        // add to transaction history
        const div=document.createElement('div');
        div.classList.add('bg-yellow-300')
        div.innerHTML= `
            <h4 class="text-2xl font-bold">Cash Out</h4>
            <P> ${cashOut} withdraw. New Balance ${newBalance} </p>
           `
        document.getElementById('transaction-container').appendChild(div);

    }
    else{
        alert('No money for you ....DGM')
    }
})