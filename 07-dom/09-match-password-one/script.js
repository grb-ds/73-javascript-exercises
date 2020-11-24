/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

/*    <input type="text" name="pass-one" id="pass-one" />
</div>
<div class="field">
<label for="pass-two">Re-enter password:</label>
<input type="text" name="pass-two" id="pass-two" />
</div>
<div class="actions">
<button type="button" id="run">Run the script</button>*/



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
                passwordNode1.style.borderColor = "red";
                passwordNode2.style.borderColor = "red";
            }
        };
    };

    document.getElementById("run").addEventListener("click",passwordValidate());

})();
