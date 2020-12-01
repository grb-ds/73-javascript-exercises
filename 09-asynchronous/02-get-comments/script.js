/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // your code here
    /**
     *  Print in the console each random comment of Utils Array
     *  and catch errors and print error in the console
     */
    const getComments = (error, comments) =>{
        try {
           console.log(comments);
          return comments;
       } catch (error) {
           console.error(error.name);
           console.error(error.message);
           console.error(error.stack);
       }
    };

    /**
     *  Print in the console each post item of Utils Array
     *  and catch errors and print error in the console
     */
    const print = (error, posts) =>{
        try {
            posts.forEach((post,index)  =>{
                post.comments = [];
                //post.comments = window.lib.getComments(post.id,getComments); //return the size array :(
                try {
                    window.lib.getComments(post.id,(error, comments) =>{
                        post.comments = comments;
                        console.log("Post Index: " + index);
                        console.log("PostId: " + post.id);
                        console.log(post);
                    });
                }catch(e){
                    console.error(e.name);
                    console.error(e.message);
                    console.error(e.stack);
                }
            });
        }
        catch(e){
            console.error(e.name);
            console.error(e.message);
            console.error(e.stack);
        }
    };

    document.querySelector("#run").addEventListener("click", () => {
        //getPosts receive a callback and return a random Utils Array
        //it is implements in _shared/callbacks.js
        window.lib.getPosts(print);
    });

})();