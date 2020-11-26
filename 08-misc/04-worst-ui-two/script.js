/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    let value1 = value2 = value3 = value4 = 0;
    let telephoneNumber = "+";

    const updateTelephoneNumber = () => {
        telephoneNumber = "+" + String(value1).padStart(2, '0') + String(value2).padStart(2, '0') + String(value3).padStart(2, '0') + String(value4).padStart(2, '0');
        document.getElementById("target").textContent = telephoneNumber;
    }



    document.getElementById("part-one").addEventListener("click", function(e) {
        console.log(e);
        console.log(this.value);

        if (value1 === this.dataset.max){
            this.value = this.dataset.min;
            value1 = this.value;
        } else if (value1 === this.dataset.min || value1 < this.dataset.max) {
            this.value++;
            value1 = this.value;
        }

        console.log(this.value);
        updateTelephoneNumber();

    }, false);

    document.getElementById("part-two").addEventListener("click", function(e) {
        console.log(this.value);

        if (value2 === this.dataset.max){
            this.value = this.dataset.min;
            value2 = this.value;
        } else if (value2 === this.dataset.min || value2 < this.dataset.max) {
            this.value++;
            value2 = this.value;
        }
        console.log(this.value);
        updateTelephoneNumber();
    }, false);

    document.getElementById("part-three").addEventListener("click", function(e) {
        console.log(this.value);
        if (value3 === this.dataset.max){
            this.value = this.dataset.min;
            value3 = this.value;
        } else if (value3 === this.dataset.min || value3 < this.dataset.max) {
            this.value++;
            value3 = this.value;
        }
        console.log(this.value);
        updateTelephoneNumber();
    }, false);

    document.getElementById("part-four").addEventListener("click", function(e) {
        console.log(this.value);
        if (value4 === this.dataset.max){
            this.value = this.dataset.min;
            value4 = this.value;
        } else if (value4 === this.dataset.min || value4 < this.dataset.max) {
            this.value++;
            value4 = this.value;
        }
        console.log(this.value);
        updateTelephoneNumber();
    }, false);

})();
