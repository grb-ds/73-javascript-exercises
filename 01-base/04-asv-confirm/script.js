/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let txt, name, age, gender, city;
    let value = false;

    do {

        name = prompt("Please enter your name:", "Enter your name");

        if (name == null || name == "") {
            txt = "User cancelled the name prompt.";
        } else {
            txt = "Hello " + name + "!.\n";
        }
        console.log(txt);

        age = prompt("How old are you?:", "Enter your age");

        if (age == null || age == "") {
            txt = "User cancelled the age prompt.";
        } else {
            txt = txt + "Your age is: " + age + ".\n";
        }
        console.log(txt);

        gender = prompt("What is your gender?:", "Enter your gender");

        if (gender == null || gender == "") {
            txt = "User cancelled the gender prompt.";
        } else {
            txt = txt + "Your gender is: " + gender + ".\n";
        }
        console.log(txt);

        city = prompt("What city you live?:", "Enter your city");

        if (city == null || city == "") {
            txt = "User cancelled the city prompt.";
        } else {
            txt = txt + "Your city is: " + city + ".\n";
        }
        console.log(txt);

        value = confirm(txt +"Please verify your information \n");

    }while(value == false);

    document.getElementById("txt").innerHTML = txt.italics();
    console.log(txt);

})();
