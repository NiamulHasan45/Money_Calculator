
function expenceData(expence){
    const expenceInput = document.getElementById(expence+'-data');
    const expenceValue = expenceInput.value;
    if(isNaN(expenceValue)){
        return 'Go with this';
    }
    else{
        return parseFloat(expenceValue);
    }
}

//function to Calculate total expences section

function totalExpences(expence1, expence2, expence3){
    const totalExpence = expence1 + expence2 + expence3;
    // console.log(totalExpence);
    if(isNaN(totalExpence)){
        alert("Please enter values correctly");
        return 0;
    }
    else if(expence1>=0 && expence2>=0 && expence3>=0 ){       
        return totalExpence;
    }
    else{
        alert("Please enter positive values");
        return 0;
    }
}

//fuction to Calculate remaining income after expences


function balanceAfterExpence(incomeValue, totalExpence){
    if(isNaN(incomeValue)){
        alert("Please enter correct income value");
        return 0;
    }
    else if(incomeValue<0){
        alert("Income should not be negative.");
        return 0;
    }

    else{
        if(incomeValue>totalExpence){
            const balanceAfterExpence = incomeValue-totalExpence;
            return balanceAfterExpence;
        }
        else{
            alert("Your Expence is greater than income");
            return 0;
        }
    }
}
      

document.getElementById('calculation').addEventListener('click',function(){
   const incomeValue = expenceData('income');
   const foodValue = expenceData('food');
   const rentValue = expenceData('rent');
   const clothesValue = expenceData('clothes');
   
//Calculate total expences section

    const totalExpence = totalExpences(foodValue, rentValue, clothesValue);

   const setTotalExpences = document.getElementById('total-expences');
   setTotalExpences.innerHTML=totalExpence;

//Calculate remaining income after expences

    const balanceAfterExpenceValue = balanceAfterExpence(incomeValue, totalExpence);

    const setBalance = document.getElementById('balance');
    setBalance.innerHTML = balanceAfterExpenceValue;
} )


//Saving Part

function savings(){
    const savingsValue = expenceData('savings' );
    const incomeValue = expenceData('income' );
    const foodValue = expenceData('food' );
    const rentValue = expenceData('rent' );
    const clothesValue = expenceData('clothes' );

//Calculate Savings according to percentages

    const netSavings = (incomeValue*(savingsValue/100));
    const setSavings = document.getElementById('saving-amount');
    if((isNaN(netSavings)==true)|| netSavings<=0){
        alert('Enter Savings data correctly');
        return 0;
    }
    else{
        setSavings.innerHTML = netSavings;
    }

// Calculate Balance after savings and all expences

    const totalExpence =totalExpences(foodValue, rentValue, clothesValue);
    const balanceAfterExpenceValue = balanceAfterExpence(incomeValue, totalExpence);
    const setRemainingBalance = document.getElementById('remaining-balance');

    if(balanceAfterExpenceValue > netSavings){
        const remainingBalance = balanceAfterExpenceValue - netSavings;
        setRemainingBalance.innerHTML = remainingBalance;
    }
    else{
        alert("Your saving and remaining balance mismatch");
        setSavings.innerHTML = 0;
        setRemainingBalance.innerHTML = 0;
        
    }   
}