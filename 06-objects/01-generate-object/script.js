/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



var person = {
    firstName: "Giomayra",
    lastName : "Rosales",
    age      : 35,
    city     : "Ghent",
    country  : "Belgium"
};

alert("Objects 1");

(() => {
    // your code here

    document.getElementById("run").addEventListener("click", function () {
        Object.entries(person).forEach(([key, val]) => {
            console.log(key, val);
            document.getElementById("target").innerHTML += `${key}: ${val} <br/>`
        });
    });

})();
