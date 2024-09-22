document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney=getInputFieldValueById('input-add-money');
    const pinNumber=getInputFieldValueById('input-pin-number');
    // console.log('add money inside to js',addMoney)
    
    // wrong eay to verify
    if(isNaN(addMoney)){
        alert('failed to add Money');
        return;
    }

    if(pinNumber === 1234){

        const balance=getTextFieldValueById('account-total-balance');
     
        const newBalance=balance+addMoney;
        document.getElementById('account-total-balance').innerText=newBalance;
        // add to transcation history
        const entry=document.createElement('p');
        entry.innerText=`Added: ${addMoney} Tk.Balance: ${newBalance} Tk.`;
        console.log(entry);

        // should be a common function
        document.getElementById('transaction-container').appendChild(entry);

    }
    else{
        alert('Failed to add the money')
    }
})