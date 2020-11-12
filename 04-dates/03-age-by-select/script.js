/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
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

       let age, age_month, age_day;

       let birth_year = Number(document.getElementById("dob-year").value);
       let birth_month = Number(document.getElementById("dob-month").value);
       let birth_day= Number(document.getElementById("dob-day").value);

       let current_date = new Date();
       let current_year = current_date.getFullYear();
       let current_month = current_date.getMonth() + 1;
       let current_day = current_date.getDate();

        console.log("Current date " + current_date.toString());

        console.log("Current year is :" + current_year);
        console.log("Current month is :" + current_month);
        console.log("Current day is :" + current_day);

        age = current_year - birth_year;
        age_month = current_month - birth_month;
        age_day = current_day - birth_day;

        console.log("age_month :"+ age_month);
        console.log("age_day :"+ age_day);

        if ( age_month > 0 ){ //the user was already on his birthday
            document.getElementById("age").innerHTML = age + " years old";
        }
        else if ( age_month < 0){ //the user has not yet had a birthday
             age = age - 1;
            document.getElementById("age").innerHTML = age + " years old";
        }
        else if ( age_month == 0){ //this is the same month of birthday
            if (age_day > 0 ) { //the user was already on his birthday
                document.getElementById("age").innerHTML = age + " years old";
            } else if(age_day == 0 ) { //today is your birthday
                document.getElementById("age").innerHTML = age + " years old. Happy Birthday!!";
            }
            else if (age_day < 0 ) { //the user has not yet had a birthday
                age = age - 1;
                document.getElementById("age").innerHTML = age + " years old";
            }
        }
    });

})();
