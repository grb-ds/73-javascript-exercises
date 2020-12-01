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
     *  Print in the console each post item of Utils Array
     *  and catch errors and print error in the console
     */
    const print = (error, posts) =>{
        try {
            console.log(posts);
            //posts.forEach(post =>console.log(post));
            //posts.forEach((post,index) =>console.log(index,post));
            posts.forEach((post,index) => console.log("Index: "+index, post));
        }
        catch(error){
            console.error(error.name);
            console.error(error.message);
            console.error(error.stack);
        }
    };

    document.querySelector("#run").addEventListener("click", () => {
        //getPosts receive a callback and return a random Utils Array
        //it is implements in _shared/callbacks.js
        window.lib.getPosts(print);
    });

})();