/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
//https://www.w3schools.com/xml/tryit.asp?filename=try_dom_clonenode
//https://www.w3schools.com/js/js_json_stringify.asp
//https://stackoverflow.com/questions/4810841/pretty-print-json-using-javascript

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
                    displayData(data);
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

})();