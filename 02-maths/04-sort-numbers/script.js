/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
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
        let numbersArray = Array();
        let ascendingNumbersArray = Array();
        let descendingNumbersArray = Array();

        let numbersSplit = document.getElementById("numbers").value.split(', ');

        for (let i = 0; i < numbersSplit.length; i++) {
            numbersArray.push(numbersSplit[i]);
            console.log(numbersArray[i]);
        }

        ascendingNumbersArray = numbersArray.sort(function(a,b){return a - b});
        document.getElementById("resultAscending").innerHTML = ascendingNumbersArray;
        console.log(ascendingNumbersArray);

        descendingNumbersArray = numbersArray.sort(function(a,b){return b - a});
        document.getElementById("resultDescending").innerHTML = descendingNumbersArray;
        console.log(descendingNumbersArray);
    });

})();
