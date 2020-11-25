/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var minLength = 8;

    document.querySelector("#pass-one").minLength = minLength;

    /*
    Credits URL:
    https://stackoverflow.com/questions/1072765/count-number-of-matches-of-a-regex-in-javascript?answertab=votes#tab-top
    this function return the ocurrens total of the 0-9 regular expression
    */
    const count = (str) => {
        const re = /[0-9]/g
        return ((str || '').match(re) || []).length
    }

    function validate(e) {
        let message
        let inputString = e.target.value;
        console.log("inputString: " + inputString);
        console.log("inputString.length: " + inputString);
        let totalNumbers = count(inputString);
        console.log(totalNumbers);

        if (inputString.length >= minLength && totalNumbers >= 2)
            document.getElementById("validity").innerHTML = "Ok";
        else
            document.getElementById("validity").innerHTML = "Not ok";
    }

    document.querySelector("#pass-one").addEventListener('input', validate);

})();
