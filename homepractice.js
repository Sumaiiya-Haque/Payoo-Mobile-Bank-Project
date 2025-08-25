// reusable function use korbo jeno code short o bujhte easy hoy(alhamdulillah it worked,i tried myself)
function getParseInt(num){
   const getInt = parseInt(document.getElementById(num).value)
    return getInt;
}
const validPin = 1234
// add money feature
document.getElementById('add-money-btn')
.addEventListener('click',function(e){
e.preventDefault()
// console.log('add money btn clicked')


const bank = document.getElementById('bank').value

const accountNumber = document.getElementById('account-number').value

const amount = parseInt(document.getElementById('amount-add').value)

// const pinNumber = parseInt(document.getElementById('add-pin').value)
const pinNumber = getParseInt('add-pin')

// console.log(bank,accountNumber,amount,pinNumber)
const availableBalance = parseInt(document.getElementById('available-balance').innerText)
// const availableBalance = getParseInt('available-balance').innerText
// check korbo condition
if(accountNumber.length <11){
    alert('invalid')
    return;
}

if(pinNumber !== validPin){
    alert('plz provide valid pin')
    return;
}

const totalNewAvailableBalance=availableBalance + amount

document.getElementById('available-balance').innerText = totalNewAvailableBalance
})


// cash out feature
document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault()
    const amount = getParseInt('withdraw-amount')

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    // document.getElementById('add-pin').value

    const totalNewAvailableBalance = availableBalance - amount

    document.getElementById('available-balance').innerText = totalNewAvailableBalance
})

// toggling features

document.getElementById('add-button').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display='block'
    document.getElementById('cash-out-parent').style.display='none'
})

document.getElementById('cash-out-button').addEventListener('click',function(){
    document.getElementById('add-money-parent').style.display='none'
    document.getElementById('cash-out-parent').style.display='block'
})