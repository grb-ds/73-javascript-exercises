/* becode/javascript
 *
 * /02-maths/05-factorial/script.js - 2.5: Factorielle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", function() {

        // your code here
        let number = parseInt(document.getElementById("number").value);
        let value = 1;

        if (number == 0 || number == 1) {
            value = 1;
        } else {
            for (let i = 1; i<= number; i++){
                value *= i;
            }
        }

        alert(value);
        document.getElementById("result").innerHTML = value;
        console.log(value);

    });

})();
