// console.log('hghjfjh')
const validPin = 1234
// add money feature
document.getElementById('add-money-btn')
.addEventListener('click',function(e){
e.preventDefault()
console.log('add money btn clicked')
const bank = document.getElementById('bank-number').value

// const acountNumber = document.getElementById('account-number').value

const amount = parseInt(document.getElementById('amount-add').value)

const pin = parseInt(document.getElementById('pin-number').value)

const availableBalance = parseInt(document.getElementById('available-balance').innerText)

console.log( amount,availableBalance)

if(bank.length < 11){
    alert('plz provide valid account number')
    return;
}

if(pin !== validPin){
    alert('plz provide valid pin number')
    return;
}

const totalNewAvailableBalance = amount + availableBalance
document.getElementById('available-balance')
.innerText= totalNewAvailableBalance

})


// cashout money feature
document.getElementById('withdraw-btn')
.addEventListener('click',function(e){
    e.preventDefault()

    const amount=parseInt(document.getElementById('withdraw-amount').value)

    const availableBalance=document.getElementById('available-balance')
    .innerText

    const totalnewAvailableBalance =availableBalance - amount

    document.getElementById('available-balance').innerText = totalNewAvailableBalance
})

// toggling

document.getElementById('add-button')
.addEventListener('click',function(){
    document.getElementById('cash-out-parent')
    .style.display='none'
    document.getElementById('add-money-parent')
    .style.display='block'
})

document.getElementById('cash-out-button')
.addEventListener('click',function(){
    document.getElementById('cash-out-parent')
    .style.display='block'
    document.getElementById('add-money-parent')
    .style.display='none'
})