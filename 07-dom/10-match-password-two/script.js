 /* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    document.querySelector("#pass-one").setAttribute("type", "password");
    document.querySelector("#pass-two").setAttribute("type", "password");

    const passwordValidate = () => {
        return function(){
            let passwordNode1, passwordNode2;
            passwordNode1 = document.querySelector("#pass-one");
            passwordNode2 = document.querySelector("#pass-two");
            console.log(passwordNode1.value);
            console.log(passwordNode2.value);

            if (passwordNode1.value === passwordNode2.value){
                passwordNode1.style.borderColor = "green";
                passwordNode2.style.borderColor = "green";
            } else {
                passwordNode1.className = "error";
                passwordNode2.className = "error";

            }
        };
    };

    document.getElementById("run").addEventListener("click",passwordValidate());

})();
