/* becode/javascript
 *
 * /10-asynchronous/04-promise-get-posts/script.js - 10.4: chargement d'articles (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here


    const callGetPosts = () => {
        let postsPromise = window.lib.getPosts();

        postsPromise.then(result => {
            console.log(result);
            result.forEach((post,index) => console.log("Index: "+index, post));
        }).catch(error => {
            // Handle error
            console.error(error.name);
            console.error(error.message);
            console.error(error.stack);
        });
    };

    document.querySelector("#run").addEventListener("click", callGetPosts);

})();