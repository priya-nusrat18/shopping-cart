// // case button event handler

// // case amount increase
// document.getElementById('case-increase').addEventListener('click', function(){
//     handproductChange(true);

// })
// // case amount increase
// document.getElementById('case-increase').addEventListener('click', function(){
//     handproductChange(true);

// })


function handproductChange(product , isIncrease){
    const productInput = document.getElementById( product +'-count');
    const productCount = parseInt(productInput.value);
    // const caseNewCount =  caseCount - 1;
    let productNewCount = productCount;
    if (isIncrease == true) {
        productNewCount =  productCount + 1;
    }
    if (isIncrease == false && productCount > 0) {
        productNewCount =  productCount - 1;
    }
    productInput.value = productNewCount;
    // const caseTotal = productNewCount * 59;
    let productTotal = 0 ;
    if (product == 'phone') {
        productTotal = productNewCount *1219;
    }
    if (product == 'case') {
        productTotal = productNewCount * 59;
    }
    document.getElementById(product + '-total').innerText=productTotal;
    totalCalculate();
}

function totalCalculate() {
    
    
    const phoneCount = getInputValue('phone');
    const caseCount = getInputValue('case');

    var totalPrice = phoneCount * 1219 + caseCount * 59;
    document.getElementById('total-price').innerText ='$' + totalPrice;

    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText ='$' + tax;

    const grandAmount = totalPrice + tax;
    document.getElementById('grand-total').innerText = '$' + grandAmount;
}
function getInputValue (product) {
    const productInput = document.getElementById(product + '-count');
    const productCount  = parseInt( productInput .value);
    return productCount;
}

// remove-item event handler

const removeItem = document.getElementsByClassName('remove-item');
    console.log('removeItem');
    for (let i = 0; i < removeItem.length; i++) {
        const button = removeItem[i];
        button.addEventListener('click', function (event) {
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove()
        })
    }
