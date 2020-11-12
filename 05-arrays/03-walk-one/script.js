/* becode/javascript
 *
 * /05-arrays/01-get-element/script.js - 5.1: élément de tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "apple",
        "pear",
        "raspberry",
        "tomatos",
        "kiwi",
        "banana",
        "orange",
        "mandarin",
        "durian",
        "peache",
        "grap",
        "cherry",
    ];

    // your code here
    alert("Arrays");

    document.getElementById("run").addEventListener("click", function (){
        document.getElementById("target").innerHTML = "";

        for (let i = 0; i < fruits.length; i++ ){
            console.log(i + ". " + fruits[i]);
            document.getElementById("target").innerHTML += i + ". " + fruits[i] + "<br/>";
        }
    });

})();
