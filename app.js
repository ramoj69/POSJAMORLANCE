const choice = document.querySelector('#Choice');
const finalzie = document.querySelector('#button_finalize');
const test = document.querySelector('#example');
const add_item_button = document.querySelector('#add_item');
const item_div = document.querySelector('.Items');
const quantity_div = document.querySelector('#quantity');
const quantity_reset = document.getElementById('Quantity');
const Payment_button = document.querySelector('#Payment_button');
const tshirt = {
    item: "t-shirt",
    price: 20,
    quantity: 0,
}

const pants = {
    item: "pants",
    price: 50,
    quantity: 0,
}
const cap = {
    item: "cap",
    price:50,
    quantity: 0,
}

let item_order= [];
// let item_quantity= [];
// let item_item = [];
// let item_price= [];

// let input, select;

let all_inputs;
let all_selects;
add_item_button.addEventListener('click', function() {
    const select = document.createElement('select');
    select.setAttribute('class', 'item_select');
    const options = [
        "T-Shirt",
        "Pants",
        "Cap"
    ];

    options.forEach(optionText => {
        const option = document.createElement('option');
        option.text = optionText;
        select.add(option);
    });
    item_div.appendChild(select);

    const input = document.createElement('input');
    input.setAttribute('class', 'item_quantity');
    input.type = 'text';
    quantity_div.appendChild(input);
});

finalzie.addEventListener('click', function(){
    const all_selects = document.querySelectorAll('.item_select');
    const all_inputs = document.querySelectorAll('.item_quantity');
    let totalPrice = 0;
    all_selects.forEach((select, index) => {
        const item = select.value;
        const quantity = parseInt(all_inputs[index].value) || 0;

        switch(item) {
            case "T-Shirt":
                totalPrice += quantity * 20;
                break;
            case "Pants":
                totalPrice += quantity * 50; 
                break;
            case "Cap":
                totalPrice += quantity * 50; 
                break;
        }
    });
    alert(`Total Price: P${totalPrice.toFixed(2)}`);
    const paymentAmount = parseFloat(totalPrice.toFixed(2));
    localStorage.setItem('totalPrice', paymentAmount);
});
Payment_button.addEventListener('click',function(){
    const totalPrice = localStorage.getItem('totalPrice');
    if (totalPrice) {
        const paymentAmount = parseFloat(document.getElementById('payment').value) || 0;
        const change = paymentAmount - totalPrice;
        if (paymentAmount >= totalPrice) {
            alert(`Payment successful!\nChange: P${change.toFixed(2)}`);
        } else {
            alert("Boi bawal yan kulang pera mo. Maglagay ka naman ng maayos.");
        }
    } else {
        alert("Magbayad ka muna at isure mo ung bibilhen mo.");
    }
});