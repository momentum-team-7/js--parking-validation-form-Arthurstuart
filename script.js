console.log('Add validation!');

let form = document.querySelector('#parking-form');
let ccNum = document.querySelector('#credit-card');
let price = 5;
console.log(price);
let submit = document.querySelector('submit-button');

window.addEventListener('submit', e => {
    e.preventDefault();
})



//  // Cost and days parked
function costPERday() {
    let numofDays = ("#days").value;
    let totalcost = eval(numofDays * 5);
    console.log(totalcost)
    const display = document.querySelector('#total')
}


// Validating the credit card
function validateCardNumber(number) {
    var regex = new RegExp("^[0-9]{16}$");
    if (!regex.test(number))
    return false;

    return luhnCheck(number);
}

function luhnCheck(val) {
    var sum = 0;
    for (var i = 0; i < val.length; i++) {
        var intVal = parseInt(val.substr(i, 1));
        if (intVal > 9) {
            intVal = (i % 2 == 0) {
                intVal *=2;
              if (intVal > 9) {
                  intVal = 1 + (intVal % 10);
              }  
            }
            sum += intVal;
        }
        return (sum % 10) == 0;
    }
};



ccNum.addEventListener("input", )