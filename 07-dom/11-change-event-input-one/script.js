/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    var cont = 0;
    var maxLength = 10;

    document.querySelector("#pass-one").maxLength = maxLength;

    function updateValue(e) {
        console.log(e);
        let inputString = e.target.value;
        console.log("inputString: " + inputString);

        document.getElementById("counter").innerHTML = inputString.length.toString() + "/10";
    }

    function keyCount(e) {
        console.log(e);
        console.log(e.target.value);

        if (e.keyCode !== 8) { //Backspace
            if (cont < maxLength)
                cont++;
        }else {
            if (cont < maxLength)
                cont--;
        }

        document.getElementById("counter").innerHTML = cont.toString() + "/10";
    }


    document.querySelector("#pass-one").addEventListener('input', updateValue);
    /*document.querySelector("#pass-one").addEventListener('keypress', keyCount);*/
    //document.querySelector("#pass-one").addEventListener('keydown', keyCount);



})();
