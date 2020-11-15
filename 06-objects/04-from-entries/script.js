/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
alert("Objects 4");
(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];

    // your code here

    document.getElementById("run").addEventListener("click", function (){

        let keysAndValuesArray = new Array();

        for (let i = 0; i < keys.length; i++){
            keysAndValuesArray[i] = [keys[i], values[i]];
        }

        console.log(keysAndValuesArray);

        const objectsArray = Object.fromEntries(keysAndValuesArray);

        let index = 0;


        Object.entries(objectsArray).forEach(([key, val]) => {
            index++;
            console.log(`${key} : ${val} `);
            document.getElementById("target").innerHTML += `${key} : ${val} <br/>`
        });

    });

})();
