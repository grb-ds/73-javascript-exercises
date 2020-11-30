/* becode/javascript
 *
 * /10-asynchronous/01-get-posts/script.js - 10.1: chargement d'articles
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    /**
     *  Print in the console each item of Utils Array
     *  and catch and print errors in the console
     */
    const print = (error, itemsUtil) =>{
        try {
            itemsUtil.forEach(item =>console.log(item));
        }
        catch(error){
            console.error(error);
        }
    };

    document.querySelector("#run").addEventListener("click", function(){
        //getPosts receive a callback and return a random Utils Array
        //it is implements in _shared/callbacks.js
        window.lib.getPosts(print);
    });

})();