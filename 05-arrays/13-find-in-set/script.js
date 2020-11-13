/* becode/javascript
 *
 * /05-arrays/13-find-in-set/script.js - 5.13: recherche dans un Set
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const people = new Set([
        "Nicolas",
        "Nick",
        "Leny",
        "Alexandre",
        "Charlène",
        "Laureline",
        "Esther",
        "Simon",
        "Lucas",
    ]);

    // your code here
    alert("Arrays 13");
    document.getElementById("run").addEventListener("click", function (){

        console.log(`The number of the people is : ${people.size}`);
        document.getElementById("target").innerHTML = `The number of the people is : ${people.size} <br/>`;

        people.has("Alexandre") ? console.log(`Alexandre is part of the Set.`) : console.log(`Alexandre's not part of the Set.`);

        people.has("Alexandre") ?
            document.getElementById("target").innerHTML += `Alexandre is part of the Set.` :
            document.getElementById("target").innerHTML += `Alexandre's not part of the Set.`;
    });
})();
