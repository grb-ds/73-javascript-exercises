/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    var i = 0;
    var text = document.querySelector("#target").firstChild.nodeValue;
    var speed = 0;

    document.getElementById("target").innerHTML = "";

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function typeWriter() {
        if (i < text.length) {
            document.getElementById("target").innerHTML += text.charAt(i);
            i++;
            speed = getRandomInt(50,100);
            console.log(speed);
            setTimeout(typeWriter, speed);
        }
    }

    window.onload = typeWriter;

})();
