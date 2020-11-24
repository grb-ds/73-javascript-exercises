/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.getElementsByTagName("img")[0].addEventListener("mouseover", mouseOver);
    document.getElementsByTagName("img")[0].addEventListener("mouseout", mouseOut);


    function mouseOver() {
        let nodeImg = document.getElementsByTagName("img")[0];
        let url = nodeImg.getAttribute("data-hover");
        nodeImg.setAttribute("src",url);

    }

    function mouseOut() {
        let nodeImg = document.getElementsByTagName("img")[0];
        let url = nodeImg.getAttribute("data-hover");
        nodeImg.style.backgroundColor = "blue";

    }


})();



