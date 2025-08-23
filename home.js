// console.log('hghjfjh')
document.getElementById('add-money-btn')
.addEventListener('click',function(e){
e.preventDefault()
console.log('add money btn clicked')
const bank = document.getElementById('bank-number').value

// const acountNumber = document.getElementById('account-number').value

const amount = parseInt(document.getElementById('amount-add').value)

const pin = document.getElementById('pin-number').value

const availableBalance = parseInt(document.getElementById('available-balance').innerText)

console.log(availableBalance)

const totalNewAvailableBalance = amount + availableBalance
document.getElementById('available-balance')
.innerText= totalNewAvailableBalance

})