document.getElementById('calculate-btn').addEventListener('click', function () {
    // income input
    let IncomeInput = document.getElementById('income-input')
    let IncomeInputValu = parseFloat(IncomeInput.value);

    // food input 
    let foodInput = document.getElementById('food-input')
    let foodInputValue = parseFloat(foodInput.value);
    // console.log(foodInputValue);


    // rent input 
    let rentInput = document.getElementById('rent-input')
    let rentInputValu = parseFloat(rentInput.value)
    // console.log(rentInputValu);

    let clothInput = document.getElementById('cloths-input');
    let cothInputValue = parseFloat(clothInput.value)
    // console.log(cothInputValue);

    // add all Expenses 
    let add = foodInputValue + rentInputValu + cothInputValue;

    let balance = IncomeInputValu - add

    let TotalExpanceText = document.getElementById('total-expenses')
    TotalExpanceText.innerText = add

    let TotalBalanceText = document.getElementById('total-blance')
    TotalBalanceText.innerText = balance



})