/* becode/javascript
 *
 * /06-objects/03-keys-values/script.js - 6.3: clés & valeurs
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

alert("Objects 3");

(() => {
    const person = {
        lastname: "Delnatte",
        firstname: "Pierre-Antoine",
        nickname: "Leny",
        birthDate: "08-05-1985",
        city: "Liège",
        status: "married",
    };
    // your code here

    let personDescriptorsKey = Object.getOwnPropertyDescriptors(person);

    document.getElementById("run").addEventListener("click", function (){

        let index = 0;

        Object.entries(person).forEach(([key, val]) => {
            index++;
            console.log(`Key ${index} : ${key} `);
            document.getElementById("target1").innerHTML += `Key ${index} : ${key} <br/>`
        });

        index = 0;
        Object.entries(person).forEach(([key, val]) => {
            index++;
            console.log(`Value ${key} : ${val} `);
            document.getElementById("target2").innerHTML += `${key} : ${val} <br/>`
        });


    });


})();
