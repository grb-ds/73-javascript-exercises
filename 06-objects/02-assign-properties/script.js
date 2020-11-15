/* becode/javascript
 *
 * /06-objects/02-assign-properties/script.js - 6.2: assigner des propriétés
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.
alert("Objects 2");

(() => {
    const computers = [
        {id: "0001", available: false, user: "leny", os: "macOS"},
        {id: "0002", available: false, user: "Nicolas"},
        {id: "0003"},
        {id: "0004", os: "Windows"},
        {id: "0005"},
        {id: "0006", os: "macOS"},
        {id: "0007"},
        {id: "0008"},
        {id: "0009", available: false, user: "Anthony"},
    ];
    const defaultProps = {
        available: true,
        os: "linux",
        user: null,
    };
    // your code here

    let defaultPropsDescriptors = Object.getOwnPropertyDescriptors(defaultProps);

    //This function return a new object with the properties and values complete
    // without the reference of source object
    function completeAssign(sourceObject) {

        let targetObject = new Object();

        for (let targetObjectEntry in sourceObject){
            Object.assign(targetObject, { [targetObjectEntry]: sourceObject[targetObjectEntry] });
        }

        for (let current_property in defaultPropsDescriptors) {
            if (!targetObject.hasOwnProperty(current_property)) {
               Object.assign(targetObject, { [current_property]: defaultProps[current_property] });
            }
        }
        return targetObject;
    }

    document.getElementById("run").addEventListener("click", function () {

        let new_computers = [];
        let index = 0;
        document.getElementById("target1").innerHTML = '';
        document.getElementById("target2").innerHTML = '';

        computers.forEach(computer => {
             let new_computer = completeAssign(computer);
            new_computers.push(new_computer);
         });

        console.log("Original Computers");

        computers.forEach(current_computer => {
            index++;
            console.log(current_computer);
            document.getElementById("target1").innerHTML += ` Original Computer ${index}: `
            Object.entries(current_computer).forEach(([key, val]) => {
                document.getElementById("target1").innerHTML += `${key}: ${val}, `
            });
            document.getElementById("target1").innerHTML += '<br/>'
        });

        index = 0;
        console.log("Complete Computers");

        new_computers.forEach(current_new_computer => {
            index++;
            console.log(current_new_computer);
            document.getElementById("target2").innerHTML += `New Computer ${index}: `
            Object.entries(current_new_computer).forEach(([key, val]) => {
                document.getElementById("target2").innerHTML += `${key}: ${val}, `
            });
            document.getElementById("target2").innerHTML += '<br/>'
        });

    });
})();
