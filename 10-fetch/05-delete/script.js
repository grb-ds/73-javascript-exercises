/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

alert("FETCH 05");

(() => {
    // your code here

    /**
     * Display data in code element with JSON.stringify
     */
    const displayJSONCode = (jsonData) =>{
        let stringData =  JSON.stringify(jsonData,undefined, 2);
        let node = document.createElement("code");
        let textNode = document.createTextNode("");
        node.setAttribute("id","codeTarget"); // with value "" is null

        node.appendChild(textNode);
        document.querySelector("#target2").appendChild(node);
        document.querySelector("#target2").style.textAlign = "left";
        document.querySelector("#codeTarget").innerHTML = "<pre>"+stringData+"</pre>";
    }

    /**
     * Remove heroe in JSONData
     */
    const removeItemData = (jsonData, id) =>{
        const itemIndex = jsonData.findIndex(item => item.id === id);

        if(itemIndex !== -1){
            //delete jsonData[itemIndex]; //show empty
            jsonData.splice(itemIndex,1);
            console.log(jsonData);
            alert("Great! You delete the Heroe!");
        };
    }

    /**
     * This async function use fetch to make request API heroes
     * @param basePath is required to avoid error 404
     */
    const callHeroesRequest = async (basePath) => {
        return await fetch(`${basePath}/heroes`,{});
    };

    const deleteAPIHeroe = () => {
        const basePath = "http://localhost:3000";
        try {
            let heroId = parseInt(document.querySelector("#hero-id").value);
            let heroesResponse = callHeroesRequest(basePath);
            console.log(heroesResponse);
            heroesResponse
                .then((response) => {
                    if (response.status === 200) {
                        return (response.json());
                    } else {
                        throw Error(response.status);
                    }
                })
                .then((jsonData) => {
                    console.log(jsonData);
                    removeItemData(jsonData, heroId);
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

    document.querySelector("#run").addEventListener("click", deleteAPIHeroe);

})();