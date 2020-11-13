/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    alert("Rand array");

    document.getElementById("run").addEventListener("click", function (){

        const number_table = document.getElementById('tb_numbers');
        let random_number;
        let random_array = new Array();

       //let cellsOfRow = number_table.rows[0].getElementsByTagName('td');

        Array.from(number_table.rows).forEach((row, row_ind) => {
            Array.from(row.cells).forEach((cell,index) =>{
                random_number = Math.floor(Math.random() * 100);
                random_array.push(random_number);
                cell.innerHTML = random_number;
            });

            let min = Math.min.apply(null, random_array);
            let max = Math.max.apply(null, random_array);
            let addition = random_array.reduce((a, b) => a + b, 0);
            let average = addition/random_array.length;

            document.getElementById("min").innerHTML = min.toString();
            document.getElementById("max").innerHTML = max.toString();
            document.getElementById("sum").innerHTML = addition.toString();
            document.getElementById("average").innerHTML = average.toString();

        });

    });

})();
