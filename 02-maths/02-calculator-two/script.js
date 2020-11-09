/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the
        let value1, value2, total, txt;

        value1 = parseFloat(document.getElementById("op-one").value);
        value2 = parseFloat(document.getElementById("op-two").value);

        console.log("Value1: " + value1);
        console.log("Value2: " + value2);
        console.log(operation);
        switch (operation){
            case "addition":
                total = value1 + value2;
                txt = "The addition result is: " + parseFloat(total);
                alert(txt);
                document.getElementById("additionResult").innerHTML = txt;
                console.log(txt);
                break;
            case "substraction":
                total = value1 - value2;
                txt = "The substraction result is: " + parseFloat(total);
                alert(txt);
                document.getElementById("substractionResult").innerHTML = txt;
                console.log(txt);
                break;
            case "multiplication":
                total = value1 * value2;
                txt = "The multiplication result is: " + parseFloat(total);
                alert(txt);
                document.getElementById("multiplicationResult").innerHTML = txt;
                console.log(txt);
                break;
            case "division":
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
                break;
        }
    };

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
