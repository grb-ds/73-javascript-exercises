/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let originalText = document.querySelector("#target").firstChild.nodeValue;
    console.log(originalText);
    //Woo-hoo! I'm making waves! Wéééé! Oh ... I think I'm having seasickness ...


    let textSplit = originalText.split(/[\!(...)]+/)
    textSplit[0] += "!";
    let textSplit0 = textSplit[0].fontsize(5);
    textSplit[1] += "!";
    let textSplit1 = textSplit[1].fontsize(7);
    textSplit[2] += "!";
    let textSplit2 = textSplit[2].fontsize(5);
    textSplit[3] += " ...";
    let textSplit3 = textSplit[3].fontsize(10);
    textSplit[4] += "...";

    let textSplit4 = textSplit[4].fontsize(5);


    //document.querySelector("#target").firstChild.textContent = textSplit0 + textSplit1  + textSplit2 + textSplit3  + textSplit4;
    //document.querySelector("#target").firstChild.nodeValue = textSplit0 + textSplit1  + textSplit2 + textSplit3  + textSplit4;

    document.getElementById("target").innerHTML = textSplit0 + textSplit1  + textSplit2 + textSplit3  + textSplit4;

})();
