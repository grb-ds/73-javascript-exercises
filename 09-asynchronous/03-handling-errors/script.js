/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const print = (error, persons) => {
        try{
            persons.forEach((value,index) => console.log("Index " + index, value));
        }catch (error){
            console.error(error.name);
            console.error(error.message);
            console.error(error.stack);
        }
    };

    document.querySelector("#run").addEventListener("click", () => {
        window.lib.getPersons(print);
    });
})();