/* becode/javascript
 *
 * /10-asynchronous/07-async-get-posts/script.js - 10.7: chargement d'articles (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//https://www.w3schools.com/js/js_async.asp

(() => {
    // your code here


    async function callGetPostsAsync() {
        return await window.lib.getPosts();
    }

    const callGetPosts = () => {
        let postsPromise = callGetPostsAsync();

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

    document.querySelector("#run").addEventListener("click", callGetPosts)

})();