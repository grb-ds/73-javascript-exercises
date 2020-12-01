/* becode/javascript
 *
 * /10-asynchronous/05-promise-get-comments/script.js - 10.5: chargement d'articles et de commentaires (Promise)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here

    const callGetPosts = () =>{
        let postsPromise = window.lib.getPosts();

        postsPromise.then(result => {
            result.forEach((post, index) => {
                let commentsPromise = window.lib.getComments(post.id);
                post.comments = [];
                commentsPromise.then(resultComment => {
                    post.comments = resultComment;
                    console.log("Post Index: " + index);
                    console.log("PostId: " + post.id);
                    console.log(post);
                });
                commentsPromise.catch(error =>{
                    // Handle error
                    console.error(error.name);
                    console.error(error.message);
                    console.error(error.stack);
                });
            });
        }).catch(error =>{
            // Handle error
            console.error(error.name);
            console.error(error.message);
            console.error(error.stack);
        });
    };

    document.querySelector("#run").addEventListener("click", callGetPosts);

})();