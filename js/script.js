

function getIncomeValue() {
    let IncomeInput = document.getElementById('income-input')
    let IncomeInputValu = parseFloat(IncomeInput.value);
    return IncomeInputValu
}

function getExpance(inputId) {

    let foodInput = document.getElementById(inputId + '-input')

    let foodInputValue = parseFloat(foodInput.value);
    return foodInputValue;


}



function getExpanceValue() {
    let foodInputValue = getExpance('food')
    let rentInputValu = getExpance('rent')
    let cothInputValue = getExpance('cloths')
    let add = foodInputValue + rentInputValu + cothInputValue;
    if (add > getIncomeValue()) {
        return alert('Expenses is heigh')
    }
    return add;
}


//  calculate btn event handling
document.getElementById('calculate-btn').addEventListener('click', function () {

    let balance = getIncomeValue() - getExpanceValue()

    let TotalExpanceText = document.getElementById('total-expenses')
    TotalExpanceText.innerText = getExpanceValue()

    let TotalBalanceText = document.getElementById('total-blance')
    TotalBalanceText.innerText = balance

})


// save button evant handling
document.getElementById('save-btn').addEventListener('click', function () {
    let TotalBalanceText = document.getElementById('total-blance')
    let blance = TotalBalanceText.innerText;

    // saving value
    let savingInput = document.getElementById('saaving-input')
    let savingInputValue = parseFloat(savingInput.value)

    let saveingAmount = (blance / 100) * savingInputValue

    let remainingBlance = blance - saveingAmount;


    document.getElementById('saving-amount').innerText = saveingAmount
    document.getElementById('remaining-balance').innerText = remainingBlance


})