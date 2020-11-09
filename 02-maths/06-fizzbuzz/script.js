/* becode/javascript
 *
 * /02-maths/06-fizzbuzz/script.js - 2.6: fizzbuzz
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let text = "", endText ="";

    for (let i = 1; i <= 100; i++) {
        text = i;
        if (i%3 == 0){
            text = text + " fizz";
            if (i%5 == 0){
                text += "buzz";
            }
        } else if (i%5 == 0){
            text += " buzz";
        }
        endText += text + "<br>"
        console.log(text);
    }
    document.getElementById("result").innerHTML = endText;

})();
