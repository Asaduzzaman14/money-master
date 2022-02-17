
// get income value
function getIncomeValue() {
    let IncomeInput = document.getElementById('income-input')

    let IncomeInputValu = parseFloat(IncomeInput.value);
    return IncomeInputValu

}

// ger all Expenses  input value and some valedation
function getExpenses(inputId) {

    let foodInput = document.getElementById(inputId + '-input')

    if (foodInput.value < 0) {
        // let err = document.getElementById('error')
        // err.classList.add = ''

    } else {

        let foodInputValue = parseFloat(foodInput.value);
        return foodInputValue;

    }



}

// add all Expenses value and re use same function
function getExpanceValue() {
    let foodInputValue = getExpenses('food')
    let rentInputValu = getExpenses('rent')
    let cothInputValue = getExpenses('cloths')
    let add = foodInputValue + rentInputValu + cothInputValue;

    return add;
}


//  calculate button event handling
document.getElementById('calculate-btn').addEventListener('click', function () {


    let balance = getIncomeValue() - getExpanceValue()

    if (balance < 0 || isNaN(balance)) {
        return alert('incorrect your input Value!')
    }
    else {

        let TotalExpanceText = document.getElementById('total-expenses')
        TotalExpanceText.innerText = getExpanceValue()

        let TotalBalanceText = document.getElementById('total-blance')
        TotalBalanceText.innerText = balance

    }


})


// save button evant handling
document.getElementById('save-btn').addEventListener('click', function () {

    let savingInput = document.getElementById('saaving-input')

    if (savingInput.value < 0 || isNaN(savingInput.value)) {
        return alert('parsentage input in wrong')
    }

    let savingInputValue = parseFloat(savingInput.value)

    let TotalBalanceText = document.getElementById('total-blance')
    let TotalBalanceValu = TotalBalanceText.innerText


    let saveingAmount = (getIncomeValue() / 100) * savingInputValue
    if (TotalBalanceValu < saveingAmount) {
        return alert('you have no money')
    } else {
        document.getElementById('saving-amount').innerText = saveingAmount

    }

    let remainingBalance = TotalBalanceValu - saveingAmount
    document.getElementById('remaining-balance').innerText = remainingBalance

})