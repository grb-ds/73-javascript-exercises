/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
alert("FETCH 04");

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
     * Add heroe to JSON
     */
    const addItemData = (jsonData) =>{
        let heroeName = document.querySelector("#hero-name").value;
        let heroeAlterEgo = document.querySelector("#hero-alter-ego").value;
        let heroePowers = document.querySelector("#hero-powers").value;
        let newHeroe = {};

        try {
            if (heroeName !== "" && heroeAlterEgo !== "" && heroePowers !== ""){
                newHeroe.id = Object.keys(jsonData).length + 1;
                newHeroe.name = heroeName;
                newHeroe.alterEgo = heroeAlterEgo;
                newHeroe.abilities = heroePowers.split(",");
                jsonData.push(newHeroe);
                console.log(jsonData);
                alert("Great! You add a new Heroe!");
            }
            else {
                alert("Please, fill all the values");
                console.log("Please, fill all the values");
            }
        }
        catch (e){
            console.error(e);
        }
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

    const addAPIHeroe = () => {
        const basePath = "http://localhost:3000";
        try {
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
                    addItemData(jsonData);
                    clearSource();
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

    document.querySelector("#run").addEventListener("click", addAPIHeroe);

    /**
     * Clear target Node
     */
    const clearTarget = () =>{
        document.querySelector("#target").innerHTML = "";
        document.querySelector("#target2").innerHTML = "";
    }

    /**
     * Clear source Node
     */
    const clearSource = () =>{
        document.querySelector("#hero-name").value = "";
        document.querySelector("#hero-alter-ego").value = "";
        document.querySelector("#hero-powers").value = "";
    }

})();