/* becode/javascript
 *
 * /09-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//https://backendless.com/building-a-light-rest-client-with-javascript/
//https://stackoverflow.com/questions/39632667/how-do-i-kill-the-process-currently-using-a-port-on-localhost-in-windows

(() => {
    // your code here

    /**
     * This async function use fetch to make request API heroes
     * @param basePath is required to avoid error 404
     */
    const callHeroesRequest = async (basePath) => {
        return await fetch(`${basePath}/heroes`,{});
    };

    const callAPI = () => {
        const basePath = "http://localhost:3000";

        try {
            let heroesResponse = callHeroesRequest(basePath);
            console.log(heroesResponse);
            heroesResponse
                .then((response) => {
                    console.log(response.status);
                    return (response.json());
                })
                .then((data) => {
                    console.log(data);
                })
                .catch(error => {
                    console.error(error.name);
                    console.error(error.message);
                    console.error(error.stack);
                });
        } catch(error) {
            console.error(error.name);
            console.error(error.message);
            console.error(error.stack);
        }

        //TODO: HANDLE STATUS ???
    };

    document.querySelector("#run").addEventListener("click", callAPI);

})();