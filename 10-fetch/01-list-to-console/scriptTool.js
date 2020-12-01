/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//https://levelup.gitconnected.com/javascript-fetch-api-basics-5b28b47cde74

(() => {
    // your code here

    const countries = fetch('https://restcountries.eu/rest/v2/all', {})
        .then( (response) => {
            //console.log(response.text());
            return (response.json());
        })
            .then ((data) => {
                console.log(data);
            });


    console.log(countries);

    setTimeout( () => {
        console.log(countries);
    }, 1000)
})();