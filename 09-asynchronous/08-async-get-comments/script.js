/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

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

    async function callGetCommentsAsync() {
        return await window.lib.getComments();
    }

    const callGetPosts = () =>{
        let postsPromise = callGetPostsAsync();

        postsPromise.then(result => {
            result.forEach((post, index) => {
               // let postId = post.id;
                let commentsPromise = callGetCommentsAsync(post.id);
                post.comments = [];
                commentsPromise.then((resultComment) =>  {
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

    document.querySelector("#run").addEventListener("click", callGetPosts)

})();