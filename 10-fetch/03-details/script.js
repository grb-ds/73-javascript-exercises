/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
alert("here");

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
     * Display data in elements html
     */
    const displayItemData = (itemData) =>{
        let templateElement = document.querySelector("#tpl-hero");
        let targetElement = document.querySelector("#target");

        let cloneNode = templateElement.content.cloneNode(true);
        cloneNode.id = "heroe-finded";
        //console.log(cloneNode);
        cloneNode.querySelector(".name").innerHTML = itemData.name;
        cloneNode.querySelector(".alter-ego").innerHTML = itemData.alterEgo;
        cloneNode.querySelector(".powers").innerHTML = itemData.abilities.toString();
        document.querySelector("#target").appendChild(cloneNode);

    }

    /**
     * Display data in elements html
     */
    const displayData = (jsonData) =>{
        let templateElement = document.querySelector("#tpl-hero");
        let targetElement = document.querySelector("#target");

        jsonData.forEach(item => {
            let cloneNode = templateElement.content.cloneNode(true);
            cloneNode.querySelector(".name").innerHTML = item.name;
            cloneNode.querySelector(".alter-ego").innerHTML = item.alterEgo;
            cloneNode.querySelector(".powers").innerHTML = item.abilities.toString();
            document.querySelector("#target").appendChild(cloneNode);
        });
    }

    /**
     * This async function use fetch to make request API heroes by id
     * @param basePath is required to avoid error 404
     */
    const callHeroesRequestById = async (basePath,id) => {
        return await fetch(`${basePath}/heroes/${id}`,{});
    };

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
            let heroId = parseInt(document.querySelector("#hero-id").value);
            let heroesResponse = callHeroesRequestById(basePath,heroId);
            console.log(heroesResponse);
            heroesResponse
                .then((response) => {
                   if (response.status === 200) {
                        return (response.json());
                   } else {
                       clearTarget();
                       alert("Please, Try with another heroe ID");
                       throw Error(response.status);
                   }
                })
                .then((data) => {
                    console.log(data);
                    clearTarget();
                    displayItemData(data);
                    //displayJSONCode(data);
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

    /**
     * Clear target Node
     */
    const clearTarget = () =>{
        document.querySelector("#target").innerHTML = "";
        document.querySelector("#target2").innerHTML = "";
    }

})();