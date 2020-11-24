/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    // your code here
/*    <img src="../../_shared/img/bell.svg" alt="Carousel" />
</figure>
<div class="actions">
<button type="button" id="next">Next image</button>*/

    const getFileName = (path) =>{
        let lastIndex = path.lastIndexOf("/") +1;
        return path.slice(lastIndex,path.length);
    }

    const next = () =>{
        return function () {
            let imgNode = document.getElementById("target")
            let fileNameImg = getFileName(imgNode.src);
            console.log("fileNameImg: " + fileNameImg);

            let index = gallery.findIndex(value => getFileName(value) === getFileName(fileNameImg));
            console.log(index);

            index === gallery.length - 1 ? imgNode.src = gallery[0] : imgNode.src = gallery[index + 1];

        };
    };

    document.getElementById("next").addEventListener("click", next());





})();
