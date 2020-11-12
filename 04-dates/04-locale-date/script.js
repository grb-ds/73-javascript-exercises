/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here


    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let current_date = new Date();
    let current_day = days[current_date.getDay()];
    let current_day_number = current_date.getDate();
    let current_month = months[current_date.getMonth()];
    let current_year = current_date.getFullYear();
    let current_hours = current_date.getHours();
    let current_minutes = current_date.getMinutes();

    document.getElementById("target").innerHTML = current_day + " " +
        current_day_number + " " + current_month + " " +  current_year + ", " + current_hours + "h" + current_minutes;

})();

