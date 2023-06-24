var display = document.getElementById('larger');
var button = document.getElementsByClassName('bd_t');
var operator = null;
var operand1 = 0;
var operand2 = null;
function Isoperator(value) {
    return value == "+" || value == "-" || value == "/" || value == "*";
}
for (var i = 0; i < button.length; i++){
    button[i].addEventListener('click', function () {
        var value = this.getAttribute('data-value');
        var text = display.innerText.trim();
        if (Isoperator(value)) {
            operator =value;
            operand1 = parseFloat(text);
            display.textContent = "";
                         
        } else if (value == "@") {
            operand1 = parseFloat(text);
            display.textContent = -1*operand1;
            
        }
        else if (value == "AC") {
            display.textContent = "";
        } else if (value == "%") {
            operand1 = parseFloat(text);
            display.textContent = operand1 / 100;
        }
        else if (value == ".") {

            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        }else if (value == "=") {
            operand2 = parseFloat(text);
            let result = eval(operand1 + "" + operator + "" + operand2);
            if (result) {
                display.textContent = result;
                operand2 = null;
                operator = null;
                operand1 = result;
            }
        } else {
            display.innerText += value;
        }
    
    })
}
