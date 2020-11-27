/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

//https://stackoverflow.com/questions/8128894/remove-prefix-from-a-list-of-strings
//https://stackoverflow.com/questions/16607557/perform-join-on-value-in-array-of-objects
//https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/join


(function() {

    // your code here
    let inputIdArray = ["part-one","part-two","part-three","part-four"]; //buttonId without stop
    let telephoneNumberArray = [{id: "part-one", value:"+460"},{id:"part-two", value:"00"},{id:"part-three", value:"00"},{id:"part-four", value:"00"}];


    let buttonPrefix = "fix-";
    let flag = true; //when is false stop showSlowMachine
   //let i = 0; //to validate showSlowMachine

     let telephoneNumber = "";

     /*** Tool functions ***/
     function getRandomInt(min, max) {
         return Math.floor(Math.random() * (max - min)) + min;
     }

     //Remove the prefix from string
    function trimPrefix(str, prefix) {
        if (str.startsWith(prefix)) {
            return str.slice(prefix.length)
        } else {
            return str
        }
    }
     /***  End tool functions ***/


    /*
     * Remove the input id item by inputIdIndex in the array
     */
    const removeInputIdArrayById = (inputId) => {
        let inputIdIndex = inputIdArray.indexOf(inputId);
        inputIdIndex > -1 ? inputIdArray.splice(inputIdIndex, 1) : false
        //console.log(inputIdArray);
    }

    /*
     * stop slow Machine. Compare array length to stop showSlowMachine
     */
    const stopSlowMachine = () => {
        inputIdArray.length == 0 ? flag = false : flag = true;
       // console.log(flag);
    }

    /*
     * Pick the value from input and set pad
     */
    const pickValue = (inputId) => {
        let inputValue = document.getElementById(inputId).value;
        if (inputId === "part-one")
            return String(inputValue).padStart(4, '+');
        else
            return String(inputValue).padStart(2, '0');
    }

    /*
    * Get telephone number part by Id from array
    */
    var getTelephoneNumberPartById = (partId) =>{
        return telephoneNumberArray.find(part => part.id === partId);
    }

    /*
    * update Telephone Number Array by inputId
    */
    const updateTelephoneNumberArray = (inputId, value) => {
        let partTelephoneNumber;
        partTelephoneNumber = getTelephoneNumberPartById(inputId);
        partTelephoneNumber.value = value;
    }

    /*
     * display Telephone Number target, join all items value of array
     */
    const displayTelephoneNumber = () => {
        telephoneNumber = telephoneNumberArray.map(item =>item.value).join("");
        console.log(telephoneNumber);
        document.getElementById("target").textContent = telephoneNumber;
    }

    /*
    * set Random Number To Input only if the respective button is not stopped
    */
    const setRandomNumberToInput = inputId => {
       // console.log(inputId);
        //Search inputId in array to continue generating a random number
        if (inputIdArray.indexOf(inputId) !== -1) {
            let inputElement = document.getElementById(inputId);
            let maxi = Number(inputElement.dataset.max);
            let mini = Number(inputElement.dataset.min);
            let randomNumber = getRandomInt(mini, maxi);
           /*console.log(`${typeof mini} - ${typeof maxi}`);
            console.log(randomNumber);*/
            document.getElementById(inputId).value = randomNumber;
        }
    }

    /*
    * Stop button, Pick the value from input and call to update the telephone number
    */
    const stopButton = buttonId => {
        //console.log("In pickValue");
        //console.log(buttonId);
        let value;
        var inputId = trimPrefix(buttonId,buttonPrefix);
        //console.log(inputId);

        //Remove the item with inputIdIndex of array
        removeInputIdArrayById(inputId);

        //Compare array length to stop showSlowMachine
        stopSlowMachine();

        //Pick and save the value
        value = pickValue(inputId);
        console.log(value);

        //update and display value
        updateTelephoneNumberArray(inputId, value);
        displayTelephoneNumber();

    }

    Array.from(document.querySelectorAll("button.stop")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (stopButton($btn.id), false),
        ),
    );


    function showSlowMachine() {

        if (flag) {
            Array.from(document.querySelectorAll("input.random")).forEach($input => setRandomNumberToInput($input.id));
           // i--;
           //console.log(i);
            setTimeout(showSlowMachine, 50);
        }
    }

    window.onload = showSlowMachine;

})();
