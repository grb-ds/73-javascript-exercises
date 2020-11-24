/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here

    function tableCreate(target, rowsNumber, cellsNumber){
        let elementTarget = document.getElementById(target);
        let table = document.createElement('table');

        for(let i = 0; i < rowsNumber; i++){
            let tr = table.insertRow();
            for(let j = 0; j < cellsNumber; j++){
                let td = tr.insertCell();
                let value = (i + 1) * (j + 1);
                td.appendChild(document.createTextNode(`${j+1} * ${i+1} = ${value}`));
            }
        }
        elementTarget.appendChild(table);
    }

    tableCreate("target",10,10);

})();
