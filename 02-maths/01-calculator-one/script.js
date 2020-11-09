/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value

    let value1, value2, total, txt;

    value1 = parseFloat(document.getElementById("op-one").value);
    value2 = parseFloat(document.getElementById("op-two").value);

    console.log("Value1: " + value1);
    console.log("Value2: " + value2);

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        total = value1 + value2;
        txt = "The addition result is: " + parseFloat(total);
        alert(txt);
        document.getElementById("additionResult").innerHTML = txt;
        console.log(txt);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        total = value1 - value2;
        txt = "The substraction result is: " + parseFloat(total);
        alert(txt);
        document.getElementById("substractionResult").innerHTML = txt;
        console.log(txt);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        total = value1 * value2;
        txt = "The multiplication result is: " + parseFloat(total);
        alert(txt);
        document.getElementById("multiplicationResult").innerHTML = txt;
        console.log(txt);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        if (value2 != 0) {
            total = value1 / value2;
            txt = "The division result is: " + parseFloat(total);
            alert(txt);
            document.getElementById("divisionResult").innerHTML = txt;
            console.log(txt);
        } else{
            txt = "Divide by zero Error!";
            alert(txt)
            document.getElementById("divisionResult").innerHTML = txt;
            console.log(txt);
        }
    });

})();
