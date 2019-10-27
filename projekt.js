var Display = document.getElementById('Display');
var hello = document.getElementsByTagName('input');

for (let i = 0; i < hello.length; i++) {
    hello[i].addEventListener('click', function (e) {
        function insert() {
            if (e.target.defaultValue == 'C' || Display.innerHTML == 'Infinity') {
                Display.innerHTML = "";
            }
            else if (e.target.defaultValue == '=') {
                if (Display.innerHTML.includes('+') && !isNaN(Display.innerHTML.slice(Display.innerHTML.lastIndexOf()))) {
                    let number1 = parseFloat(Display.innerHTML.slice(0, Display.innerHTML.indexOf('+')));
                    let number2 = parseFloat(Display.innerHTML.slice(Display.innerHTML.indexOf('+') + 1));
                    Display.innerHTML = number1 + number2;
                } else if (Display.innerHTML.includes('X') && !isNaN(Display.innerHTML.slice(Display.innerHTML.lastIndexOf()))) {
                    let number1 = parseFloat(Display.innerHTML.slice(0, Display.innerHTML.indexOf('X')));
                    let number2 = parseFloat(Display.innerHTML.slice(Display.innerHTML.indexOf('X') + 1));
                    Display.innerHTML = number1 * number2;
                } else if (Display.innerHTML.includes('÷') && !isNaN(Display.innerHTML.slice(Display.innerHTML.lastIndexOf()))) {
                    let number1 = parseFloat(Display.innerHTML.slice(0, Display.innerHTML.indexOf('÷')));
                    let number2 = parseFloat(Display.innerHTML.slice(Display.innerHTML.indexOf('÷') + 1));
                    Display.innerHTML = number1 / number2;
                } else if (Display.innerHTML.includes('-') && !isNaN(Display.innerHTML.slice(Display.innerHTML.lastIndexOf()))) {
                    let number1 = parseFloat(Display.innerHTML.slice(0, Display.innerHTML.indexOf('-')));

                    let number2 = parseFloat(Display.innerHTML.slice(Display.innerHTML.indexOf('-') + 1));

                    Display.innerHTML = number1 - number2;
                }
            }
            else if (e.target.defaultValue == "+" || e.target.defaultValue == "-" || e.target.defaultValue == "*" || e.target.defaultValue == "/") {
                if (!isNaN(Display.innerHTML) && Display.innerHTML != "" && Display.innerHTML.slice(Display.innerHTML.lastIndexOf()) != '.') {
                    Display.innerHTML += e.target.defaultValue;
                }
            }
            else if (e.target.defaultValue == 'ln') {
                if (!isNaN(Display.innerHTML) && !isNaN(Math.log(Display.innerHTML)) && Display.innerHTML != "") {
                    Display.innerHTML = Math.log(Display.innerHTML);
                }
            }
            else if (e.target.defaultValue == '√') {
                if (!isNaN(Display.innerHTML) && Display.innerHTML != "") {
                    Display.innerHTML = Math.sqrt(Display.innerHTML);
                }
            }
            else if (e.target.defaultValue == 'x²') {
                if (!isNaN(Display.innerHTML) && Display.innerHTML != "") {
                    Display.innerHTML = Math.pow(Display.innerHTML, 2);
                }
            }
            else if (e.target.defaultValue == '.') {
                if (Display.innerHTML != "" && !isNaN(Display.innerHTML.slice(Display.innerHTML.lastIndexOf()))) {
                    if (Display.innerHTML.includes('.') == false) {
                        Display.innerHTML += e.target.defaultValue;
                    } else if (Display.innerHTML.includes('+') || Display.innerHTML.includes('*') || Display.innerHTML.includes('/') || Display.innerHTML.includes('-')) {
                        console.log(Display.innerHTML.indexOf('+'));
                        console.log(Display.innerHTML.substr(Display.innerHTML.indexOf('+') + 1));
                        console.log(Display.innerHTML.substr(Display.innerHTML.indexOf('+') + 1).indexOf('.'));
                        if (Display.innerHTML.substr(Display.innerHTML.indexOf('+') + 1).indexOf('.') == '-1' || Display.innerHTML.substr(Display.innerHTML.indexOf('*') + 1).indexOf('.') == '-1' || Display.innerHTML.substr(Display.innerHTML.indexOf('/') + 1).indexOf('.') == '-1' || Display.innerHTML.substr(Display.innerHTML.indexOf('-') + 1).indexOf('.') == '-1') {
                            Display.innerHTML += e.target.defaultValue;
                        }
                    }
                }
            }
            else {
                Display.innerHTML += e.target.defaultValue;
            }
        }
        insert();
    });
}

