document.getElementById('order-form').addEventListener('submit',function(event){
    event.preventDefault();

    const name = document.getElementById('name').Value;
    const Adderss = document.getElementById('address').Value;
    const pizza = document.getElementById('pizza').Value;
    const Quantity = document.getElementById('Quantity').Value;

    alert(`Thank You,${name}! your order for ${Quantity} $ {pizza} pizza(s) will be delivered to ${adderss}.`);
});