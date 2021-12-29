let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let number = document.getElementById('number');
let reset = document.getElementById('reset');
let value = 0;

//Plus button
plus.addEventListener('click', function(){
value ++;
number.innerHTML = value;
});

//Minus button
minus.addEventListener('click', function(){
value --;
number.innerHTML = value;
});

//Reset button
reset.addEventListener('click', function(){
    value = 0;
    number.innerHTML = value;
});