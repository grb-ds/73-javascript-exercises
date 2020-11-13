/* becode/javascript
 *
 * /05-arrays/11-dedupe-array/script.js - 5.11: dédoublonnement d'un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const fruits = [
        "cerise",
        "durian",
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "orange",
        "mandarine",
        "fraise",
        "durian",
        "pêche",
        "cerise",
        "raisin",
        "cerise",
    ];

    // your code here
    alert("Arrays 11");
    document.getElementById("run").addEventListener("click", function (){

        let new_fruits = new Array();

        fruits.forEach(fruit => {
           let fruit_finded = new_fruits.find(new_fruit => new_fruit === fruit);
           if (fruit_finded == null)
               new_fruits.push(fruit);
        });

        console.log(new_fruits.toString());
        document.getElementById("target").innerHTML = new_fruits.toString();

    })

})();
