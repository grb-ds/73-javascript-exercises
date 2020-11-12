/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let d = new Date();
    console.log(d.toString());
    console.log(d.getHours());
    console.log(d.getMinutes());
    if (d.getHours() < 18) {

        if (d.getMinutes() <= 30) {
            document.getElementById("target").innerText = "Hello";
        }
        else {
            document.getElementById("target").innerText = "Good evening!!";
        }
    }  else{
        document.getElementById("target").innerText = "Good evening!";

    }

})();
