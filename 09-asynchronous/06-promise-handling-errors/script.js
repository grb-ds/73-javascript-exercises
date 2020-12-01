/* becode/javascript
 *
 * /10-asynchronous/06-promise-handling-errors/script.js - 10.6: gestion d'erreur (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const callGetPersons = () => {
        let personsPromise = window.lib.getPersons();

        personsPromise.then(result => {
            result.forEach((person,index) => console.log("Index " + index, person));
        }).catch(error => {
            console.error(error.name);
            console.error(error.message);
            console.error(error.stack);
        });
    };

    document.querySelector("#run").addEventListener("click", callGetPersons);

})();
