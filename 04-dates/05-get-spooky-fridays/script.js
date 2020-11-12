/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    alert("Dates");
    document.getElementById("run").addEventListener("click", function (){

        let date13;
        var friday13_months = new Array();
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let year = Number(document.getElementById("year").value);

        for (let month_number = 0; month_number < 12; month_number++){
            date13 = new Date(year, month_number, 13);

            if (date13.getDay() == 5) {// if the day is friday
                friday13_months.push(months[date13.getMonth()]);
                console.log(date13.toString() + " " + months[date13.getMonth()] + " " + days[date13.getDay()]);
            }
        }

        document.getElementById("target").innerHTML = friday13_months.toString();

    });

})();
