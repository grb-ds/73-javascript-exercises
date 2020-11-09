/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  // your code here
    let txt;
    let value = confirm("Do you want some cake ?");

    if (value == true){
        txt = "Congratulations!.";
    } else {
        txt = "More cake for me then :p !";
    }
    alert(txt);
    document.getElementById("txt").innerHTML = txt.italics();
    console.log(txt);

})();