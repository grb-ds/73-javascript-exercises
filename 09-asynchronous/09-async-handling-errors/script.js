/* becode/javascript
 *
 * /10-asynchronous/09-async-handling-errors/script.js - 10.9: gestion d'erreur (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    async function callGetPersonsAsync() {
        return await window.lib.getPersons();
    }

    const callGetPersons = () => {
        let personsPromise = callGetPersonsAsync();

        personsPromise.then(result => {
            result.forEach((person,index) => console.log("Index " + index, person));
        }).catch(error => {
            console.error(error.name);
            console.error(error.message);
            console.error(error.stack);
        });
    };

    document.querySelector("#run").addEventListener("click", callGetPersons)

})();